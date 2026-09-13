# Sitio personal — Andrés Rieznik

Sitio estático (HTML/CSS/JS, sin frameworks ni build step), preparado para publicarse en GitHub Pages. Reutiliza el sistema de diseño técnico (grilla de 12 columnas, tipografía, componentes) de un proyecto anterior, con identidad visual e información propias de Andrés.

## Estructura

```
/
├── index.html                     Home
├── articulos/
│   ├── index.html                 Listado (tabs: Artículos y ensayos / Papers académicos)
│   └── ejemplo-de-articulo/       Plantilla de subpágina de artículo (NO enlazada — duplicar para un artículo real)
├── noticias/index.html            Tablón / linktree editorial, alimentado desde Supabase
├── videos/index.html              Selección editorial curada a mano (Re-Renacimiento,
│                                  videos destacados, mini documental) — ver más abajo
├── kalulu-y-alfabetizacion/index.html
├── sobre-mi/index.html            Perfil, trayectoria y libros
│                                  (Contacto NO es una subpágina: vive integrado en
│                                  index.html, sección #contacto — el nav apunta ahí)
├── assets/
│   ├── css/                       base.css, components.css, home.css, article.css,
│   │                              profile.css, contact.css, news.css, videos.css, kalulu.css
│   ├── js/                        main.js (menú, animaciones, carrusel, lightbox),
│   │                              noticias.js, papers.js, books.js,
│   │                              supabase-config.js (completar credenciales)
│   └── data/                      papers.json, books.json — editar estos archivos para
│                                  agregar publicaciones o libros, sin tocar HTML
├── supabase/schema.sql            Script de referencia para crear la tabla "noticias" (correr una vez en el SQL Editor de Supabase)
├── img/                           Fotografías y assets (reutilizados del proyecto anterior)
├── robots.txt, sitemap.xml, .nojekyll
```

## Cómo correr el sitio localmente

```
python -m http.server 8000
```

Después abrir `http://localhost:8000/`.

## Supabase (Noticias)

1. Crear un proyecto en [supabase.com](https://supabase.com).
2. Ejecutar `supabase/schema.sql` en el SQL Editor del proyecto (crea la tabla `noticias` con RLS: lectura pública de filas `active = true`, sin escritura pública).
3. Completar `assets/js/supabase-config.js` con la URL del proyecto y la **anon/public key** (Project Settings → API). Es seguro exponer esa key en el frontend porque RLS ya restringe qué se puede leer/escribir — nunca usar la `service_role` key acá.
4. Cargar y editar noticias directamente desde el **Table editor** del dashboard de Supabase (columnas: `title`, `description`, `url`, `image_url`, `category`, `date`, `pinned`, `active`, `sort_order`).

No hace falta un panel de administración propio para esta etapa.

## Videos (YouTube)

La página `videos/index.html` es, por ahora, una selección editorial curada a mano — no lee ningún JSON ni se conecta a la YouTube Data API. Cuatro secciones fijas en el HTML:

1. Intro + CTA al canal (`https://www.youtube.com/@AndresRieznikVideos`).
2. **Re-Renacimiento**: los 4 capítulos de la serie (mismos IDs de YouTube que ya usa la subpágina de Andrés en el portfolio de referencia).
3. **Videos destacados**: 3 piezas ("Recortes en Youtube" en esa misma subpágina), con sus visualizaciones ya cargadas a mano.
4. **Mini documental en Arrecifes**: mismo video que ya se usa en `kalulu-y-alfabetizacion/index.html`.

Todos los thumbnails son remotos (`img.youtube.com/vi/<id>/maxresdefault.jpg`, con fallback a `hqdefault.jpg` vía `onerror`) — no hay copias locales. El botón de play superpuesto (`.project-feature__media/__thumb/__play`) vive en `components.css`, compartido con Kalulu.

Para agregar o reemplazar un video: editar directamente el HTML de `videos/index.html` (no hay array de datos en JS). Si más adelante se quiere automatizar la carga desde el canal real, una opción compatible con GitHub Pages sin exponer ninguna API key en el navegador sería una GitHub Action programada que escriba un `assets/data/videos.json` y que la página lea ese archivo — todavía no implementado.

## Artículos y papers

- **Artículos y ensayos**: cada uno es una subpágina propia en `articulos/<slug>/index.html`. Usar `articulos/ejemplo-de-articulo/` como plantilla (título, bajada, fecha, cuerpo, botón de descarga si hay PDF) y agregar la tarjeta correspondiente en `articulos/index.html`.
- **Papers académicos**: viven en `assets/data/papers.json` (título, autores, año, revista, DOI, link). Agregar uno nuevo es sumar un objeto al array — no requiere tocar HTML ni JS.

## Internacionalización (ES / EN / PT)

Por ahora todo el contenido visible está solo en español, pero la arquitectura queda preparada para no tener que duplicar el sitio entero:

- El selector de idioma (`.language-switcher`, en el header de cada página) existe en el markup y el CSS, pero queda oculto con el atributo `hidden` hasta que haya traducciones reales.
- Cuando haya contenido en inglés o portugués, el enfoque recomendado es centralizar los textos traducibles en archivos de datos (ej. `assets/i18n/en.json`, `assets/i18n/pt.json`) en vez de crear una copia completa de cada página HTML por idioma (que es lo que hacía el proyecto anterior, con carpetas `en/` y `de/` completas) — eso es difícil de mantener a mediano plazo.
- Recién en ese momento quitar `hidden` del selector de idioma.

## Pendientes conocidos (ver informe de auditoría para el detalle completo)

- Email de contacto real de Andrés (placeholder en la sección `#contacto` de `index.html`).
- Link oficial de "Donaciones" de Kalulu (placeholder en `kalulu-y-alfabetizacion/index.html`).
- Frase definitiva del hero de la home (hoy: "Física, neurociencia, educación y divulgación científica").
- Reemplazar `https://TU-DOMINIO.example` por el dominio real (o la URL de GitHub Pages) en las etiquetas `canonical`, Open Graph, `robots.txt` y `sitemap.xml`.
- `img/favicon.svg` es un monograma genérico "AR" de placeholder — reemplazar si existe un isotipo propio.
- Repositorio de GitHub para publicar (el `.git` de esta carpeta todavía apunta al portfolio personal de Germán — hay que crear/conectar un repositorio propio para este sitio antes de hacer push).
- La carpeta `contacto/` quedó solo con una página de redirección a `index.html#contacto` (para no romper links viejos) — se puede borrar del todo cuando se pueda limpiar el resto de las carpetas huérfanas (ver informe de auditoría).
