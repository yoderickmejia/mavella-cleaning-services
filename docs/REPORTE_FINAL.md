# Reporte final — Mavella Cleaning Services

Refactor del sitio para que coincida con el **Figma real** (vía MCP,
`node 2011-9192`), con el **azul del logo** y los **textos del `.txt`**.
Build, lint y Docker verificados en verde.

## 1. Qué cambió respecto a la versión anterior
La versión previa calcó el layout desde las **imágenes** de `figmas/` (prohibidas en
este brief) y tenía estética "AI-slop". Esta ronda reconstruye contra el **Figma de la
URL** leído por MCP, con medidas exactas:
- **Header:** barra superior navy con 3 bloques (Call / Serving Time / Service Area,
  icono+label+valor) + redes; nav con **subrayado dorado** en el activo.
- **Hero:** imagen en **arco** + **retrato circular** solapado + **sello giratorio**;
  titular con **última palabra acentuada**; 2 botones crisp. Se eliminó mesh/glow/glass/sparkles.
- **Servicios:** **banda navy** con cabecera a 2 columnas y **cards que sobresalen**.
- **About + Booking form** a 2 columnas; submit del form en **dorado** (como el Figma).
- **How It Works:** stepper de **cards con badge numerado** y flechas conectoras.
- **Promo:** banda navy + imagen + **sello "Free Quote"** (reemplaza "20% OFF").
- **Reviews:** 3 cards estilo testimonio (empty-state honesto).
- **Tokens** re-hechos: radios crisp, sombras sutiles, banda oscura, acento dorado.

## 2. Fidelidad al Figma
**Replicado igual:** orden de secciones, barra superior con 3 bloques, nav + indicador
dorado, hero (arco + retrato + badge + palabra acentuada), banda navy de servicios con
cards sobresalientes y botón de flecha, About+Booking a 2 columnas, stepper de 4 pasos
con flechas, promo en banda navy con sello circular, grid de 3 testimonios, iconografía
Lucide (la misma del Figma).
**Adaptado (y por qué):**
- Paleta verde → **azul del logo** (requisito del brief).
- 3 cards del Figma → **6 servicios** reales del `.txt` (mismo estilo de card).
- Textos placeholder del Figma → **copy real del `.txt`**; cifras/precios/testimonios
  inventados → contenido honesto (sello "Free Quote", reviews "once available").
- **Marcas de cliente** (hexágonos) omitidas (no hay logos reales).
- Secciones del `.txt` sin lugar en el Figma (Why Choose, Tips, Newsletter, Contact)
  → **creadas en el mismo lenguaje visual**.
- Medidas del artboard (856px ≈ 60%) interpretadas como **proporciones responsive**.

## 3. Paleta y fuentes
- **Primario** `brand-600 #2a62ab` (royal del logo) · **navy bandas** `band #112a52`
  · **tinta** `ink #0f2033` · **muted** `#566579` · **fondo suave** `mist #f3f8fd`
  · **borde** `line #e4ecf5` · **cian** `sky-400 #52b9ec`/`sky-300 #8fd6f6`
  · **dorado** `gold-400 #f6b63f`. Escala completa `brand-50…950` en `docs/DESIGN_SYSTEM.md`.
- **Fuentes:** Plus Jakarta Sans (titulares) + Inter (cuerpo/botones).

## 4. Mapeo de textos (`.txt` → secciones)
1 Main Desc → metadata/footer · 2 Hero → Hero · 3 Services → banda de servicios (6
cards) · 4 About → About+checks+booking · 5 Quote → `/quote` + booking form · 6 How It
Works → stepper · 7 Promo → banda promo · 8 Why Choose → sección propia · 9 Tips →
sección propia · 10 Reviews → testimonios (empty-state) · 11 Newsletter → sección propia
· 12 Contact → sección + `/contact` · 13 Footer → footer.
**Microtextos escritos por mí** (breves, inglés): `alt` de imágenes, labels/placeholders
y mensajes de formularios, sub-líneas de los 4 valores, consejos de `/cleaning-tips`,
sello "Free Quote", breadcrumbs, 404 y plantillas legales (marcadas para revisión legal).

