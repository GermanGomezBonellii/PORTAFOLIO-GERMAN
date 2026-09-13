# Portfolio — Germán Gómez Bonelli

Primera versión estructural del sitio. Vanilla HTML/CSS/JS, sin frameworks.

## Estructura

```
/
├── index.html                        Página principal (hero + trabajo seleccionado)
├── proyectos/
│   ├── andres-rieznik/index.html     Caso completo (sistema visual base)
│   ├── camila-perochena/index.html   Stub — estructura equivalente, sin contenido
│   └── abuelas/index.html            Stub — estructura equivalente, sin contenido
└── assets/
    ├── css/
    │   ├── base.css                  Reset, variables, tipografía, grilla de 12 columnas
    │   ├── components.css            Header, footer, media placeholders, botones, breadcrumb
    │   ├── home.css                  Estilos específicos de la home (hero, trabajo seleccionado)
    │   └── proyecto.css              Estilos específicos de las páginas de caso
    ├── js/
    │   └── main.js                   Menú mobile + fade-in sutil al hacer scroll
    └── img/                          Vacía — acá van las imágenes reales de cada proyecto
```

## Dónde editar textos

- Home (hero, previews de proyectos, secciones Perfil/Contacto): `index.html`
- Caso Andrés Rieznik: `proyectos/andres-rieznik/index.html`
- Casos Camila / Abuelas (placeholders): `proyectos/camila-perochena/index.html`, `proyectos/abuelas/index.html`

Los bloques marcados con `<!-- PLACEHOLDER -->` o clase `case-section__placeholder` /
`project-preview__placeholder-note` son los que faltan completar con contenido definitivo.

## Dónde colocar imágenes

`assets/img/`. Los espacios de imagen/video están representados por bloques `.media`
(`.media--16-9`, `.media--9-16`, `.media--square`, `.media--tall`, `.media--thumbnail`)
en `assets/css/components.css`. Para reemplazar un placeholder por una imagen real, basta
con poner un `<img>` dentro del `div.media` correspondiente (o cambiar el fondo por
`background-image`).

## Cómo correr el sitio localmente

Los links internos usan rutas absolutas (`/proyectos/...`), por lo que hace falta un
servidor local simple — abrir `index.html` con doble clic no va a resolver esos links
correctamente.

Con Python (ya instalado en la mayoría de los sistemas):

```
cd "Portafolio Personal"
python -m http.server 8000
```

Después abrir `http://localhost:8000/` en el navegador.

Alternativa con Node (si tenés `npx` disponible):

```
npx serve .
```

## Tipografía

Se usa **Fraunces** (Google Fonts) para títulos/display y una font stack de sistema para
el cuerpo de texto. Es una elección temporal, fácil de reemplazar: los nombres de fuente
están centralizados en las variables `--font-display` y `--font-body` en
`assets/css/base.css`.
