# Sistema de Diseño — Mavella Cleaning Services

Tokens que replican las **proporciones y estructura del Figma**
(`node 2011-9192`) pero con la **paleta construida desde el azul del logo**.
Definidos en `src/app/globals.css` (`@theme` de Tailwind v4) → disponibles como
utilidades (`bg-brand-600`, `text-ink`, `rounded-card`, `shadow-card`, …).

## Paleta (derivada del azul del logo)

### Brand (navy → royal → sky)
| Token | HEX | Uso |
|---|---|---|
| `brand-50` | `#eef5fd` | fondos muy suaves, hover |
| `brand-100` | `#d8e9fa` | chips, superficies |
| `brand-200` | `#b4d3f3` | bordes suaves |
| `brand-300` | `#85b8ea` | flechas/stepper, scrollbar |
| `brand-400` | `#5597dd` | acentos claros |
| `brand-500` | `#2f79c7` | **ring / focus**, enlaces |
| `brand-600` | `#2a62ab` | **primario** (botones, CTAs) |
| `brand-700` | `#244f8c` | hover primario, texto activo |
| `brand-800` | `#1f4273` | — |
| `brand-900` | `#1b365d` | — |
| `brand-950` | `#11233f` | — |

Primario `#2a62ab` y royal del logo `#3160ad`/`#3762ae` están alineados.

### Sky / cian (destellos del logo `#42abe1`, `#6accf4`)
`sky-300 #8fd6f6` · `sky-400 #52b9ec` · `sky-500 #26a3e0` · `sky-600 #1b86c2`
→ eyebrows sobre fondo oscuro, iconos de acento, variante de botón `accent`.

### Superficies oscuras (bandas de servicios / promo)
`band #112a52` (navy profundo) · `band-700 #1a386a`.
Reemplazan el verde `#002d17` del Figma. Texto blanco (AA holgado).

### Neutros fríos ("clean")
`ink #0f2033` (titulares/texto) · `ink-700 #243b52` · `muted #566579` (cuerpo
secundario) · `line #e4ecf5` (bordes) · `surface #ffffff` · `mist #f3f8fd`
(fondo de sección suave, reemplaza `#f7f9f1`) · `field #f3f6fb` (inputs).

### Acento dorado (cálido, úsese poco)
`gold-400 #f6b63f` · `gold-500 #e89b1c`. Equivale al `#ffba24` del Figma
(subrayado de nav activo, botón "Submit Request", sello "Free Quote",
estrellas de reseña). Se **conserva** porque aporta calidez y contrasta con el navy.

### Contraste (WCAG)
- `ink #0f2033` sobre blanco → ~15:1 (AAA).
- `muted #566579` sobre blanco → ~5.6:1 (AA texto normal).
- Blanco sobre `brand-600 #2a62ab` → ~6.4:1 (AA).
- Blanco sobre `band #112a52` → ~14:1 (AAA).
- `ink` sobre `gold-400 #f6b63f` → ~9:1 (AAA) — por eso el botón dorado usa texto oscuro.

## Tipografía
- **Display / titulares:** `var(--font-jakarta)` → **Plus Jakarta Sans** (geométrica,
  premium; interpreta el sans con peso del Figma). `letter-spacing: -0.02em`, `balance`.
- **Cuerpo / UI:** `var(--font-inter)` → **Inter** (igual que los botones del Figma).
- Escala fluida: hero `2.6rem→3.4rem`, h2 de sección `1.8rem→2.6rem`, cuerpo `1rem→1.125rem`.

## Radios (crisp, como el Figma)
`--radius-btn 0.6rem` (`rounded-btn`) · `--radius-card 1rem` (`rounded-card`) ·
`--radius-card-lg 1.25rem` (`rounded-card-lg`). Imagen hero: utilidad `.mask-arch`
(`11rem 11rem 1.5rem 1.5rem`) = el arco del Figma. Badges/retratos: `rounded-full`.

## Sombras (sutiles, hue de marca)
`shadow-soft` (chips/botones) · `shadow-card` (cards) · `shadow-lift` (hero/promo).
Sin glows fuertes ni neón — coherente con el look restrained del Figma.

## Motion
`--ease-out-soft: cubic-bezier(0.16,1,0.3,1)`. Reveals por scroll (GSAP) + hover sutil
(Motion) + SplitText en el hero + sello circular que gira lento. Todo se desactiva con
`prefers-reduced-motion`. Solo `transform`/`opacity`.

## Componentes base
- **Button** (`ui/button.tsx`): variantes `primary · accent · gold · outline ·
  outlineDark · white · ghost · link`; tamaños `sm · md · lg · icon`; `rounded-btn`.
- **Eyebrow** (`Pill` en `section-intro.tsx`): rótulo uppercase con guion de acento
  (dorado en claro, cian en oscuro). Reemplaza el "pill con sparkle" genérico.
- **SectionIntro**: `label + title + description`, `align` y `tone` (claro/oscuro).
- Inputs/Select/Textarea/Accordion/Sheet: shadcn a mano sobre Radix, temados con los tokens.

## Anti-slop (alineado a las anti-referencias del brief)
Se eliminaron del home: gradientes mesh, glows/halos, tarjetas "glass" flotantes,
clusters de sparkles y radios "blob". El resultado es limpio, con pocas formas
orgánicas (arco del hero, retrato y sellos circulares) tal como el Figma.
