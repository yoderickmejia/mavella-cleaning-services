# Fase 1 — Análisis · Mavella Cleaning Services

> **Fuente de diseño (única):** el Figma vía MCP
> `https://www.figma.com/design/5QhKNHCp8EA2C3TgcKNYWs/Untitled?node-id=2011-9192`
> (frame **Home · Introduction**, `2011:9192`, 856×2674).
> La carpeta `figmas/` (imágenes guardadas) **no** se usa como referencia.
> Los textos del Figma son **placeholders** ("GreenCare", "Since 1995", "$99",
> "25+ Years", "20% OFF") y se **ignoran**: el contenido sale del `.txt`.
> El **color** sale del **azul del logo**, no del verde del Figma.

---

## 1. Estructura del Figma (sección por sección, medidas reales del frame de 856px)

El artboard está a ~60% de un desktop típico (856px de ancho de contenido con
~70px de padding lateral → columna útil ~712–716px). Las medidas se interpretan
como **proporciones**, no como px absolutos.

### Header — `Brand and navigation` (856×112)
- **Barra superior** (y≈18–52): logo (icono *leaf* 26px + wordmark 2 líneas) a la
  izquierda; a la derecha 3 bloques **icono + label gris + valor bold**:
  `phone` → "Call Us Anytime / +123…", `clock-3` → "Serving Time / 7am–8pm",
  `map-pin` → "Service Area / …".
- **Divisor** fino a y68 (`#e9ece6`).
- **Nav principal** (y83): 7 ítems bold ~10px (Home·About·Services·Projects·
  Testimonials·Blog·Contact). **Indicador** de página = subrayado corto **dorado**
  (`#ffba24`, 28×2) bajo el ítem activo.
- **Social** a la derecha del nav (facebook·twitter·dribbble·instagram, 12px).

### Hero — `Reliable cleaning hero` (856×438, bg `#f7f9f1`)
- Izquierda: **eyebrow** bold uppercase ~9px (`#002d17`); **titular** bold ~41px en
  2 líneas (`#122719`) + **3ª palabra/línea acentuada** en primario (`#00602b`);
  **descripción** ~12px (`#6b706b`); **2 botones** (primario sólido + outline
  blanco), alto 36, radio 3px.
- Derecha: **imagen principal** en forma de **arco** (306×384, `rounded-[170px]`:
  esquinas superiores completamente redondeadas); **retrato** circular más pequeño
  (146×158, `rounded-[76px]`) solapado abajo-izq; **badge circular** blanco (136px,
  borde `#e9ece6`) con cifra grande + "Years of Experience".

### Servicios — `Professional services for every space` (856×468)
- **Banda oscura** (`#002d17`, 856×290) arriba; las cards **sobresalen** hacia abajo
  sobre el fondo claro.
- Cabecera a 2 columnas: izq = **eyebrow** blanco "WHAT WE OFFER" + **título** blanco
  ~25px (2 líneas); der = **badge circular** con icono `sparkles` + descripción +
  icono `phone` con "Call Us Anytime / +123…".
- **3 cards** blancas (224×236, `rounded-[7px]`): **foto arriba** (224×152,
  `rounded-[6px]`), **título** bold ~12px, **subtítulo** gris ("Starting from $…" →
  se reemplaza por copy honesto), **botón** `circle-arrow-right` 28px abajo-der.

### About + Booking — `Company introduction and booking form` (856×492, bg blanco)
- Izq: **eyebrow** "ABOUT COMPANY" + **título** ~25px (3 líneas) + **párrafo** ~12px
  + **3 checks** (`circle-check` 20px + texto ~11px) + **botón** primario "Learn More".
- Der: **card de formulario** (280×396, `rounded-[6px]`, borde `#e9ece6`): título
  "Book a Service" centrado + 4 **form fields** (label bold ~10px + input gris
  `#f6f6f6` alto 28; el último es select con `chevron-down`) + **botón dorado**
  (`#ffba24`, texto oscuro) "Submit Request".

### How It Works — `Four simple cleaning steps` (856×372, bg `#f7f9f1`)
- Eyebrow centrado + **título** ~25px centrado (2 líneas).
- **4 cards** blancas (150×162, `rounded-[8px]`) con **badge circular numerado**
  (56px) sobresaliendo arriba, **título** bold 2 líneas + **copy** gris; **flechas**
  `arrow-right` conectando las cards (entre 1-2, 2-3, 3-4).

### Promo — `First cleaning special offer` (856×252)
- **Banda oscura** (`#002d17`): izq = eyebrow + **título** ~ grande + **botón**;
  der = **imagen** (268×252) + **badge circular** (94px) con "20% OFF" (→ se
  reemplaza por un sello honesto, sin cifra inventada).

### Marcas — `Trusted client brands` (856×144)
- Eyebrow centrado + fila de **4 "client brand"** (icono `hexagon` + nombre).
  Sin logos reales → se adapta (ver DECISIONS).

