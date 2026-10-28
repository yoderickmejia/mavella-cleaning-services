# DECISIONS.md — Decisiones autónomas · Mavella Cleaning Services

Registro de decisiones tomadas sin consultar (modo 100% autónomo). Cada una busca
el mejor resultado profesional ante una ambigüedad.

## Contenido e integridad de la marca

1. **No se inventaron cifras de clientes.** El diseño azul (Antixor) mostraba
   contadores "500+ clientes, 1,000+ proyectos", pero el .txt de Mavella **no tiene
   estadísticas**. Inventarlas sería engañoso para un negocio real. La *stats strip*
   usa cifras **derivadas del contenido real y verificables**: "6 servicios",
   "proceso de 4 pasos", "100% enfocado en tu satisfacción".
2. **Reviews = empty-state honesto.** La clienta escribió literalmente "Display
   genuine customer reviews here once available". No se fabricaron testimonios; se
   hizo un estado vacío elegante que invita a dejar reseñas. Fácil de poblar luego.
3. **Before/After ilustrativo.** No había un par real antes/después. El slider usa
   una foto limpia como "after" y una versión atenuada/desaturada como "before",
   etiquetada **"Illustrative before/after"**. Reemplazable por fotos reales.
4. **No se usaron claims del figma ajenos a Mavella** ("Eco-Friendly Products",
   "Trained & Verified", "25+ Years", "100% Satisfaction Guarantee"). Los chips de
   confianza del hero usan los **valores reales** del .txt.
5. **Textos legales (Privacy/Terms)** se escribieron como **plantilla genérica**,
   con aviso visible de "revisar con asesoría legal". El footer los enlaza.
6. **Listas de tips en /cleaning-tips:** el .txt da título + extracto de 3 artículos
   pero no el cuerpo. Se añadieron viñetas de consejos **genéricos y universalmente
   ciertos** (no claims del negocio) para que la página aporte valor; marcado en código.

## Datos de contacto (placeholders)

7. Teléfono `(555) 014-2080` (555 = rango ficticio reservado), email
   `hello@mavellacleaning.com`, zona "your city", horario Lun–Vie 8–18 / Sáb 9–14.
   Centralizados en `src/lib/site.ts` y sobreescribibles por `.env`. **Reemplazar
   antes de lanzar.**

## Stack / técnico

8. **Next.js 16.4.3 + Tailwind v4 + React 19** (lo que entregó `create-next-app`
   como estable). Se quitaron del `next.config` los flags experimentales
   `cacheComponents` y `partialPrefetching` para máxima fiabilidad de build (SSG
   estándar) y se añadió `output: "standalone"` + config de imágenes.
9. **Tailwind v4 vía `@tailwindcss/postcss`** (en vez del loader turbopack del
   scaffold) para que funcione igual en `dev` y `build`.
10. **shadcn/ui a mano:** se instalaron los primitivos de Radix directamente (el
    mismo código que genera shadcn) en vez del CLI, para evitar fricción en
    versiones muy nuevas y tener control total del theme.
11. **`.npmrc` con `legacy-peer-deps=true`:** React 19 provoca conflictos de peer
    deps (p.ej. `@hookform/resolvers`). Se fija para que `npm ci` sea consistente
    también en Docker.
12. **Email en "modo log":** sin proveedor configurado, los formularios validan y
    registran la solicitud en el servidor y responden éxito. Con `RESEND_API_KEY`
    envían email vía la API HTTP de Resend (sin dependencia extra). Documentado en
    `.env.example`.
13. **Fuentes:** Plus Jakarta Sans (titulares) + Inter (cuerpo). Premium, limpias,
    acordes al logo redondeado.
14. **Favicon:** monograma "M". **Logo de footer:** mismo SVG invertido a blanco por
    CSS (el wordmark navy no contrasta en oscuro).
15. **Honeypot anti-spam** (campo `company` oculto) en los 3 formularios, en vez de
    captcha, para no añadir fricción ni dependencias.

## Entorno de desarrollo

16. **Se construyó en el sistema de archivos Linux (`~/dev/mavella-web`)** porque
    `npm` sobre `/mnt/c` (Windows) fallaba con errores de permisos/ENOTEMPTY. El
    proyecto final se **copia de vuelta** al Desktop. Es práctica recomendada en WSL.
17. **Docker no se pudo ejecutar aquí** (Docker Desktop sin integración WSL en esta
    sesión). En su lugar se verificó el artefacto exacto que corre Docker: el
    servidor **standalone** (`node server.js`) arranca y responde 200 en todas las
    rutas, y la API POST funciona. El `Dockerfile` sigue el patrón oficial de Next.

## Alineación fiel al figma verde (revisión)

18. A pedido de la clienta, el **Home se reestructuró para calcar el layout del figma
    verde** (manteniendo el azul y el contenido real de Mavella):
    - **Barra superior** (teléfono / horario / zona) sobre el nav.
    - **Hero** con palabra final acentuada en azul ("…Feeling.") y **badge circular
      giratorio** sobre la imagen (equivalente al sello "25+ Years" del figma, pero
      sin inventar una cifra).
    - **Servicios** sobre **banda oscura de marca**, con cabecera a 2 columnas
      (label + título / descripción + teléfono) y cards blancas con botón redondo "+".
    - **About + formulario "Book a Service"** lado a lado (como el figma), en vez de
      About con imagen. (La versión con imagen se conserva en la página `/about`.)
    - **How It Works** con **círculos numerados con contorno punteado conectados**.
    - **Orden de secciones** del Home alineado al figma; se **quitó la *stats strip***
      del Home (no existe en el figma y evitaba cifras no provistas).
