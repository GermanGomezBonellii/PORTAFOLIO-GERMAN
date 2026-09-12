# INVENTARIO DE TEXTOS — ES / EN / DE — Portafolio de Germán Gómez Bonelli

Documento de trabajo trilingüe. NO forma parte de la web visible. Es la versión ampliada de `textos-es-en.md` (que se mantiene sin cambios) con una columna `DE:` agregada a cada entrada, generada a partir de los 6 pares de archivos HTML actuales del sitio en sus tres versiones:

- `index.html` / `en/index.html` / `de/index.html` (Home)
- `sobre-mi/index.html` / `en/about/index.html` / `de/ueber-mich/index.html`
- `proyectos/andres-rieznik/index.html` / `en/proyectos/andres-rieznik/index.html` / `de/proyectos/andres-rieznik/index.html`
- `proyectos/camila-perochena/index.html` / `en/proyectos/camila-perochena/index.html` / `de/proyectos/camila-perochena/index.html`
- `proyectos/abuelas/index.html` / `en/proyectos/abuelas/index.html` / `de/proyectos/abuelas/index.html`
- `articulos/autocensura-y-nueva-lengua/index.html` / `en/articulos/autocensura-y-nueva-lengua/index.html` / `de/articulos/autocensura-y-nueva-lengua/index.html`

Los campos `ES:` y `EN:` son los textos FINALES post-revisión editorial (los mismos que ya estaban en `textos-es-en.md`) — no se usó ningún texto de versiones anteriores más largas. El campo `DE:` es nuevo. La traducción al alemán no es literal palabra por palabra: prioriza una redacción natural y profesional, mantiene el tono editorial y el mismo nivel de síntesis ya aplicado en ES/EN, y preserva los nombres propios listados en `# NOMBRES QUE NO SE TRADUCEN` más abajo.

Convención de claves: igual que en `textos-es-en.md` — cuando un texto aparece más de una vez con el mismo texto y función, tiene una sola clave `global_...` con nota de dónde aparece.

---

# NOMBRES QUE NO SE TRADUCEN (las 3 versiones)

Andrés Rieznik · Camila Perochena · Abuelas de Plaza de Mayo · Germán Gómez Bonelli · Universidad Torcuato Di Tella · OLGA · Soñé que volaba · Odisea Argentina · Carlos Pagni · Re-Renacimiento · TikTok · Instagram · YouTube · LinkedIn · INECO · Emilse Garzón · María Roca · Arrecifes · Mary C. King · Nélida · Estela.

Caso especial — **Abuelas de Plaza de Mayo**: en alemán, la PRIMERA aparición del nombre en cada página puede llevar la aclaración entre paréntesis "(Großmütter der Plaza de Mayo)"; las apariciones siguientes en la misma página usan solo "Abuelas de Plaza de Mayo". No se reemplaza sistemáticamente el nombre propio por la traducción en ningún lugar del sitio.

---

# HOME

## Navegación

### global_nav_trabajo
ES:
Trabajo

EN:
Work

DE:
Arbeiten

### global_nav_sobre_mi
ES:
Sobre mí

EN:
About

DE:
Über mich

### global_nav_contacto
ES:
Contacto

EN:
Contact

DE:
Kontakt

## Hero

### home_hero_title
ES:
Estrategia y producción de contenidos para la comunicación científica y política.

EN:
Content strategy and production for science and political communication.

DE:
Kommunikationsstrategie und Content-Produktion für Wissenschaft und Politik.

Nota DE: texto dado literalmente por el usuario, no es traducción libre — "Content-Produktion" fue aprobado explícitamente pese al anglicismo, por ser de uso natural en el sector digital alemán. En el HTML, igual que en ES/EN, la parte final va envuelta en `<span class="hero__title-highlight">` solo por estilo.

### home_hero_lead
ES:
El objetivo es adaptar contenidos científicos y educativos a las lógicas de circulación digital sin perder claridad ni rigor.

EN:
The goal is to adapt scientific and educational content to the way information circulates online without sacrificing clarity or rigor.

DE:
Ziel ist es, wissenschaftliche und Bildungsinhalte an die Logik digitaler Verbreitung anzupassen, ohne an Klarheit oder Genauigkeit zu verlieren.

Nota DE: texto dado literalmente por el usuario.

### home_hero_secondary
ES:
Acompaño cada proyecto desde la estrategia y el desarrollo de formatos hasta la producción, edición y publicación.

EN:
I support each project from strategy and format development through production, editing, and publishing.

DE:
Ich begleite jedes Projekt von der Strategie und Formatentwicklung bis hin zu Produktion, Schnitt und Veröffentlichung.

Nota DE: texto dado literalmente por el usuario. "Edición" → "Schnitt" (edición de video, no "Bearbeitung" genérico).

### home_hero_scroll_cue
ES:
Mis trabajos

EN:
My work

DE:
Meine Arbeiten

(La flecha "↓" es un símbolo, no se traduce.)

## Mis trabajos (sección "Trabajo")

### home_work_title
ES:
Algunos proyectos que representan mi forma de trabajar.

EN:
A few projects that reflect how I work.

DE:
Einige Projekte, die zeigen, wie ich arbeite.

Nota DE: texto dado literalmente por el usuario, usado también en el `<span data-typewriter>` (efecto de máquina de escribir vía JS, igual que en ES/EN — el JS no tiene ningún string hardcodeado, lee `textContent` del propio `<span>`).

### home_project_andres_category
ES:
01 / Neurociencia

EN:
01 / Neuroscience

DE:
01 / Neurowissenschaften

### home_project_andres_description
ES:
Asesoría en comunicación y producción de contenidos junto a un físico y neurocientífico especializado en aprendizaje, en Instagram, TikTok y YouTube.

EN:
Communications consulting and content production with a physicist and neuroscientist specializing in learning, across Instagram, TikTok, and YouTube.

DE:
Kommunikationsberatung und Content-Produktion mit einem Physiker und Neurowissenschaftler, der auf Lernen spezialisiert ist, auf Instagram, TikTok und YouTube.

### home_project_andres_roles
ES:
Estrategia · Producción · Edición · Desarrollo de formatos · Canales

EN:
Strategy · Production · Editing · Format development · Channels

DE:
Strategie · Produktion · Schnitt · Formatentwicklung · Kanäle

### home_project_andres_stat_caption
ES:
Evolución de la comunidad de Instagram durante el período de colaboración.

EN:
Growth of the Instagram community during the collaboration period.

DE:
Entwicklung der Instagram-Community während der Zusammenarbeit.

### home_project_camila_category
ES:
02 / Historia y política

EN:
02 / History and politics

DE:
02 / Geschichte und Politik

### home_project_camila_description
ES:
Edición y adaptación de contenidos históricos y políticos para redes, a partir de participaciones en streaming y televisión.

EN:
Editing and adapting historical and political content for social media, based on appearances on streaming shows and television.

DE:
Schnitt und Anpassung historischer und politischer Inhalte für soziale Medien, basierend auf Auftritten in Streaming-Formaten und im Fernsehen.

### home_project_camila_stat_caption
ES:
Evolución de la comunidad durante aproximadamente un año y medio de colaboración.

EN:
Community growth over approximately a year and a half of collaboration.

DE:
Entwicklung der Community über etwa eineinhalb Jahre Zusammenarbeit.

### home_project_abuelas_category
ES:
03 / Derechos humanos

EN:
03 / Human rights

DE:
03 / Menschenrechte

### home_project_abuelas_description
ES:
Trabajé junto a Abuelas de Plaza de Mayo en el área de Prensa y Difusión, donde inicié y administré su cuenta de TikTok desde cero, combinando producción original y trabajo con archivo.

EN:
I worked with Abuelas de Plaza de Mayo on the Press and Outreach team, where I launched and managed its TikTok account from scratch, combining original production with archival work.

DE:
Ich habe bei Abuelas de Plaza de Mayo (Großmütter der Plaza de Mayo) im Bereich Presse und Öffentlichkeitsarbeit mitgewirkt, wo ich den TikTok-Kanal von Grund auf aufgebaut und betreut habe, mit eigener Produktion und Arbeit mit Archivmaterial.

Nota DE: esta es la PRIMERA aparición de "Abuelas de Plaza de Mayo" en Home DE — lleva la aclaración "(Großmütter der Plaza de Mayo)". No se repite en las apariciones siguientes de la misma página (ni en el nombre del proyecto ni en la sección de contacto).

### home_project_abuelas_stat_caption
ES:
Comunidad alcanzada durante aproximadamente un año desde el lanzamiento de la cuenta de TikTok.

EN:
Community reached over approximately one year since the TikTok account was launched.

DE:
Erreichte Community etwa ein Jahr nach dem Start des TikTok-Kanals.

### global_ver_trabajo
ES:
Ver trabajo

EN:
View work

DE:
Arbeit ansehen

Nota: aparece 3 veces en Home (Andrés, Camila, Abuelas), idéntico en las 3 versiones. La flecha "→" no se traduce.

## Otras colaboraciones

### home_secondary_label
ES:
Otras colaboraciones

EN:
Other collaborations

DE:
Weitere Zusammenarbeiten

### home_emilse_category
ES:
Ciberseguridad

EN:
Cybersecurity

DE:
Cybersicherheit

### home_emilse_title
ES / EN / DE:
Emilse Garzón (nombre propio, no se traduce)

### home_emilse_description_01
ES:
Entre diciembre de 2024 y marzo de 2025 trabajé con participaciones de Emilse en streamings y otros programas, editando contenidos sobre inteligencia artificial, ciberseguridad, política y regulación tecnológica para convertirlos en reels.

