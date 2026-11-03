# CAMBIOS MAVELLA — Checklist

Fuente: `CAMBIOS MAVELLA.pdf` (8 páginas, anotaciones de la clienta). Fecha: 2026-11-02.
**NO se ha modificado código todavía** — esto es solo el inventario de cambios pedidos.

### Notas de contexto (leer antes de ejecutar)
- Los pantallazos del PDF corresponden a una versión **ligeramente distinta** a la del código actual. En particular, la tarjeta de stats de la página 2 (`12,000+ Homes cleaned`, `4.9`, `60 sec`, `100% Satisfaction`) **no existe en el código actual** (`grep` sin resultados). Donde el PDF no coincide con el código, se indica en la Verificación.
- Carpetas de imágenes en el repo:
  - **portada/** → `portada/portada.jpg` (1 foto) — foto de portada/hero.
  - **servicios/servicios/** → `comercial.jpg`, `construction.jpg`, `customized.jpg`, `deep.jpg`, `move in.jpg`, `residencial.jpg` (6 fotos, calzan con los 6 servicios).
  - **FOTOS RANDOM/FOTOS RANDOM/** → `Modern Deep-Clean Countertop Setup.png`, `Professional Kitchen Cleaning Service.png` (2 fotos, genéricas).
  - Destino actual de imágenes optimizadas: `public/images/*.webp`.
- El contenido/copys viven centralizados en `src/lib/site.ts`; los layouts en `src/components/**`.

---

## Página 1 — Header + Hero

- [ ] C01 | (pág. 1) En el espacio del logo del header (hoy solo la "M") poner el texto/wordmark **"MAVELLA CLEANING SERVICES"** | Archivo(s) probables: `src/components/layout/site-header.tsx` (usa `LogoMark`), `src/components/layout/logo.tsx` | Verificación: el header muestra "Mavella Cleaning Services" junto a/en lugar del mark; antes solo se veía `mavella-mark.svg`.

- [ ] C02 | (pág. 1) En el top-bar "Serving Time" dejar **"Mon – Fri: 8:00 AM – 6:00 PM"** y **quitar el sábado** (hoy dice "Mon–Fri 8–6 · Sat 9–2") | Archivo(s) probables: `src/lib/site.ts` (`contact.hoursShort` y `contact.hours`), lo consume `src/components/layout/site-header.tsx` | Verificación: el top-bar ya no menciona "Sat"; revisar también footer/JSON-LD si reusan `hours`.

- [ ] C03 | (pág. 1) Cambiar el titular del hero por **"Home feels good, clean feels better."** (tacha el actual "Come Home to Clean. Stay for the Feeling.") | Archivo(s) probables: `src/lib/site.ts` (`hero.headline`), render en `src/components/sections/hero.tsx` | Verificación: el H1 del hero dice el nuevo texto; cuidar el efecto `SplitHeading`/`accentLast`.

- [ ] C04 | (pág. 1) Quitar la foto del hero y poner una nueva — **imagen sale de la carpeta `portada/` (`portada.jpg`)** | Archivo(s) probables: `src/components/sections/hero.tsx` (hoy `/images/hero.webp` + retrato `/images/cleaner-portrait.webp`), nueva webp en `public/images/` | Verificación: el hero muestra la foto de portada nueva; la imagen anterior ya no aparece.

## Página 2 — Hero (bloque de confianza)

- [ ] C05 | (pág. 2) En el espacio bajo los botones del hero, poner un bloque al estilo de la tarjeta de stats, con **checks finos (no gruesos)** que digan: **"Licensed & Insured"**, **"Registered Business"** y **el de Satisfaction**; **quitar** los demás (12,000+ homes, 4.9 rating, 60 sec booking) | Archivo(s) probables: `src/components/sections/hero.tsx` (crear bloque de trust badges) | Verificación: aparecen 3 ítems con check fino (Licensed & Insured / Registered Business / Satisfaction) y no hay métricas inventadas. Nota: la tarjeta de stats del pantallazo no existe en el código actual, así que es básicamente un bloque nuevo.

## Página 3 — Sección de Servicios

- [ ] C06 | (pág. 3) La sección de servicios se ve "muy grande": **reducir el texto** de las tarjetas (descripciones más cortas) | Archivo(s) probables: `src/lib/site.ts` (`services[].description`), layout en `src/components/sections/services-section.tsx` y `service-card.tsx` | Verificación: las 6 descripciones son más breves y la sección ocupa menos alto.

- [ ] C07 | (pág. 3) **Cambiar las fotos** de las tarjetas de servicios — **imágenes salen de la carpeta `servicios/servicios/`** (6 archivos que calzan con los 6 servicios) | Archivo(s) probables: `src/lib/site.ts` (`services[].image`), nuevas webp en `public/images/` | Verificación: cada tarjeta (Residential, Deep, Commercial, Move-In/Out, Post-Construction, Customized) usa la foto correspondiente de la carpeta `servicios/`.

- [ ] C08 | (pág. 3) Poner una etiqueta **"Most popular"** en la tarjeta de **Deep Cleaning** | Archivo(s) probables: `src/components/sections/service-card.tsx` / `services-section.tsx` (y flag en `src/lib/site.ts` `services[]`) | Verificación: solo la tarjeta Deep Cleaning muestra el badge "Most popular".

- [ ] C09 | (pág. 3) Cambiar el eyebrow de la sección de servicios de **"What We Offer"** a **"Our Services"** (el título "Your Space, Taken Care Of." NO está tachado, se mantiene) | Archivo(s) probables: `src/components/sections/services-section.tsx` (línea del `<Pill tone="dark">What We Offer</Pill>`) | Verificación: el eyebrow dice "Our Services"; el H2 sigue igual.

## Página 4 — Sección About

- [ ] C10 | (pág. 4) Cambiar el eyebrow de **"About Company"** a **"About Mavella"** | Archivo(s) probables: `src/components/sections/about-preview.tsx` (`label="About Company"`) | Verificación: el eyebrow de la sección About dice "About Mavella".

## Página 5 — "Four Steps to a Fresher Space"

- [ ] C11 | (pág. 5) **Eliminar** el eyebrow **"Why Choose Us"** de la sección "Four Steps to a Fresher Space" (confirmado por la clienta: solo eliminar, sin reemplazo) | Archivo(s) probables: `src/components/sections/how-it-works.tsx` (`label="Why Choose Us"` → quitar el label del `SectionIntro`) | Verificación: la sección muestra solo el título "Four Steps to a Fresher Space." sin el eyebrow encima.

## Página 6 — Reviews / Service Areas

- [ ] C12 | (pág. 6) **Invertir el orden**: poner **primero el área de servicio** ("Proudly Serving Seattle, WA") y **luego los reviews** (hoy es al revés) | Archivo(s) probables: `src/app/page.tsx` (orden: hoy `<ReviewsSection />` antes de `<ServiceAreas />`) | Verificación: en el home, la sección "Service Areas" aparece antes que la de reviews.

## Página 7 — Newsletter → Follow Us

- [ ] C13 | (pág. 7) **Reemplazar** el bloque de newsletter ("A Little More Freshness in Your Inbox", tachado) por un bloque **"Follow Us for More"** estilo "LET'S STAY CONNECTED" con botones **Follow on Facebook / Follow on Instagram** | Archivo(s) probables: `src/components/sections/newsletter-section.tsx`, `src/components/forms/newsletter-form.tsx`, `src/app/page.tsx`, copys en `src/lib/site.ts` (`newsletter`) | Verificación: ya no hay formulario de email; aparece la sección de seguir en redes con los dos botones.

- [ ] C14 | (pág. 7) Usar los **links reales de redes** en ese bloque (y en los íconos sociales del header, hoy `href="#"`): Facebook `https://www.facebook.com/share/1BXZ5UA4CE/?mibextid=wwXIfr` · Instagram `https://www.instagram.com/mavellacleaning?xtok=MWhSExZxBDr5YNRjeA%3D%3D&utm_source=qr` | Archivo(s) probables: nuevo bloque de C13 + `src/components/layout/site-header.tsx` (array `socials`, hoy `href: "#"`) | Verificación: los botones/íconos de Facebook e Instagram apuntan a esas URLs exactas.

## Página 8 — CTA "Your Next Fresh Start"

- [ ] C15 | (pág. 8) **Cambiar la foto** de la sección CTA (hombre con pulgares arriba) por una nueva de las carpetas de fotos | Archivo(s) probables: `src/components/sections/sparkle-banner.tsx` (hoy `/images/promo.webp`), nueva webp en `public/images/` | Verificación: la sección "Your Next Fresh Start" usa la foto nueva. Nota: la carpeta exacta no se especifica ("hay carpetas con fotos"); candidatas: `FOTOS RANDOM/` (no tienen foto de persona) — confirmar qué imagen usar.

- [ ] C16 | (pág. 8) **Rediseñar/embellecer** el badge circular dorado **"Free Quote"** del CTA ("ponerlo un poco más lindo") | Archivo(s) probables: `src/components/sections/sparkle-banner.tsx` (el `div` del círculo `bg-gold-400` con "Free / Quote") | Verificación: el badge "Free Quote" se ve con un estilo más cuidado que el actual.

---

## Totales

- Pendientes `[ ]`: **16** (C01–C16)
- Ambiguos `[?]`: **0**
- **Total de ítems: 16**
