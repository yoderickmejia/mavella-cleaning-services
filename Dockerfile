# syntax=docker/dockerfile:1

# ---- Base ----------------------------------------------------------------
FROM node:22-alpine AS base
# libc6-compat helps some native deps (e.g. sharp) on Alpine.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- Dependencies --------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci

# ---- Builder -------------------------------------------------------------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
# Public site URL is inlined at build time (NEXT_PUBLIC_*). Pass via --build-arg;
# empty falls back to the default in src/lib/site.ts.
ARG NEXT_PUBLIC_SITE_URL=""
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner --------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Standalone output: minimal server + only required node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