EN:
Between December 2024 and March 2025, I worked with Emilse's appearances on livestreams and other programs, editing content on artificial intelligence, cybersecurity, politics, and technology regulation into reels.

DE:
Zwischen Dezember 2024 und März 2025 habe ich Emilses Auftritte in Livestreams und anderen Formaten bearbeitet und daraus Reels zu künstlicher Intelligenz, Cybersicherheit, Politik und Technologieregulierung produziert.

### home_emilse_description_02
ES:
Fue también un trabajo especialmente cercano a mi interés por los cruces entre tecnología y política. Un buen ejemplo es Las Malvinas Argentinas según ChatGPT, una pieza construida alrededor de cómo una herramienta de inteligencia artificial responde frente a una cuestión atravesada por historia, soberanía y política.

EN:
It was also a project closely connected to my interest in the intersections between technology and politics. A good example is Las Malvinas Argentinas según ChatGPT, a piece built around how an artificial intelligence tool responds to an issue shaped by history, sovereignty, and politics.

DE:
Diese Arbeit lag mir auch persönlich nahe, wegen meines Interesses an der Schnittstelle von Technologie und Politik. Ein gutes Beispiel ist Las Malvinas Argentinas según ChatGPT, ein Beitrag darüber, wie ein KI-Tool auf eine von Geschichte, Souveränität und Politik geprägte Frage antwortet.

Nota DE: "Las Malvinas Argentinas según ChatGPT" es el título real de la pieza enlazada — no se traduce, igual que en EN.

### home_maria_category
ES:
Neurociencia

EN:
Neuroscience

DE:
Neurowissenschaften

### home_maria_title
ES / EN / DE:
María Roca (nombre propio, no se traduce)

### home_maria_description_01
ES:
Trabajé con participaciones de la Dra. María Roca, Coordinadora de Actividades de Acercamiento a la Comunidad en INECO, editando contenidos sobre neurociencia, salud cerebral y bienestar cognitivo para convertirlos en videos cortos.

EN:
I worked with appearances by Dr. María Roca, Community Outreach Coordinator at INECO, editing content on neuroscience, brain health, and cognitive well-being into short videos.

DE:
Ich habe Auftritte von Dr. María Roca, Koordinatorin für Community-Outreach bei INECO, bearbeitet und daraus kurze Videos zu Neurowissenschaften, Gehirngesundheit und kognitivem Wohlbefinden produziert.

Nota DE: "INECO" no se traduce (nombre de institución). "Community-Outreach" se mantiene como préstamo del inglés dentro del cargo, siguiendo el mismo criterio que EN.

### home_maria_description_02
ES:
Sus intervenciones abordaban temas muy ligados a la vida cotidiana, como la memoria, los hábitos, el envejecimiento y el cuidado del cerebro. Fue un trabajo muy conectado con mi interés por la neurociencia.

EN:
Her appearances covered topics closely tied to everyday life, such as memory, habits, aging, and brain health. It was work closely connected to my interest in neuroscience.

DE:
Ihre Beiträge behandelten Themen mit starkem Alltagsbezug wie Gedächtnis, Gewohnheiten, Altern und Gehirngesundheit — eine Arbeit, die eng mit meinem Interesse an Neurowissenschaften verbunden war.

## Perfil / Sobre mí / Über mich

### home_profile_eyebrow
ES:
Perfil

EN:
Profile

DE:
Profil

### home_profile_title
ES:
Mi recorrido combina comunicación, diseño y tecnología.

EN:
My background brings together communication, design, and technology.

DE:
Mein Werdegang verbindet Kommunikation, Design und Technologie.

Nota DE: texto dado literalmente por el usuario. En el HTML, igual que en ES/EN, "Kommunikation", "Design" y "Technologie" van envueltas en `<span class="profile-highlight">` (mismo estilo), y además en `<span class="no-break">` para evitar que la palabra se separe de la coma o el punto siguiente al hacer salto de línea — recurso ya usado en ES/EN, aplicado igual acá porque el alemán también puede partir mal en ese punto.

### home_profile_text_01
ES:
Me formé como Técnico en Diseño y Comunicación Publicitaria y actualmente estudio Tecnología Digital en la Universidad Torcuato Di Tella, una carrera que integra programación, negocios y diseño. Esa formación amplió mi manera de pensar la comunicación: no solo desde la producción de contenidos, sino también desde las herramientas, sistemas y plataformas a través de las cuales circulan.

EN:
I earned a technical degree in Advertising Design and Communication and currently study Digital Technology at Universidad Torcuato Di Tella, a degree that combines programming, business, and design. That training broadened the way I think about communication: not only in terms of content production, but also through the tools, systems, and platforms through which content circulates.

DE:
Ich habe eine technische Ausbildung in Werbedesign und Kommunikation abgeschlossen und studiere derzeit Digitale Technologie an der Universidad Torcuato Di Tella, ein Studiengang, der Programmierung, Wirtschaft und Design verbindet. Diese Ausbildung hat meinen Blick auf Kommunikation erweitert: nicht nur auf die Produktion von Inhalten, sondern auch auf die Werkzeuge, Systeme und Plattformen, über die sie zirkulieren.

### home_profile_text_02
ES:
En paralelo, trabajo en un laboratorio de neurociencia de la universidad, manteniendo un vínculo directo con la investigación y la producción de conocimiento científico.

EN:
At the same time, I work in a neuroscience lab at the university, maintaining a direct connection with research and the production of scientific knowledge.

DE:
Parallel dazu arbeite ich in einem Neurowissenschafts-Labor der Universität und stehe damit in direktem Kontakt mit Forschung und der Produktion wissenschaftlichen Wissens.

### home_profile_text_03
ES:
Me interesa especialmente el cruce entre estas áreas, incluyendo su relación con los derechos humanos y las políticas públicas: creo en la importancia de que las decisiones puedan apoyarse en evidencia científica accesible fuera de los ámbitos especializados, y en que comunicar ese conocimiento amplía quiénes pueden acceder a él, discutirlo y utilizarlo.

EN:
I'm especially interested in the intersection of these areas, including how it connects to human rights and public policy: I believe decisions should be able to rely on scientific evidence that's accessible beyond specialized settings, and that communicating that knowledge expands who can access it, discuss it, and use it.

DE:
Mich interessiert besonders die Schnittstelle dieser Bereiche, auch im Zusammenhang mit Menschenrechten und öffentlicher Politik: Ich glaube, dass Entscheidungen sich auf wissenschaftliche Evidenz stützen können sollten, die auch außerhalb spezialisierter Kreise zugänglich ist, und dass die Vermittlung dieses Wissens erweitert, wer darauf zugreifen, es diskutieren und nutzen kann.

### home_profile_fact_formacion_label
ES:
Formación

EN:
Education

DE:
Ausbildung

### home_profile_fact_formacion_value
ES:
Técnico en Diseño y Comunicación Publicitaria

EN:
Technical degree in Advertising Design and Communication

DE:
Technische Ausbildung in Werbedesign und Kommunikation

### home_profile_fact_actualmente_label
ES:
Actualmente

EN:
Currently

DE:
Aktuell

### home_profile_fact_actualmente_value
ES:
Tecnología Digital

EN:
Digital Technology

DE:
Digitale Technologie

### global_universidad_di_tella
ES / EN / DE:
Universidad Torcuato Di Tella (nombre propio de institución, no se traduce en ninguna versión)

### home_profile_fact_investigacion_label
ES:
Investigación

EN:
Research

DE:
Forschung

### home_profile_fact_investigacion_value
ES:
Laboratorio de neurociencia

EN:
Neuroscience lab

DE:
Neurowissenschafts-Labor

## Artículos (listado en Home / Über mich)

### home_articulo_01_label
ES:
Artículo 01

EN:
Article 01

DE:
Artikel 01

### article_01_title
ES:
Autocensura y nueva-lengua: el mecanismo del que nadie habla

EN:
Self-censorship and Newspeak: the mechanism no one talks about

DE:
Selbstzensur und Neusprache: der Mechanismus, über den niemand spricht

Nota DE: texto dado literalmente por el usuario. Se repite tal cual como `<title>` y `<h1>` en la página individual del artículo (ver METADATOS).

### article_01_excerpt
ES:
Desde "des-vivirse" hasta "el pintor con bigote", el algoritmo está modificando nuestra lengua. ¿Cómo podemos prevenir la violencia sin hablar sobre ella?

EN:
From "unaliving" to "the painter with the mustache," the algorithm is changing our language. How can we prevent violence without talking about it?

DE:
Von „Entleben" bis zum „Maler mit dem Schnurrbart" – der Algorithmus verändert unsere Sprache. Wie lässt sich Gewalt verhindern, ohne darüber zu sprechen?

Nota DE: mismo texto aparece 3 veces (bajada en Über mich, bajada en la página del artículo, y meta description de esa misma página — ver METADATOS). "des-vivirse"/"unaliving" se tradujo como neologismo equivalente "Entleben" (verbo inventado sobre "leben", mismo mecanismo que el neologismo original en español e inglés); "el pintor con bigote"/"the painter with the mustache" se tradujo literalmente ("der Maler mit dem Schnurrbart"), ya que es una perífrasis (no un nombre propio) usada para evitar decir un nombre directamente — el mismo procedimiento que describe el artículo.

## Contacto / Kontakt

### home_contact_title
ES:
Contacto

EN:
Contact

DE:
Kontakt

### home_contact_lead
ES:
Podés encontrarme o escribirme por estos medios.

EN:
You can find me or get in touch through these channels.

DE:
Hier findest du meine Kontaktmöglichkeiten.

Nota DE: texto dado literalmente por el usuario.

### home_contact_mail_label
ES:
Mail

EN:
Email

DE:
E-Mail

