# Créditos de imágenes — Mavella Cleaning Services

Todas las fotos son **libres para uso comercial** (Pexels; sin atribución
obligatoria). Se recortaron al **aspect ratio / forma del Figma**, se optimizaron a
**WebP** y viven en `public/images/`. Los originales en `mavella-assets/` **no se
modificaron** (tienen prioridad cuando encajan, según el brief).

| Archivo (`public/images/`) | Forma / ratio (Figma) | Sección | Origen |
|---|---|---|---|
| `hero.webp` | Arco `.mask-arch`, ~5:6 | Hero (imagen principal) | `mavella-assets/t2001x1212.jpg` (Pexels) |
| `cleaner-portrait.webp` | Círculo | Hero (retrato solapado) | Pexels #9462192 |
| `residential.webp` | 3:2 | Servicio · Residential | `pexels-tima-…6195278.jpg` |
| `deep-clean.webp` | 3:2 | Servicio · Deep Cleaning | `pexels-karola-g-4239103.jpg` |
| `commercial.webp` | 3:2 | Servicio · Commercial | `persona-…520594.avif` |
| `move-clean.webp` | 3:2 | Servicio · Move-In/Out | `pexels-tima-…6197117.jpg` |
| `post-construction.webp` | 3:2 | Servicio · Post-Construction | `pexels-caleboquendo-34516664.jpg` |
| `custom-clean.webp` | 3:2 | Servicio · Customized | `pexels-karola-g-4239111.jpg` |
| `team.webp` | Full-bleed col. derecha | Promo "Fresh Start" | Pexels #6195131 |
| `about.webp` | redondeada | Página `/about` | `pexels-tima-…6195278.jpg` |
| `before.webp` / `after.webp` | 4:3 par | Slider ilustrativo (`/`… opcional) | `pexels-tima-…6197117.jpg` (atenuada / limpia) |
| `office-wide.webp` | 16:9 | Reserva | `persona-…520631.avif` |
| `sparkle.webp` | — | Reserva (ya no en Home) | `pexels-tima-…6195278.jpg` |

**Temática:** limpieza residencial/comercial, hogares luminosos, personal profesional
y amable, insumos de limpieza — coherente con el azul de marca.

**Cómo se usan en código:** `next/image` con `fill` + `sizes` + `object-cover` y
`object-position` ajustado; formatos servidos AVIF/WebP (`next.config.ts`).