### Testimonios — `Testimonials` (856×396, bg blanco)
- Eyebrow + **título** ~25px. **3 cards** (216×214, `rounded`): **retrato** circular
  (36px) + nombre bold + rol gris + **estrellas** + **cita** ~3 líneas.
  Sin reseñas reales (la clienta pidió "once available") → **empty-state honesto**.

---

## 2. Tokens del Figma (a replicar, con paleta re-coloreada a azul)

| Token | Valor Figma (verde) | Mapeo Mavella (azul del logo) |
|---|---|---|
| Ink / headings | `#122719` | `#0f2033` (navy tinta) |
| Dark band / eyebrow | `#002d17` | `#132a52` → `brand-950` |
| Primario (botón/acento) | `#00602b` | `#255fa6`/`#2f79c7` (royal del logo) |
| Fondo suave | `#f7f9f1` | `#f3f8fd` (mist azulado) |
| Texto muted | `#6b706b` | `#51657a` (slate frío) |
| Borde claro | `#e9ece6` | `#e3edf6` |
| Input fill | `#f6f6f6` | `#f3f6fb` |
| **Acento dorado** | `#ffba24` | **se conserva** `#f6b63f` (cálido, pairs con navy) |
| Radio botón | `3px` | `~8px` (crisp, levemente redondeado) |
| Radio card | `6–8px` | `12–16px` |
| Radio imagen hero | `arco (170)` | arco / `rounded-[48%]` superior |
| Tipografía | Arimo (≈Arial) / Inter (botones) | **Plus Jakarta Sans** (titulares) + **Inter** (cuerpo) — interpretación premium del sans geométrico |

**Iconos:** el Figma usa **Lucide** literal (nodos `clock-3`, `map-pin`,
`circle-arrow-right`, `circle-check`, `chevron-down`, `arrow-right`, `sparkles`,
`hexagon`). Se usan vía `lucide-react` (equivalente exacto).

## 3. Logo (`Logos/`) — azul exacto

`Logo Oficial.svg` (horizontal, icono "M") y `M oficial.svg` (monograma). Gradiente
navy → royal → cielo → cian. HEX clave extraídos del SVG:

- **Navy profundo:** `#21418c` `#253978` `#243c7c` `#2451a4`
- **Royal medio:** `#3160ad` `#3762ae` `#3b6cb4`
- **Azul cielo:** `#4281c3` `#4a99d4` `#4996d2` `#48a1d9`
- **Cian destello:** `#42abe1` `#6accf4` `#3cace2`
- **Blancos:** `#ffffff` `#f7fcfe`

→ Escala `brand-50…950` construida alrededor del royal `#3160ad`, con `sky`/cian
para destellos (ver `docs/DESIGN_SYSTEM.md`).

## 4. Mapeo textos `.txt` → secciones del diseño

| # .txt | Sección Figma / implementación |
|---|---|
| 1 Main Description | metadata + blurb footer |
| 2 Hero | Hero (eyebrow + headline acentuado + 2 CTAs + badge) |
| 3 Our Services | Servicios (banda oscura + cards) — 6 servicios del .txt |
| 4 About Us | About + checks (valores) + booking form |
| 5 Request a Quote | Booking form / página `/quote` (8 campos) |
| 6 How It Works | Stepper de 4 pasos |
| 7 Promotional | Promo (banda oscura + CTA) — reemplaza "20% OFF" |
| 8 Why Choose | **no está en el Figma** → sección nueva, mismo lenguaje |
| 9 Cleaning Tips | **no está en el Figma** → sección nueva, mismo lenguaje |
| 10 Customer Reviews | Testimonios (empty-state honesto) |
| 11 Newsletter | **no está en el Figma** → sección nueva, mismo lenguaje |
| 12 Contact | **no está en el Figma** → sección nueva + página `/contact` |
| 13 Footer | Footer (quick links, servicios, contacto, legal) |

**Secciones del Figma sin texto propio en el .txt** (marcas de cliente, cifras,
precios): se **adaptan** a contenido honesto o se omiten (ver DECISIONS).

## 5. Código actual — qué se conserva / rehace

**Se conserva:** Next 16 + Tailwind v4 + React 19, shadcn a mano, `src/lib/site.ts`
(contenido verbatim del .txt, decisiones honestas), schemas zod, API routes (modo
log + Resend), Docker/compose, componentes `ui/*`, primitivas `anim/*`
(Reveal, SplitHeading, CircleBadge), formularios rhf+zod, SEO/JSON-LD/manifest.

**Se rehace para fidelidad al Figma real:**
- **Tokens** (radios crisp, sombras sutiles, banda oscura, acento dorado).
- **Header** (barra superior con 3 bloques icono+label+valor, nav + social, indicador dorado).
- **Hero** (arco + retrato + badge; se elimina el *slop*: mesh, glows, glass cards, sparkles).
- **Servicios** (banda oscura + cabecera 2 col + cards con foto/arrow).
- **About + Booking** (2 columnas con card de formulario).
- **How It Works** (stepper numerado con flechas).
- **Promo / Testimonios** al estilo Figma (honestos).
- Eyebrow plano (sin "Pill" con sparkle) para quitar el look genérico.