### home_contact_linkedin_label
ES / EN / DE:
LinkedIn (no se traduce)

Nota: el mail (germangomezbonelli2@gmail.com) y el nombre "Germán Gómez Bonelli" junto al link de LinkedIn no se traducen — mismos datos de contacto reales en las 3 versiones, sin agregar teléfono, ubicación ni Instagram.

## Footer (Home)

### global_footer_portfolio_year
ES / EN / DE:
Portfolio 2026 (igual en las 3 versiones)

---

# SOBRE MÍ / ÜBER MICH

Nota: esta página no estaba todavía en `textos-es-en.md` (se agregó al sitio en una revisión posterior). Se documenta acá completa, ES/EN/DE, con la versión FINAL ya reducida del contenido (no la versión anterior de 4 párrafos).

### profile_title
ES:
Mi recorrido combina comunicación, diseño y tecnología.

EN:
My background brings together communication, design, and technology.

DE:
Mein Werdegang verbindet Kommunikation, Design und Technologie.

(Idéntico a `home_profile_title` — mismo texto, misma página en 3 profundidades de idioma distintas: `sobre-mi/`, `en/about/`, `de/ueber-mich/`.)

### profile_text_01 / profile_text_02 / profile_text_03

Idénticos a `home_profile_text_01` / `_02` / `_03` de la sección HOME de más arriba — mismos 3 párrafos, misma página.

### profile_facts

Idénticos a `home_profile_fact_*` de HOME — Formación/Education/Ausbildung, Actualmente/Currently/Aktuell, Investigación/Research/Forschung, con Universidad Torcuato Di Tella sin traducir en las 3 versiones.

### profile_back_link
ES:
← Volver al inicio

EN:
← Back to home

DE:
← Zurück zur Startseite

### profile_article (Artículo 01 embebido)

Idéntico a `home_articulo_01_label` / `article_01_title` / `article_01_excerpt` de HOME.

---

# ANDRÉS RIEZNIK

## Header / navegación

Header y nav idénticos a Home en las 3 versiones (`global_nav_*`) — no se repiten acá.

## Hero

### global_back_to_work
ES:
← Volver a mis trabajos

EN:
← Back to my work

DE:
← Zurück zu meinen Arbeiten

Nota: idéntico en Andrés, Camila y Abuelas en las 3 versiones — mismo texto, mismo link de vuelta a Home#trabajo.

### andres_hero_category
ES:
01 / Neurociencia

EN:
01 / Neuroscience

DE:
01 / Neurowissenschaften

### andres_hero_title
ES / EN / DE:
Andrés Rieznik (nombre propio, no se traduce)

### andres_hero_lead
ES:
Comunicación y producción de contenidos sobre ciencia, aprendizaje y educación, desarrollados para Instagram, TikTok y YouTube.

EN:
Communication and content production on science, learning, and education, developed for Instagram, TikTok, and YouTube.

DE:
Kommunikation und Content-Produktion zu Wissenschaft, Lernen und Bildung, entwickelt für Instagram, TikTok und YouTube.

### andres_hero_roles
ES:
Estrategia · Producción · Edición · Desarrollo de formatos · Canales

EN:
Strategy · Production · Editing · Format development · Channels

DE:
Strategie · Produktion · Schnitt · Formatentwicklung · Kanäle

### andres_hero_stat_instagram_label / tiktok_label / youtube_label
ES / EN / DE:
Instagram / TikTok / YouTube (no se traducen)

### andres_hero_stat_instagram_unit
ES:
seguidores

EN:
followers

DE:
Follower

### andres_hero_stat_instagram_caption
ES:
Evolución de la comunidad durante el período de colaboración.

EN:
Community growth during the collaboration period.

DE:
Entwicklung der Community während der Zusammenarbeit.

### andres_hero_stat_tiktok_unit
ES:
seguidores

EN:
followers

DE:
Follower

### andres_hero_stat_tiktok_caption
ES:
Cuenta creada y administrada por mí desde su lanzamiento.

EN:
Account launched and managed by me from the start.

DE:
Von mir seit dem Start aufgebauter und betreuter Kanal.

### andres_hero_stat_youtube_unit
ES:
suscriptores

EN:
subscribers

DE:
Abonnenten

### andres_hero_stat_youtube_caption
ES:
Canal creado y administrado por mí, con desarrollo de producciones originales.

EN:
Channel launched and managed by me, including the development of original productions.

DE:
Von mir aufgebauter und betreuter Kanal, mit Entwicklung eigener Produktionen.

## El proyecto / Das Projekt

### global_section_label_el_proyecto
ES:
El proyecto

EN:
The project

DE:
Das Projekt

Nota: mismo label en Andrés, Camila y Abuelas, las 3 versiones.

### andres_intro_01
ES:
Trabajo junto a Andrés Rieznik, físico y neurocientífico especializado en aprendizaje, en el desarrollo de su comunicación digital. La colaboración comenzó cuando su cuenta de Instagram tenía alrededor de 19.000 seguidores y continúa actualmente, con una comunidad de más de 480.000.

EN:
I work with Andrés Rieznik, a physicist and neuroscientist specializing in learning, on the development of his digital communications. Our collaboration began when his Instagram account had around 19,000 followers and continues today, with a community of more than 480,000.

DE:
Ich arbeite mit Andrés Rieznik, einem Physiker und Neurowissenschaftler mit Spezialisierung auf Lernen, an der Entwicklung seiner digitalen Kommunikation. Die Zusammenarbeit begann, als sein Instagram-Konto rund 19.000 Follower hatte, und dauert bis heute an — mittlerweile mit einer Community von über 480.000.

### andres_intro_02
ES:
A lo largo de este proceso participo de forma sostenida en la definición de la estrategia, los formatos y los contenidos para cada plataforma. Mi trabajo abarca el desarrollo de las piezas desde la idea hasta su versión final: pienso cómo abordar cada tema, defino la forma de grabación y trabajo sobre la edición, el ritmo, la estructura, los subtítulos, la imagen y el sonido.

EN:
Throughout this process, I am continuously involved in defining the strategy, formats, and content for each platform. My work covers each piece from the initial idea to the final version: I think through how to approach each topic, define how it should be filmed, and work on the editing, pacing, structure, subtitles, visuals, and sound.

DE:
Dabei bin ich fortlaufend an der Definition von Strategie, Formaten und Inhalten für jede Plattform beteiligt. Meine Arbeit umfasst die Entwicklung der Beiträge von der ersten Idee bis zur finalen Version: Ich überlege, wie ein Thema angegangen wird, lege die Art der Aufnahme fest und arbeite an Schnitt, Rhythmus, Struktur, Untertiteln, Bild und Ton.

## Trabajo seleccionado / Ausgewählte Arbeiten

### global_section_label_trabajo_seleccionado
ES:
Trabajo seleccionado

EN:
Selected work

DE:
Ausgewählte Arbeiten

Nota: mismo label en Andrés, Camila y Abuelas, las 3 versiones.

### andres_subhead_videos_redes
ES:
Videos para redes

EN:
Social media videos

DE:
Videos für soziale Medien

### global_reel_label_video_instagram / video_youtube / video_tiktok
ES:
Video / Instagram — Video / YouTube — Video / TikTok

EN:
Video / Instagram — Video / YouTube — Video / TikTok

DE:
Video / Instagram — Video / YouTube — Video / TikTok

(Los nombres de plataforma no se traducen; "Video" es igual en las 3 lenguas.)

### andres_reel_01–06_title
ES / EN / DE:
Alfabetización para todos y todas · Para partirte el bocho · El Homúnculo de Penfield · Nitrógeno y globos · Cómo facilitar las matemáticas · Innovación empresarial

Nota: los 6 títulos se mantienen en español en las 3 versiones — son los nombres reales de las piezas, no textos editoriales a traducir (mismo criterio ya aplicado en EN, extendido a DE).

### global_unit_visualizaciones
ES:
visualizaciones

EN:
views

DE:
Aufrufe

### global_ver_video
ES:
Ver video

EN:
Watch video

DE:
Video ansehen

### andres_subhead_recortes_youtube
ES:
Recortes en Youtube

EN:
YouTube clips

DE:
YouTube-Ausschnitte

### global_reel_label_diseno_grafico_youtube
ES:
Diseño gráfico y posicionamiento en Youtube

EN:
Graphic design and YouTube content positioning

DE:
Grafikdesign und YouTube-Positionierung

### andres_youtube_01–03_title
ES / EN / DE:
En un solo semestre DUPLICARON la comprensión lectora de los chicos de Chaco · Esto es una tragedia porque sabemos como evitarlo y no lo estamos haciendo · Estos experimentos solo se pueden explicar como fenómenos cuánticos macroscópicos

Nota: títulos reales y ya publicados en YouTube — se mantienen en español en las 3 versiones para no generar discrepancia con el título real del video enlazado (mismo criterio ya aplicado en EN).

### global_ver_en_youtube
ES:
Ver en YouTube

EN:
Watch on YouTube

DE:
Auf YouTube ansehen

## Alfabetización / Alphabetisierung

### andres_section_label_alfabetizacion
ES:
Alfabetización

EN:
Literacy

DE:
Alphabetisierung

### andres_alfabetizacion_intro
ES:
Uno de los proyectos desarrollados durante la colaboración estuvo centrado en comunicación y divulgación sobre alfabetización y aprendizaje.

EN:
One of the projects developed during the collaboration focused on communication and public outreach around literacy and learning.

DE:
Eines der im Rahmen der Zusammenarbeit entwickelten Projekte war der Kommunikation und Vermittlung rund um Alphabetisierung und Lernen gewidmet.

### andres_documental_eyebrow / andres_section_label_produccion_original / andres_area_04_title
ES:
Producción original