19. Donde el figma usa contenido propio de "GreenCare" (precios "$89", "25+ años",
    "20% OFF", testimonios con nombre, "Since 1995"), se replicó el **layout** pero
    con contenido real/honesto de Mavella (sin precios ni cifras inventadas; "Request
    a quote" en vez de precio; reseñas siguen como estado honesto).

## Secciones añadidas para calcar el figma (2ª revisión)

20. Se agregaron al Home los bloques que faltaban del figma:
    - **"We Care"** (banda oscura): texto + 4 checks + botón + imagen de equipo +
      badge circular (equivale a "More Than Just Cleaning, We Care").
    - **"Need a Custom Cleaning Plan?"** (banda ámbar): equivale a la franja amarilla
      del figma; CTA a Contacto.
    - **Reviews en grid de 3 cards** (estilo testimonio) con placeholders honestos
      ("Your review here") en vez de testimonios falsos.
    - **Newsletter a 2 columnas** con **ilustración de sobre** (SVG propio) como el figma.
    - **Sección de contacto completa** ("We're Here to Help You": info + formulario)
      al cierre del Home, como el figma (antes era solo un CTA).

## Assets de internet (a pedido de la clienta)

21. Se añadieron imágenes **libres para uso comercial de Pexels** (misma fuente que
    los assets originales), parecidas a las del figma:
    - `team.webp` (Pexels #6195131, equipo de limpieza) → sección "We Care".
    - `cleaner-portrait.webp` (Pexels #9462192) → disponible como alternativa.
    Pexels no exige atribución, pero se deja registrado el origen. Los originales en
    `mavella-assets/` no se tocaron.

## Refactor contra el Figma REAL (vía MCP) — fuente única de diseño

> Las decisiones 18–21 se basaron en las **imágenes** de `figmas/`. Esta ronda usa
> **solo** el Figma de la URL (`node 2011-9192`) leído por MCP, que el brief marca
> como única verdad de diseño. `figmas/` se ignora.

22. **El Figma es un template "GreenCare" verde.** Se replicó su **estructura, layout,
    proporciones, radios y tipos**, pero (a) el **color** se re-mapeó al **azul del
    logo** y (b) **todos sus textos son placeholders** y se ignoraron en favor del `.txt`.
23. **Contenido placeholder del Figma NO usado** (sería falso): "Since 1995",
    "25+ Years of Experience", precios "$99/$199/$299", "20% OFF", "Trained &
    Background Checked / Eco-Friendly / 100% Satisfaction Guarantee", marcas de cliente
    y testimonios con nombre. Se reemplazó por contenido real/honesto de Mavella.
24. **Badge circular del hero:** el Figma pone "25+ / Years of Experience" (cifra
    inventada). Se usó un **sello circular giratorio** con texto de marca, sin cifra.
25. **Banda de servicios:** se calcó el patrón del Figma = **banda navy** con cabecera
    a 2 columnas (eyebrow+título / descripción+teléfono) y **cards que sobresalen**
    hacia el fondo claro. El Figma muestra 3 cards; Mavella tiene **6 servicios** (del
    `.txt`) → grid de 6 con el mismo estilo de card (foto 3:2 + título + "Request a
    quote" + botón de flecha circular).
26. **Promo:** el Figma es "Get 20% Off / First Cleaning". Se mantuvo el **layout**
    (banda navy + imagen + sello circular) con el texto real del `.txt` ("Your Next
    Fresh Start…") y un sello honesto **"Free Quote"** en vez del "20% OFF".
27. **Secciones del `.txt` que el Figma no tiene** (Why Choose, Cleaning Tips,
    Newsletter, Contact): se **crearon/conservaron** en el **mismo lenguaje visual**.
    **Marcas de cliente** (hexágonos) del Figma: **omitidas** (no hay logos reales).
28. **Iconos:** el Figma usa **Lucide** literal → se usan vía `lucide-react`. Las
    **redes sociales** (brand icons) se removieron de Lucide por marca registrada; se
    dibujaron **SVG inline** (Facebook, Instagram, X) con `href="#"` como placeholder
    editable. Se usó **X** en vez de Dribbble (más pertinente para el negocio).
29. **Paleta re-coloreada:** verdes `#002d17/#00602b/#f7f9f1/#6b706b` → azules del logo
    (`band #112a52`, `brand-600 #2a62ab`, `mist #f3f8fd`, `muted #566579`). El **dorado**
    `#ffba24` del Figma se conserva como acento cálido (`gold-400 #f6b63f`): subrayado de
    nav activo, botón "Submit Request", sello "Free Quote", estrellas.
30. **Se quitó el "AI-slop"** (anti-referencia del brief): gradientes mesh, glows,
    glass cards flotantes, clusters de sparkles y radios "blob". Radios **crisp** como el
    Figma. Se usó botón `gold` para el submit del booking (igual que el Figma amarillo).
31. **Orden del Home** alineado al Figma + extras: Hero → Servicios → About+Booking →
    How It Works → Why Choose → Promo → Reviews → Tips → Newsletter → Contact. Se
    retiraron del Home `WeCare`, `CustomPlan` y `BeforeAfter` (bandas oscuras
    redundantes; sus componentes se conservan para otras páginas).
32. **Docker:** `docker-compose.yml` corregía un bug (healthcheck apuntaba al puerto de
    host, no al interno). El **healthcheck interno** apunta a `:3000` (donde escucha el
    server). El puerto de host es `3000` por defecto (en esta máquina se verificó en
    `3009` porque `3000` estaba ocupado por otro contenedor ajeno). `docker compose up
    --build` levanta **healthy** y responde 200 en todas las rutas + POST API.