## 5. Fotos usadas
Reutilizadas de `mavella-assets/` (prioridad del brief) + 2 de Pexels, recortadas a la
**forma del Figma** (arco, círculo, 3:2, full-bleed) y optimizadas a WebP. Detalle en
`docs/IMAGE_CREDITS.md`.

## 6. Animaciones (dónde)
- **Lenis** smooth-scroll global (`SmoothScroll`).
- **GSAP SplitText** en el titular del hero (palabras).
- **GSAP ScrollTrigger** `Reveal` con stagger sutil en todas las secciones.
- **Motion**: hover de cards de servicio y nav activo (layout); menú móvil (Sheet).
- **Sello circular** del hero gira lento.
- Todo respeta `prefers-reduced-motion` (CSS + guardas JS) y usa solo `transform`/`opacity`.

## 7. Impeccable
Se aplicaron **sus principios/anti-patrones de forma manual** (jerarquía clara,
anti-slop, carga cognitiva baja, contraste AA, motion contenida) en vez del flujo
multi-agente, por tiempo. Correcciones principales derivadas: eliminar mesh/glow/glass/
sparkles, eyebrow plano, radios crisp, sombras sutiles, botón dorado para el submit,
reducir bandas oscuras redundantes en el Home.

## 8. Decisiones propias (resumen)
Ver `DECISIONS.md` (22–32): Figma como único diseño; azul del logo; ignorar textos/cifras
placeholder; 6 servicios reales; sello "Free Quote"; omitir marcas de cliente; SVG social
inline (X en vez de Dribbble); dorado como acento; quitar slop; orden del Home; fix del
healthcheck de Docker.

## 9. Build, QA y Lighthouse
- **Build:** `npm run build` → **exit 0**, 17 rutas (home y subpáginas estáticas; 3 API
  dinámicas). **Lint:** `eslint` → **0 errores**. **Typecheck:** incluido en el build (OK).
- **Responsive:** mobile-first; grids colapsan a 1–2 columnas; barra superior y nav
  desktop se ocultan en móvil (menú Sheet). Sin overflow (hay `overflow-x: hidden`).
- **Docker:** `docker compose up --build` → imagen construida, contenedor **healthy**,
  **200** en `/ /services /about /how-it-works /contact /quote /sitemap.xml /robots.txt`
  y **200** en `POST /api/quote`.
- **Lighthouse:** no se corrió automáticamente aquí (sin navegador headless instalado).
  Base favorable: SSG, `next/image` AVIF/WebP, fuentes `next/font`, JS mínimo,
  `prefers-reduced-motion`, metadata/OG/JSON-LD/sitemap/robots presentes, HTML semántico
  y focus visible. **Pendiente:** correr Lighthouse móvil real y ajustar si hace falta.

## 10. Cómo correrlo
**Local (dev):**
```bash
cd mavella-web
npm install          # usa .npmrc (legacy-peer-deps) por React 19
npm run dev          # http://localhost:3000
```
**Producción local:**
```bash
npm run build && npm run start
```
**Docker:**
```bash
cd mavella-web
docker compose up --build        # http://localhost:3000
# (en este equipo el host 3000 estaba ocupado por otro contenedor;
#  el compole quedó mapeado a 3009:3000 como acomodo local. Cambiar a
#  "3000:3000" en docker-compose.yml para el entorno limpio de la clienta.)
```

## 11. Pendientes / recomendaciones
- **Reemplazar placeholders reales antes de lanzar:** teléfono, email, WhatsApp, zona,
  horario (`src/lib/site.ts` / `.env`), URLs de redes sociales (header), y textos legales.
- **Correr Lighthouse móvil** real (objetivos Perf ≥90, A11y ≥95, BP ≥95, SEO ≥95) y
  ajustar si surge algo.
- **Poblar reseñas** cuando existan (quitar el empty-state) y añadir un par real
  **antes/después** si la clienta las provee (hay slider `BeforeAfter`).
- Poner el puerto host de `docker-compose.yml` en **3000** en el servidor de destino.
- Opcional: activar un proveedor de email (`RESEND_API_KEY`) — hoy va en "modo log".