EN:
Original production

DE:
Eigenproduktion

Nota: mismo texto en 3 funciones distintas dentro de la página (eyebrow del mini documental, label de la sección Re-Renacimiento, título de ítem en "Áreas de trabajo"/"Arbeitsbereiche") — igual de consistente en las 3 versiones.

### andres_documental_title
ES:
Mini documental en Arrecifes

EN:
Short documentary in Arrecifes

DE:
Kurzdokumentation in Arrecifes

(Arrecifes: nombre propio de lugar, no se traduce.)

### andres_documental_text_01
ES:
Como parte de la campaña de alfabetización produjimos un mini documental que nos llevó a Arrecifes para conocer de cerca una de las experiencias de implementación del método. Allí registramos los testimonios de los chicos que participaban, de sus madres y de las responsables de llevar adelante el proyecto.

EN:
As part of the literacy campaign, we produced a short documentary that took us to Arrecifes to look closely at one experience implementing the method. There, we recorded the testimonies of the children taking part, their mothers, and the people responsible for carrying out the project.

DE:
Im Rahmen der Alphabetisierungskampagne produzierten wir eine Kurzdokumentation, für die wir nach Arrecifes reisten, um eine der Umsetzungserfahrungen der Methode aus der Nähe kennenzulernen. Dort hielten wir die Aussagen der teilnehmenden Kinder, ihrer Mütter und der Projektverantwortlichen fest.

### andres_documental_text_02
ES:
La pieza se desarrolló desde cero y requirió pensar cómo convertir esa experiencia en un relato audiovisual: organizar la producción, realizar las entrevistas, registrar el trabajo en territorio y después construir el documental en edición. Más que explicar el proyecto desde afuera, el objetivo fue que quienes lo estaban viviendo pudieran contar qué estaba pasando y qué significaba para ellos.

EN:
The piece was developed from scratch and required thinking through how to turn that experience into an audiovisual story: organizing the production, conducting the interviews, documenting the work on location, and then shaping the documentary in the edit. Rather than explaining the project from the outside, the aim was to let the people experiencing it describe what was happening and what it meant to them.

DE:
Der Beitrag entstand von Grund auf und erforderte, diese Erfahrung in eine audiovisuelle Erzählung zu übersetzen: Produktion organisieren, Interviews führen, die Arbeit vor Ort festhalten und die Dokumentation anschließend im Schnitt aufbauen. Statt das Projekt von außen zu erklären, sollten die Beteiligten selbst erzählen, was geschah und was es für sie bedeutete.

### andres_documental_role
ES:
Mi rol — Producción · Edición

EN:
My role — Production · Editing

DE:
Meine Rolle — Produktion · Schnitt

## Piezas gráficas de lanzamiento / Grafiken zum Launch

### andres_graphics_title
ES:
Piezas gráficas de lanzamiento

EN:
Launch graphics

DE:
Grafiken zum Launch

### andres_graphics_text
ES:
Piezas desarrolladas para acompañar el lanzamiento y la circulación del mini documental en redes.

EN:
Graphics created to support the launch and social media distribution of the short documentary.

DE:
Grafiken, die den Launch und die Verbreitung der Kurzdokumentation in sozialen Medien begleiteten.

### andres_graphics_carousel_label
ES:
Carrusel de Instagram · 5 slides

EN:
Instagram carousel · 5 slides

DE:
Instagram-Carousel · 5 Slides

Nota DE: "Carousel"/"Slides" se mantienen como préstamos del inglés, igual que en ES ("slides" ya estaba en español) y EN — de uso corriente en el vocabulario digital alemán.

### andres_carousel_counter_slide
ES / EN:
Slide

DE:
Slide

(precede al contador numérico "Slide 01 / 05"; los números no se traducen.)

### alt_graphic_carousel_pieces (5 alt del carrusel)

DE 1:
Grafik im Instagram-Story-Format: Eine Lehrerin zeigt auf den mit Karten zusammengesetzten Satz „Empezó el carnaval" an der Tafel, Schüler:innen schauen von ihren Plätzen aus zu, darüber die Überschrift „Un Milagro ocurrió en Arrecifes".

DE 2:
Grafik mit einer Vergleichstabelle 1997–2019 des lateinamerikanischen Bildungsrankings (Quelle UNESCO), die Argentiniens Abfall von Platz 2 auf Platz 10 zeigt, mit dem Text „la situación no hizo más que empeorar".

DE 3:
Grafik mit einem Kaninchen-Plüschtier und dem Text „Una experiencia podría cambiarlo todo", die zeigt, dass Kinder an einigen öffentlichen Schulen in Arrecifes ihre Lesekompetenz drastisch verbessert haben.

DE 4:
Grafik mit einem Balkendiagramm „Aceleración en el aprendizaje" (Quelle: Provinz Buenos Aires), das Schulen mit und ohne Kalulu-Schüler:innen vergleicht, mit einer in Rot hervorgehobenen Verbesserung von über 300 %.

DE 5:
Grafik mit einem Gruppenfoto des Produktionsteams mit Anwohner:innen von Arrecifes vor einem verfallenen Gebäude, mit dem Text „¿Pero cómo lo lograron?...", die ankündigt, dass die Kurzdokumentation ab sofort verfügbar ist.

Nota DE: mismo criterio que ES/EN — el texto en pantalla de cada pieza (entre comillas) se conserva literal en español (es texto real dentro de la imagen), el resto de la descripción se traduce naturalmente.

## Producción original — Re-Renacimiento / Eigenproduktion — Re-Renacimiento

### andres_rerenacimiento_title
ES / EN / DE:
Re-Renacimiento (título propio de la serie, no se traduce)

### andres_rerenacimiento_text_01
ES:
Re-Renacimiento fue una serie original de cuatro capítulos cortos que produjimos junto a Andrés. A lo largo de los episodios recorrimos distintos temas combinando explicación, animaciones, material audiovisual, experimentos simples y ejemplos cotidianos.

EN:
Re-Renacimiento was an original four-episode short-form series that we produced with Andrés. Across the episodes, we explored a range of topics by combining explanations, animation, audiovisual material, simple experiments, and everyday examples.

DE:
Re-Renacimiento war eine eigene Serie aus vier kurzen Folgen, die wir gemeinsam mit Andrés produzierten. Über die Folgen hinweg behandelten wir verschiedene Themen und kombinierten Erklärungen, Animationen, audiovisuelles Material, einfache Experimente und Alltagsbeispiele.

### andres_rerenacimiento_text_02
ES:
La serie nos permitió trabajar un formato más construido que las piezas habituales para redes: cada capítulo tenía su propio recorrido, pero los cuatro compartían una misma lógica visual y narrativa para hacer accesibles ideas complejas sin convertirlas solamente en fragmentos aislados.

EN:
The series gave us room to develop a more fully constructed format than our usual social media pieces: each episode had its own arc, while all four shared the same visual and narrative logic for making complex ideas accessible without reducing them to isolated fragments.

DE:
Die Serie erlaubte uns ein durchdachteres Format als die üblichen Beiträge für soziale Medien: Jede Folge hatte ihren eigenen Bogen, doch alle vier teilten dieselbe visuelle und narrative Logik, um komplexe Ideen zugänglich zu machen, ohne sie auf isolierte Fragmente zu reduzieren.

### global_capitulo_label
ES:
Capítulo 01 / 02 / 03 / 04

EN:
Episode 01 / 02 / 03 / 04

DE:
Folge 01 / 02 / 03 / 04

## Desarrollo de canales / Kanalentwicklung

### andres_section_label_canales
ES:
Desarrollo de canales

EN:
Channel development

DE:
Kanalentwicklung

### andres_canal_tiktok_text
ES:
Cuenta creada y administrada desde su lanzamiento.

EN:
Account launched and managed from the start.

DE:
Kanal seit dem Start aufgebaut und betreut.

### andres_canal_youtube_text
ES:
Canal creado y administrado desde su lanzamiento, incluyendo el desarrollo de producciones originales.

EN:
Channel launched and managed from the start, including the development of original productions.

DE:
Kanal seit dem Start aufgebaut und betreut, einschließlich der Entwicklung eigener Produktionen.

## Áreas de trabajo / Arbeitsbereiche

### andres_section_label_areas
ES:
Áreas de trabajo

EN:
Areas of work

DE:
Arbeitsbereiche

### andres_area_01_title / text
ES:
Estrategia de comunicación — Defino cómo traducir temas de ciencia, aprendizaje y educación a contenidos digitales, combinando criterios de comunicación, selección de temas y desarrollo de formatos.

EN:
Communications strategy — I define how topics in science, learning, and education translate into digital content, combining communications criteria, topic selection, and format development.

DE:
Kommunikationsstrategie — Ich definiere, wie Themen aus Wissenschaft, Lernen und Bildung in digitale Inhalte übersetzt werden, und kombiniere dabei Kommunikationskriterien, Themenauswahl und Formatentwicklung.

### andres_area_02_title / text
ES:
Contenido para redes — Adaptación de columnas, entrevistas, streamings y otras participaciones a formatos digitales, junto con el desarrollo de contenidos concebidos específicamente para redes.

EN:
Social media content — Adapting columns, interviews, livestreams, and other appearances into digital formats, alongside the development of content conceived specifically for social media.

DE:
Inhalte für soziale Medien — Anpassung von Kolumnen, Interviews, Livestreams und anderen Auftritten an digitale Formate, sowie Entwicklung von Inhalten, die speziell für soziale Medien konzipiert sind.

### andres_area_03_title / text
ES:
Canales propios — Creación y administración de TikTok y YouTube desde su lanzamiento, desarrollando formatos y lógicas específicas para cada plataforma.

EN:
Owned channels — Launching and managing TikTok and YouTube from the start, developing formats and approaches tailored to each platform.

DE:
Eigene Kanäle — Aufbau und Betreuung von TikTok und YouTube seit dem Start, mit Formaten und Ansätzen, die auf jede Plattform zugeschnitten sind.

### andres_area_04_title / text
ES:
Producción original — Desarrollo y coproducción de una serie de videos originales para YouTube, desde la definición de formatos hasta la grabación, edición y publicación, incluyendo una miniserie de cuatro capítulos pensada especialmente para el canal.

EN:
Original production — Development and co-production of a series of original YouTube videos, from format definition through filming, editing, and publishing, including a four-episode miniseries created specifically for the channel.

DE:
Eigenproduktion — Entwicklung und Koproduktion einer Reihe eigener YouTube-Videos, von der Formatdefinition über Dreh und Schnitt bis zur Veröffentlichung, einschließlich einer eigens für den Kanal konzipierten Miniserie mit vier Folgen.

### andres_area_05_title / text
ES:
Alfabetización — Participación en el desarrollo comunicacional de una campaña sobre alfabetización y aprendizaje, que incluyó la producción de un mini documental grabado en Arrecifes.

EN:
Literacy — Participation in the communications development of a campaign on literacy and learning, including the production of a short documentary filmed in Arrecifes.

DE:
Alphabetisierung — Mitwirkung an der kommunikativen Entwicklung einer Kampagne zu Alphabetisierung und Lernen, einschließlich der Produktion einer in Arrecifes gedrehten Kurzdokumentation.

## Navegación entre casos / footer

### global_back_all_work
ES:
← Todos los trabajos

EN:
← All work

DE:
← Alle Arbeiten

Nota: idéntico en Andrés, Camila y Abuelas, las 3 versiones.

### andres_next_project / global_siguiente_proyecto
ES:
Siguiente proyecto

EN:
Next project

DE:
Nächstes Projekt

(Idéntico en Andrés y Camila, las 3 versiones.)

### global_back_to_projects
ES:
← Volver a proyectos

EN:
← Back to projects

DE:
← Zurück zu den Projekten

Nota: en el footer, idéntico en las 6 páginas (Andrés, Camila, Abuelas, Artículo — Home/Über mich no llevan este link) en las 3 versiones.

---

# CAMILA PEROCHENA

## Header / navegación

Idéntico al resto de las páginas — no se repite acá.

## Hero

### camila_hero_category
ES:
02 / Historia y comunicación política

EN:
02 / History and political communication

DE:
02 / Geschichte und politische Kommunikation

Nota: parecido pero NO idéntico a `home_project_camila_category` ("02 / Geschichte und Politik") — textos distintos también en DE, mismo criterio que ES/EN.

### camila_hero_title
ES / EN / DE:
Camila Perochena (nombre propio, no se traduce)

### camila_hero_lead
ES:
Edición y adaptación de contenidos históricos y políticos para plataformas digitales, a partir de participaciones en streaming y televisión.

EN:
Editing and adapting historical and political content for digital platforms, based on appearances on streaming shows and television.

DE:
Schnitt und Anpassung historischer und politischer Inhalte für digitale Plattformen, ausgehend von Auftritten in Streaming-Formaten und im Fernsehen.

### camila_hero_roles
ES:
Edición audiovisual · Selección de contenidos · Desarrollo de formatos · Adaptación multiplataforma

EN:
Video editing · Content selection · Format development · Cross-platform adaptation

DE:
Videoschnitt · Auswahl der Inhalte · Formatentwicklung · Plattformübergreifende Anpassung

### camila_hero_stat_caption

Idéntico a `home_project_camila_stat_caption` — ver HOME.

## El proyecto / Das Projekt

(Label de sección: ver `global_section_label_el_proyecto`.)

### camila_intro_01
ES:
Camila Perochena es historiadora y divulgadora, especializada en historia argentina y mundial. Participa regularmente en espacios de análisis y divulgación como Soñé que volaba, en OLGA, y Odisea Argentina, de Carlos Pagni.

EN:
Camila Perochena is a historian and communicator specializing in Argentine and world history. She regularly appears in analysis and public-facing history programs such as Soñé que volaba on OLGA and Odisea Argentina with Carlos Pagni.

DE:
Camila Perochena ist Historikerin und Kommunikatorin, spezialisiert auf argentinische und Weltgeschichte. Sie tritt regelmäßig in Analyse- und Vermittlungsformaten auf, etwa in Soñé que volaba bei OLGA und in Odisea Argentina mit Carlos Pagni.

Nota: "OLGA", "Carlos Pagni", "Soñé que volaba" y "Odisea Argentina" no se traducen en ninguna versión (nombres propios de canal/programa/persona).

### camila_intro_02
ES:
Mi trabajo con ella se concentra principalmente en la edición y adaptación de esas intervenciones para plataformas digitales. A partir de materiales originalmente pensados para formatos largos, trabajo en la selección, construcción y edición de fragmentos capaces de funcionar como piezas autónomas sin perder el contexto histórico o argumental.

EN:
My work with her focuses primarily on editing and adapting those appearances for digital platforms. Working from material originally created for long-form formats, I select, shape, and edit excerpts that can stand on their own without losing their historical or argumentative context.

DE:
Meine Arbeit mit ihr konzentriert sich vor allem auf den Schnitt und die Anpassung dieser Auftritte für digitale Plattformen. Ausgehend von Material, das ursprünglich für Langformate gedacht war, wähle ich Ausschnitte aus, gestalte und schneide sie so, dass sie als eigenständige Stücke funktionieren, ohne den historischen oder argumentativen Kontext zu verlieren.

(camila_intro_03 fue eliminado en la revisión editorial de ES/EN — no se reintrodujo en DE, siguiendo la instrucción de no recuperar texto ya eliminado.)

## Trabajo seleccionado / Ausgewählte Arbeiten

(Label de sección: ver `global_section_label_trabajo_seleccionado`.)

### camila_selected_intro
ES:
Selección de piezas editadas a partir de intervenciones en streaming y televisión.

EN:
A selection of pieces edited from appearances on streaming shows and television.

DE:
Auswahl von Beiträgen, geschnitten aus Auftritten in Streaming-Formaten und im Fernsehen.

### global_reel_label_reel_instagram
ES / EN / DE:
Reel / Instagram (no se traduce)

### camila_reel_texto_repetido
ES:
Selección de fragmento · Edición · Adaptación para redes

EN:
Excerpt selection · Editing · Social media adaptation

DE:
Ausschnittauswahl · Schnitt · Anpassung für soziale Medien

Nota: idéntico en los 3 reels de Camila, las 3 versiones.

### global_ver_reel
ES:
Ver reel

EN:
Watch reel

DE:
Reel ansehen

(Los valores "3,3M" / "1,2M" / "600K" se mantienen sin cambios en las 3 versiones; la unidad es `global_unit_visualizaciones` → "Aufrufe" en alemán.)

## Contenidos de origen / Quellmaterial

### camila_section_label_contenidos_origen
ES:
Contenidos de origen

EN:
Source material

DE:
Quellmaterial

### camila_source_olga_title / description
ES:
Soñé que volaba (OLGA) — Intervenciones sobre historia, política y actualidad posteriormente adaptadas para redes.

EN:
Soñé que volaba (OLGA) — Appearances on history, politics, and current affairs, later adapted for social media.

DE:
Soñé que volaba (OLGA) — Beiträge zu Geschichte, Politik und aktuellem Geschehen, die später für soziale Medien angepasst wurden.

### camila_source_odisea_title / description
ES:
Odisea Argentina (Carlos Pagni) — Participaciones de análisis histórico y político utilizadas como material de origen para nuevas piezas digitales.

EN:
Odisea Argentina (Carlos Pagni) — Historical and political analysis used as source material for new digital content.

DE:
Odisea Argentina (Carlos Pagni) — Beiträge mit historischer und politischer Analyse, die als Ausgangsmaterial für neue digitale Inhalte dienten.

## Mi rol / Meine Rolle

### global_section_label_mi_rol
ES:
Mi rol

EN:
My role

DE:
Meine Rolle

Nota: mismo label en Camila y Abuelas, las 3 versiones.

### camila_role_01
ES: Selección de fragmentos — Identifico, dentro de intervenciones extensas, las ideas o intercambios que pueden sostenerse como piezas independientes, priorizando lo que conserva sentido y contexto fuera de la conversación original.

EN: Excerpt selection — Within longer appearances, I identify ideas or exchanges that can stand on their own, prioritizing what preserves meaning and context outside the original conversation.

DE: Auswahl der Ausschnitte — In längeren Auftritten identifiziere ich Ideen oder Wortwechsel, die als eigenständige Stücke funktionieren können, und bevorzuge dabei, was Sinn und Kontext auch außerhalb des ursprünglichen Gesprächs bewahrt.

### camila_role_02
ES: Edición audiovisual — Ritmo, cortes, subtítulos y recursos visuales para construir una pieza clara y dinámica, sin alterar el sentido de la intervención original.

EN: Video editing — Pacing, cuts, subtitles, and visual elements to build a clear, dynamic piece without changing the meaning of the original appearance.

DE: Videoschnitt — Tempo, Schnitte, Untertitel und visuelle Elemente für ein klares, dynamisches Stück, ohne den Sinn des ursprünglichen Auftritts zu verändern.

### camila_role_03
ES: Construcción narrativa — Reorganizo y edito fragmentos extraídos de conversaciones largas para darles entrada, desarrollo y cierre propios, con el contexto necesario para comprenderse de forma autónoma.

EN: Narrative structure — I reorganize and edit excerpts from long conversations into pieces with their own beginning, development, and ending, adding the context needed to stand on their own.

DE: Narrative Struktur — Ich ordne Ausschnitte aus langen Gesprächen neu und schneide sie zu Stücken mit eigenem Anfang, Entwicklung und Schluss, mit dem Kontext, den es braucht, um für sich zu stehen.

### camila_role_04
ES: Adaptación de contenidos largos a formatos breves — Transformo intervenciones pensadas para streaming o televisión en piezas breves, sintetizando sin reducir el argumento a una frase aislada ni perder matices relevantes.

EN: Adapting long-form content to short formats — I turn appearances made for streaming or television into short-form pieces, condensing without reducing the argument to an isolated line or losing relevant nuance.

DE: Anpassung von Langformaten an Kurzformate — Ich verwandle Auftritte aus Streaming oder Fernsehen in Kurzformate und verdichte sie, ohne das Argument auf einen isolierten Satz zu reduzieren oder relevante Nuancen zu verlieren.

### camila_role_05
ES: Desarrollo de piezas para redes — Pienso cada pieza desde el entorno en el que va a circular —inicio, duración, encuadre, ritmo, subtítulos—, construida desde el lenguaje de la plataforma y no como un simple recorte vertical.

EN: Developing social media content — I think through each piece from the environment where it will circulate — opening, duration, framing, pacing, subtitles — built around the platform's language rather than a simple vertical crop.

DE: Entwicklung von Inhalten für soziale Medien — Ich denke jedes Stück von der Umgebung aus, in der es zirkulieren wird — Einstieg, Länge, Bildausschnitt, Tempo, Untertitel —, gestaltet nach der Sprache der Plattform und nicht als einfacher vertikaler Zuschnitt.

### camila_role_06
ES: Tratamiento de contenidos históricos y políticos — Los temas históricos y políticos requieren cuidado especial con el contexto y los argumentos: busco una edición atractiva y accesible que no sensacionalice ni simplifique lo que necesita conservar complejidad.

EN: Handling historical and political content — Historical and political topics require particular care with context and argument: I aim for editing that's engaging and accessible without sensationalizing or oversimplifying what needs to keep its complexity.

DE: Umgang mit historischen und politischen Inhalten — Historische und politische Themen verlangen besondere Sorgfalt im Umgang mit Kontext und Argumentation: Ich strebe einen Schnitt an, der zugänglich und ansprechend ist, ohne zu sensationalisieren oder zu vereinfachen, was Komplexität braucht.

## Navegación entre casos / footer

(`global_back_all_work`, `global_back_to_projects`, `global_siguiente_proyecto` — ver sección de Andrés.)

---

# ABUELAS DE PLAZA DE MAYO

## Header / navegación

Idéntico al resto de las páginas — no se repite acá.

## Hero

### abuelas_hero_category
ES:
03 / Derechos humanos y comunicación institucional

EN:
03 / Human rights and institutional communication

DE:
03 / Menschenrechte und institutionelle Kommunikation

### abuelas_hero_title
ES / EN / DE:
Abuelas de Plaza de Mayo (nombre propio, no se traduce; ver criterio de la aclaración "(Großmütter der Plaza de Mayo)" al inicio de este documento)

### abuelas_hero_lead
ES:
Creación y desarrollo de una nueva presencia institucional en TikTok a partir de producción original y trabajo con material de archivo.

EN:
Creating and developing a new institutional presence on TikTok through original production and archival material.

DE:
Aufbau und Entwicklung einer neuen institutionellen Präsenz auf TikTok, mit Eigenproduktion und Arbeit mit Archivmaterial.

### abuelas_hero_roles
ES:
Prensa y difusión · Estrategia de contenidos · Producción · Grabación · Edición · Archivo · Gestión de TikTok

EN:
Press and outreach · Content strategy · Production · Filming · Editing · Archive · TikTok management

DE:
Presse und Öffentlichkeitsarbeit · Content-Strategie · Produktion · Dreh · Schnitt · Archiv · TikTok-Betreuung

### abuelas_hero_stat_caption

Idéntico a `home_project_abuelas_stat_caption` — ver HOME.

## El proyecto / Das Projekt

(Label de sección: ver `global_section_label_el_proyecto`.)

### abuelas_intro_01
ES:
Trabajé con Abuelas de Plaza de Mayo dentro del área de Prensa y Difusión, participando en el desarrollo de contenidos para sus plataformas digitales.

EN:
I worked with Abuelas de Plaza de Mayo as part of the Press and Outreach team, contributing to the development of content for its digital platforms.

DE:
Ich habe bei Abuelas de Plaza de Mayo (Großmütter der Plaza de Mayo) im Bereich Presse und Öffentlichkeitsarbeit mitgewirkt und an der Entwicklung von Inhalten für ihre digitalen Plattformen mitgearbeitet.

Nota DE: primera aparición de "Abuelas de Plaza de Mayo" en el CUERPO del texto de esta página (el h1 del hero no lleva la aclaración, para no alterar la estructura visual del componente) — lleva la aclaración entre paréntesis. No se repite en las apariciones siguientes de la misma página.

### abuelas_intro_02
ES:
Durante ese período inicié y administré su cuenta de TikTok desde cero. El trabajo implicó pensar cómo trasladar la identidad, la historia y el trabajo de una institución con décadas de trayectoria a los lenguajes y formatos propios de una plataforma nueva, sin perder el contexto ni la responsabilidad que requieren sus contenidos.

EN:
During that period, I launched and managed its TikTok account from scratch. The work involved thinking through how to bring the identity, history, and work of an institution with decades of experience into the language and formats of a new platform, without losing the context or responsibility its content requires.

DE:
In dieser Zeit habe ich den TikTok-Kanal von Grund auf aufgebaut und betreut. Die Arbeit bestand darin, die Identität, Geschichte und Arbeit einer Institution mit jahrzehntelanger Erfahrung in die Sprache und Formate einer neuen Plattform zu übertragen, ohne den Kontext oder die Verantwortung zu verlieren, die ihre Inhalte verlangen.

## Una cuenta nueva / Ein neuer Kanal

### abuelas_new_account_label
ES:
Una cuenta nueva

EN:
A new account

DE:
Ein neuer Kanal

### abuelas_new_account_description
ES:
Uno de los principales desafíos fue iniciar la presencia de Abuelas de Plaza de Mayo en TikTok desde cero. Esto implicó experimentar con formatos, ritmos y formas narrativas propias de la plataforma, buscando ampliar la circulación de sus contenidos sin separar las piezas de su contexto histórico e institucional.

EN:
One of the main challenges was establishing Abuelas de Plaza de Mayo on TikTok from scratch. This involved experimenting with formats, pacing, and platform-native narrative approaches, seeking to expand the circulation of its content without separating each piece from its historical and institutional context.

DE:
Eine der größten Herausforderungen war es, die Präsenz von Abuelas de Plaza de Mayo auf TikTok von Grund auf aufzubauen. Das bedeutete, mit Formaten, Rhythmen und Erzählweisen der Plattform zu experimentieren, um die Reichweite der Inhalte zu erweitern, ohne die einzelnen Beiträge von ihrem historischen und institutionellen Kontext zu trennen.

### abuelas_new_account_stat_caption
ES:
TikTok durante aproximadamente el primer año de la cuenta.

EN:
TikTok during approximately the account's first year.

DE:
TikTok während etwa des ersten Jahres des Kanals.

### alt_screenshot_cuenta
ES:
Captura de pantalla del perfil de TikTok de Abuelas de Plaza de Mayo (@abuelasdifusion), con el logo de la cuenta, la bio y una grilla de videos publicados.

EN:
Screenshot of the Abuelas de Plaza de Mayo TikTok profile (@abuelasdifusion), showing the account logo, bio, and a grid of published videos.

DE:
Screenshot des TikTok-Profils von Abuelas de Plaza de Mayo (@abuelasdifusion) mit Logo, Biografie und einer Übersicht veröffentlichter Videos.

### alt_logo_isotipo
ES:
Isotipo de la cuenta de Abuelas de Plaza de Mayo: una figura infantil dibujada a mano rodeada por el texto Identidad · Familia · Libertad.

EN:
Logo mark from the Abuelas de Plaza de Mayo account: a hand-drawn child figure surrounded by the words Identidad · Familia · Libertad.

DE:
Bildmarke des Kanals von Abuelas de Plaza de Mayo: eine handgezeichnete Kinderfigur, umgeben von den Wörtern Identidad · Familia · Libertad.

Nota: "Identidad · Familia · Libertad" es el lema dibujado tal cual dentro de la imagen (parte del gráfico, no texto HTML aparte) — se transcribe igual en las 3 versiones porque describe contenido real de la imagen.

## Trabajo seleccionado / Ausgewählte Arbeiten

(Label de sección: ver `global_section_label_trabajo_seleccionado`.)

### abuelas_selected_intro
ES:
Seis piezas de TikTok seleccionadas de la cuenta de Abuelas de Plaza de Mayo.

EN:
Six selected TikTok videos from the Abuelas de Plaza de Mayo account.

DE:
Sechs ausgewählte TikTok-Videos vom Kanal von Abuelas de Plaza de Mayo.

### abuelas_video_01–06_title
ES / EN / DE:
Estela y su nieto · El nombre de Guillermo · Paula Logares y sus apropiadores · La historia del clavito · La historia de Leonardo · Estela y el reencuentro

Nota: los 6 títulos se mantienen en español en las 3 versiones (nombres reales de las piezas, mismo criterio que los títulos de Andrés).

## Derechos humanos, ciencia e identidad / Menschenrechte, Wissenschaft und Identität

### abuelas_human_rights_label
ES:
Derechos humanos, ciencia e identidad

EN:
Human rights, science, and identity

DE:
Menschenrechte, Wissenschaft und Identität

### abuelas_human_rights_text_01
ES:
El trabajo de Abuelas de Plaza de Mayo también muestra hasta qué punto los derechos humanos, la ciencia y las políticas públicas pueden estar profundamente relacionados.

EN:
The work of Abuelas de Plaza de Mayo also shows how deeply human rights, science, and public policy can be connected.

DE:
Die Arbeit von Abuelas de Plaza de Mayo zeigt auch, wie eng Menschenrechte, Wissenschaft und öffentliche Politik miteinander verbunden sein können.

### abuelas_human_rights_text_02
ES:
La búsqueda de nietos y nietas apropiados durante la última dictadura impulsó la necesidad de desarrollar herramientas que permitieran establecer vínculos biológicos incluso en ausencia de los padres. En ese contexto surgió el llamado índice de abuelidad, asociado al desarrollo de métodos genéticos capaces de determinar relaciones de parentesco entre abuelos y nietos.

EN:
The search for grandchildren who had been appropriated during Argentina's last dictatorship created the need for tools that could establish biological relationships even when the parents were absent. In that context, the so-called grandparentage index emerged, linked to the development of genetic methods capable of determining kinship between grandparents and grandchildren.

DE:
Die Suche nach während der letzten argentinischen Diktatur zwangsadoptierten Enkelkindern machte die Entwicklung von Methoden notwendig, mit denen sich biologische Verwandtschaft auch ohne die Eltern feststellen ließ. In diesem Zusammenhang entstand der sogenannte Großelternschaftsindex, verbunden mit der Entwicklung genetischer Verfahren zur Bestimmung der Verwandtschaft zwischen Großeltern und Enkelkindern.

### abuelas_human_rights_text_03
ES:
Este cruce entre derechos humanos, ciencia e identidad es parte de lo que hace específico al trabajo de comunicación de Abuelas: la evidencia científica funciona ahí como una herramienta concreta para restituir identidades y garantizar derechos.

EN:
This intersection of human rights, science, and identity is part of what makes Abuelas' communication work distinct: scientific evidence functions there as a concrete tool for restoring identities and protecting rights.

DE:
Diese Verbindung von Menschenrechten, Wissenschaft und Identität macht einen wesentlichen Teil der Kommunikationsarbeit von Abuelas aus: Wissenschaftliche Evidenz dient hier als konkretes Werkzeug, um Identitäten wiederherzustellen und Rechte zu garantieren.

### alt_indice_jpeg
ES:
Fotografía histórica en blanco y negro: la genetista Mary C. King, en Estados Unidos, muestra un estudio de ADN a las Abuelas Nélida y Estela, rodeadas de material de laboratorio frente a una ventana con estanterías de fondo.

EN:
Historical black-and-white photograph: geneticist Mary C. King, in the United States, shows a DNA study to Abuelas Nélida and Estela, surrounded by laboratory materials in front of a window with shelves in the background.

DE:
Historische Schwarzweißfotografie: Die Genetikerin Mary C. King zeigt in den USA den Abuelas Nélida und Estela eine DNA-Studie, umgeben von Labormaterial vor einem Fenster mit Regalen im Hintergrund.

## Más material / Weiteres Material

### abuelas_more_material_label
ES:
Más material

EN:
More material

DE:
Weiteres Material

### abuelas_more_material_title
ES:
Archivo, gráfica y memoria

EN:
Archives, graphic materials, and memory

DE:
Archiv, Grafik und Erinnerung

### abuelas_more_material_text
ES:
Además de la producción audiovisual, parte del trabajo estuvo vinculada al uso y adaptación de materiales de archivo. Esta selección reúne algunas piezas gráficas e imágenes relacionadas con la historia y la comunicación de Abuelas de Plaza de Mayo, y muestra otra dimensión de los materiales con los que trabajé durante el proyecto.

EN:
Beyond video production, part of the work involved using and adapting archival material. This selection brings together graphic pieces and images connected to the history and communication of Abuelas de Plaza de Mayo, showing another dimension of the materials I worked with throughout the project.

DE:
Neben der Videoproduktion bestand ein Teil der Arbeit darin, Archivmaterial zu nutzen und anzupassen. Diese Auswahl vereint grafische Arbeiten und Bilder rund um die Geschichte und Kommunikation von Abuelas de Plaza de Mayo und zeigt eine weitere Dimension der Materialien, mit denen ich während des Projekts gearbeitet habe.

### alt de las 7 piezas del carrusel de archivo (resumen)

Traducidas naturalmente al alemán conservando entre comillas el texto real en español que aparece impreso en cada pieza (afiches, pintadas, títulos de exposición), con una glosa breve en alemán entre paréntesis inmediatamente después de cada cita — mismo criterio que en Andrés. Ver el HTML de `de/proyectos/abuelas/index.html` para el texto completo de cada uno de los 7 `alt`.

## Mi rol / Meine Rolle

(Label de sección: ver `global_section_label_mi_rol`.)

### abuelas_role_01
ES: Prensa y difusión — Formé parte del área de Prensa y Difusión, produciendo contenidos que trasladan el trabajo, la historia y las actividades de la institución a sus plataformas digitales, dentro de una comunicación institucional con identidad y responsabilidad pública definidas.

EN: Press and outreach — I was part of the Press and Outreach team, producing content that brought the institution's work, history, and activities to its digital platforms, within an institutional communications framework with a clearly defined identity and public responsibility.

DE: Presse und Öffentlichkeitsarbeit — Ich war Teil des Presse- und Öffentlichkeitsteams und produzierte Inhalte, die die Arbeit, Geschichte und Aktivitäten der Institution auf ihre digitalen Plattformen brachten, im Rahmen einer institutionellen Kommunikation mit klar definierter Identität und öffentlicher Verantwortung.

### abuelas_role_02
ES: Estrategia y desarrollo de contenidos — Desarrollo de formatos capaces de comunicar el trabajo de Abuelas en redes sociales, contemplando el lenguaje de cada plataforma sin separar los contenidos de su contexto histórico e institucional.

EN: Content strategy and development — Developing formats capable of communicating Abuelas' work on social media, accounting for the language of each platform without separating content from the historical and institutional context that gives it meaning.

DE: Content-Strategie und -Entwicklung — Entwicklung von Formaten, die die Arbeit von Abuelas in sozialen Medien vermitteln, unter Berücksichtigung der Sprache jeder Plattform, ohne die Inhalte von ihrem historischen und institutionellen Kontext zu trennen.

### abuelas_role_03
ES: Creación y administración de TikTok — Inicié y administré el canal de TikTok de Abuelas desde cero, experimentando con formatos y criterios de publicación propios de la plataforma para construir una presencia institucional donde antes no existía.

EN: TikTok launch and management — I launched and managed Abuelas' TikTok channel from scratch, experimenting with platform-native formats and publishing criteria to build an institutional presence where none had existed before.

DE: Aufbau und Betreuung von TikTok — Ich habe den TikTok-Kanal von Abuelas von Grund auf aufgebaut und betreut, mit Formaten und Veröffentlichungskriterien der Plattform experimentiert und so eine institutionelle Präsenz geschaffen, wo zuvor keine bestand.

### abuelas_role_04
ES: Producción audiovisual — Desarrollo de piezas audiovisuales para los canales digitales de la institución, combinando planificación, registro y edición, cuidando la claridad y coherencia con la comunicación de Abuelas.

EN: Video production — Developing audiovisual pieces for the institution's digital channels, combining planning, filming, and editing, with attention to clarity and consistency with Abuelas' communications.

DE: Videoproduktion — Entwicklung audiovisueller Beiträge für die digitalen Kanäle der Institution, mit Planung, Dreh und Schnitt, unter besonderer Sorgfalt für Klarheit und Konsistenz mit der Kommunikation von Abuelas.

### abuelas_role_05
ES: Grabación — Registro de contenidos originales, tomando decisiones de encuadre y duración pensadas desde su publicación posterior, para que el formato no dependiera únicamente de la edición.

EN: Filming — Recording original content, making decisions about framing and duration based on how each piece would later be published, so the format didn't depend solely on editing.

DE: Dreh — Aufnahme von Originalinhalten, mit Entscheidungen zu Bildausschnitt und Länge im Hinblick auf die spätere Veröffentlichung, damit das Format nicht allein vom Schnitt abhing.

### abuelas_role_06
ES: Edición — Edición de ritmo, estructura, subtítulos, imagen y sonido, con especial cuidado en el tratamiento de materiales vinculados a la memoria y los derechos humanos.

EN: Editing — Editing pacing, structure, subtitles, visuals, and sound, with particular care in handling material related to memory and human rights.

DE: Schnitt — Schnitt von Tempo, Struktur, Untertiteln, Bild und Ton, mit besonderer Sorgfalt im Umgang mit Material zu Erinnerung und Menschenrechten.

### abuelas_role_07
ES: Trabajo con material de archivo — Recuperación y adaptación de imágenes y registros audiovisuales históricos a nuevas piezas digitales, preservando su contexto, valor documental y relación con la historia narrada.

EN: Working with archival material — Recovering and adapting historical images and audiovisual records into new digital pieces, preserving their context, documentary value, and connection to the story being told.

DE: Arbeit mit Archivmaterial — Aufbereitung und Anpassung historischer Bilder und audiovisueller Aufnahmen zu neuen digitalen Beiträgen, unter Bewahrung von Kontext, dokumentarischem Wert und Bezug zur erzählten Geschichte.

### abuelas_role_08
ES: Adaptación de contenidos para plataformas digitales — Adaptación de contenidos institucionales a los formatos y lenguajes de cada plataforma digital, manteniendo la identidad y el sentido del contenido original en cada entorno.

EN: Adapting content for digital platforms — Adapting institutional content to the formats and language of each digital platform, preserving the identity and meaning of the original content across environments.

DE: Anpassung von Inhalten für digitale Plattformen — Anpassung institutioneller Inhalte an Formate und Sprache jeder digitalen Plattform, unter Bewahrung von Identität und Sinn der ursprünglichen Inhalte in jedem Umfeld.

## Navegación entre casos / footer

### abuelas_first_project_nav
ES:
Volver al primer proyecto

EN:
Back to the first project

DE:
Zurück zum ersten Projekt

(`global_back_all_work`, `global_back_to_projects` — ver sección de Andrés.)

---

# ARTÍCULOS

## Página individual — Autocensura und Neusprache

### global_articulos_label
ES:
Artículos

EN:
Articles

DE:
Artikel

### global_volver_a_articulos
ES:
← Volver a Artículos

EN:
← Back to Articles

DE:
← Zurück zu Artikeln

(Título y bajada: ver `article_01_title` y `article_01_excerpt` en HOME — idénticos acá en las 3 versiones.)

## Nota sobre el cuerpo del artículo

El `<article class="article-body">` está vacío en las 3 versiones (ES, EN y DE) — solo un comentario HTML, sin texto real todavía. No se inventó ningún contenido para la versión alemana, siguiendo la misma regla que ES/EN.

---

# METADATOS Y ACCESIBILIDAD

## Títulos de pestaña (`<title>`)

### meta_title_home
ES:
Germán Gómez Bonelli — Estrategia y producción de contenidos

EN:
Germán Gómez Bonelli — Content strategy and production

DE:
Germán Gómez Bonelli — Content-Strategie und -Produktion

### meta_title_ueber_mich
DE:
Über mich — Germán Gómez Bonelli

(Sigue el mismo patrón que la página Sobre mí/About, agregada al sitio después de `textos-es-en.md`.)

### meta_title_andres / camila / abuelas
ES / EN / DE:
Andrés Rieznik — Germán Gómez Bonelli / Camila Perochena — Germán Gómez Bonelli / Abuelas de Plaza de Mayo — Germán Gómez Bonelli

(Idénticos en las 3 versiones — son nombres propios.)

### meta_title_articulo_01
ES:
Autocensura y nueva-lengua: el mecanismo del que nadie habla — Germán Gómez Bonelli

EN:
Self-censorship and Newspeak: the mechanism no one talks about — Germán Gómez Bonelli

DE:
Selbstzensur und Neusprache: der Mechanismus, über den niemand spricht — Germán Gómez Bonelli

## Meta descriptions

### meta_description_home
ES:
Estrategia y producción de contenidos para la comunicación científica y política.

EN:
Content strategy and production for science and political communication.

DE:
Kommunikationsstrategie und Content-Produktion für Wissenschaft und Politik.

### meta_description_andres
ES:
Neurociencia — estrategia, producción y desarrollo de formatos.

EN:
Neuroscience — strategy, production, and format development.

DE:
Neurowissenschaften — Strategie, Produktion und Formatentwicklung.

### meta_description_camila
ES:
Historia y comunicación política — edición y adaptación de contenidos para plataformas digitales.

EN:
History and political communication — editing and adapting content for digital platforms.

DE:
Geschichte und politische Kommunikation — Schnitt und Anpassung von Inhalten für digitale Plattformen.

### meta_description_abuelas
ES:
Derechos humanos y comunicación institucional — creación y desarrollo de la cuenta de TikTok.

EN:
Human rights and institutional communication — launching and developing a TikTok account.

DE:
Menschenrechte und institutionelle Kommunikation — Aufbau und Entwicklung des TikTok-Kanals.

### meta_description_articulo_01

Idéntico a `article_01_excerpt` — ver HOME.

## aria-label — comunes a las 6 páginas

### aria_abrir_menu
ES:
Abrir menú

EN:
Open menu

DE:
Menü öffnen

### aria_navegacion_principal
ES:
Navegación principal

EN:
Main navigation

DE:
Hauptnavigation

### aria_selector_idioma
ES:
Selector de idioma

EN:
Language selector

DE:
Sprachauswahl

### aria_navegacion_entre_casos
ES:
Navegación entre casos

EN:
Case study navigation

DE:
Navigation zwischen Projekten

(Solo en Andrés, Camila, Abuelas.)

## aria-label específicos — Andrés Rieznik (DE)

Todos traducidos siguiendo el mismo patrón que EN, con "Grafik"/"Bild"/"Folge" en lugar de "graphic"/"image"/"episode":

- Kurzdokumentation zur Alphabetisierung auf YouTube ansehen
- Folge 1/2/3/4 von Re-Renacimiento auf YouTube ansehen
- Launch-Grafiken der Kurzdokumentation in Arrecifes
- Grafik 1–5 in voller Größe ansehen
- 1 von 5 … 5 von 5
- Vorherige Grafik / Nächste Grafik
- Bild schließen / Vorheriges Bild / Nächstes Bild

## aria-label específicos — Abuelas de Plaza de Mayo (DE)

- [Título del video] auf TikTok ansehen (6 aria-label, uno por video de "Ausgewählte Arbeiten", siguiendo el título real de cada pieza, sin traducir los títulos)
- Archivstück 1–7 in voller Größe ansehen
- 1 von 7 … 7 von 7
- Vorheriges Stück / Nächstes Stück

## alt text

Todos los `alt` de las 3 versiones están documentados en línea, dentro de cada sección de proyecto de este mismo documento (Andrés, Camila, Abuelas) — no se repiten acá para evitar duplicar contenido largo. Criterio general para DE: traducción descriptiva y natural, nunca mecánica; nunca se agregó información visual que no estuviera ya en el alt original ES/EN.

---

# NOTAS ESPECÍFICAS DE LA VERSIÓN ALEMANA

## Vocabulario usado de forma consistente

comunicación científica → Wissenschaftskommunikation · neurociencia → Neurowissenschaft(en) · comunicación política → politische Kommunikation · producción audiovisual → audiovisuelle Produktion / Videoproduktion (según contexto) · edición (de video) → Schnitt · desarrollo de formatos → Formatentwicklung · plataformas digitales → digitale Plattformen · redes sociales → soziale Medien · material de archivo → Archivmaterial · derechos humanos → Menschenrechte · divulgación/divulgador → Wissenschaftskommunikation / Vermittlung, Kommunikator(in) (según contexto — no hay un único equivalente natural).

## Decisiones de traducción no literales

- El título del Hero, la bajada, el texto secundario y el título de Sobre mí/Über mich fueron dados literalmente por el usuario (no son traducción libre de este documento) — se marcaron como tales en cada entrada.
- "Comunicación política" en el eyebrow de caso de Camila se tradujo como "politische Kommunikation" (no "Politikkommunikation", que en alemán tiene una connotación más de marketing político/campañas).
- "Divulgadora" (Camila) se tradujo como "Kommunikatorin", no "Wissenschaftskommunikatorin" — Camila trabaja con historia y política, no con ciencia, así que el término específico de "comunicación científica" no aplicaba acá pese a la similitud de raíz.
- "Índice de abuelidad" (Abuelas) se tradujo como "Großelternschaftsindex" — no existe un término establecido en alemán para este concepto específicamente argentino; se optó por un compuesto transparente antes que una perífrasis larga.
- Los títulos reales de piezas (reels, videos de YouTube, TikToks) y el nombre "Re-Renacimiento" se mantuvieron en español en las 3 versiones, mismo criterio ya usado en EN.

## Ajustes de layout por longitud del texto alemán

- `assets/css/home.css`: la regla `text-wrap: balance` que ya existía solo para `html[lang="en"] .hero__title` (evitar que el título del hero corte mal entre renglones) se extendió a `html[lang="de"] .hero__title` — el título en alemán es el más largo de los tres y usa compuestos largos ("Kommunikationsstrategie", "Content-Produktion").
- El título de Über mich reutiliza el mismo patrón de `<span class="no-break">` ya usado en ES/EN alrededor de las palabras destacadas, para que ninguna quede separada de la coma o el punto siguiente al hacer salto de línea.
- No se agregó ningún `<br>` manual ni se redujo el tamaño de fuente en ningún componente — se confió en el `max-width` y el reflow ya existentes en `proyecto.css` / `profile.css` / `contact.css`, que ya estaban pensados para textos de largo variable (ES vs. EN ya diferían en longitud antes de agregar alemán).
- El resto de los componentes (roles del hero de caso, accordions de "Mi rol"/"Meine Rolle", grilla de contacto, menú mobile, selector de idioma) no necesitaron ningún CSS nuevo: ya usan `flex-wrap`, `max-width` en `ch` o grillas fluidas que absorben texto más largo sin romper el layout.

## Textos que costó más trasladar de forma natural

- El excerpt del artículo ("des-vivirse" / "unaliving") requirió inventar un neologismo equivalente en alemán ("Entleben") en vez de traducir literalmente, para conservar el efecto retórico del original (una palabra que suena construida a propósito para evitar decir "morir"/"matar").
- "Índice de abuelidad" (ver arriba) no tiene equivalente establecido en alemán.
- Los eyebrows con "/" y numeración ("03 / Derechos humanos y comunicación institucional") se mantuvieron con la misma puntuación en alemán; no hubo forma de acortarlos manteniendo el mismo nivel de precisión sin perder información ya presente en ES/EN.

---

# CONFIRMACIÓN — GIT / GITHUB

Todo el trabajo de este documento y de las 6 páginas en alemán se hizo exclusivamente en el entorno local (staging vía `device_stage_files` / `device_commit_files`, sin `git status`, `git add`, `git commit` ni `git push` en ningún momento).
