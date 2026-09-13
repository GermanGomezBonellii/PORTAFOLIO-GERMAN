/* ==========================================================================
   MAIN.JS — comportamiento mínimo: menú mobile + aparición suave
   ========================================================================== */

(function () {
  'use strict';

  /* -- Menú mobile ------------------------------------------------------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var body = document.body;

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Cierra el menú al navegar a un anchor */
    document.querySelectorAll('.site-header__nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -- Aparición suave (fade-in) al entrar en viewport -------------------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* -- Typewriter: escritura progresiva para textos marcados con
     [data-typewriter] (por ahora, solo la parte celeste del titulo de
     "Trabajo seleccionado" en la home). El HTML ya trae el texto completo
     puesto de forma normal (funciona sin JS, accesible, no perjudica
     SEO). Con JS activo, recien cuando el elemento entra REALMENTE en el
     viewport (IntersectionObserver) se le agrega al lado un duplicado
     .visually-hidden con el texto completo para lectores de pantalla --
     asi la frase se lee una sola vez, nunca caracter por caracter -- se
     marca el elemento visible como aria-hidden, y se anima. La altura del
     heading que lo contiene se fija (min-height) mientras dura la
     animacion para que las secciones de mas abajo no salten al haber
     momentaneamente menos texto (y por lo tanto menos lineas) que en la
     version final. Con prefers-reduced-motion activo directamente no se
     inicia nada: queda el texto completo estatico de siempre. */
  var typewriterEls = document.querySelectorAll('[data-typewriter]');
  var prefersReducedMotionForTypewriter =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runTypewriter(el) {
    var fullText = el.textContent;
    var speed = parseInt(el.getAttribute('data-speed'), 10) || 40;

    var srCopy = document.createElement('span');
    srCopy.className = 'visually-hidden';
    srCopy.textContent = fullText;
    el.insertAdjacentElement('beforebegin', srCopy);
    el.setAttribute('aria-hidden', 'true');

    /* Se mide con el texto completo todavia puesto, antes de vaciarlo. */
    var heightLockEl = el.closest('h1, h2, h3, h4, p') || el.parentElement;
    heightLockEl.style.minHeight = heightLockEl.getBoundingClientRect().height + 'px';

    el.textContent = '';
    el.classList.add('typewriter--typing');

    var i = 0;

    function typeNext() {
      i += 1;
      el.textContent = fullText.slice(0, i);

      if (i < fullText.length) {
        /* Pausa breve y sutil despues de comas/puntos y de cada palabra
           (espacio), para que la escritura tenga un ritmo natural en vez
           de un tic-tac perfectamente uniforme -- sin salirse del rango
           de ~2 segundos totales pedido. */
        var lastChar = fullText.charAt(i - 1);
        var extraPause = 0;
        if (lastChar === ',' || lastChar === '.') {
          extraPause = 110;
        } else if (lastChar === ' ') {
          extraPause = 40;
        }
        window.setTimeout(typeNext, speed + extraPause);
      } else {
        window.setTimeout(function () {
          el.classList.remove('typewriter--typing');
          heightLockEl.style.minHeight = '';
        }, 500);
      }
    }

    window.setTimeout(typeNext, speed);
  }

  if (
    'IntersectionObserver' in window &&
    typewriterEls.length &&
    !prefersReducedMotionForTypewriter
  ) {
    var typewriterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runTypewriter(entry.target);
            typewriterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    typewriterEls.forEach(function (el) {
      typewriterObserver.observe(el);
    });
  }
  /* Sin IntersectionObserver disponible, o con prefers-reduced-motion
     activo: no hacemos nada y queda el texto completo estatico que ya
     trae el HTML. */

  /* -- Contador animado para las métricas de crecimiento de la home -----
     .count-up ya trae el valor final escrito en el HTML (fallback sin JS,
     accesible, no perjudica SEO). Con JS activo, recién cuando el bloque
     entra REALMENTE en el viewport (IntersectionObserver, no al cargar la
     página) se reemplaza temporalmente por una cuenta animada desde
     data-start hasta data-end con easeOutCubic; al llegar exactamente a
     data-end se vuelve a fijar el texto final completo (numero + sufijo,
     "+" incluido) y se agrega .is-counted, que dispara el cambio a
     celeste vía CSS (transition: color, ver home.css). Cada contador se
     observa y anima una sola vez. */
  var countEls = document.querySelectorAll('.count-up');
  var prefersReducedMotionForCounters =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCountUp(el) {
    var start = parseInt(el.getAttribute('data-start'), 10);
    var end = parseInt(el.getAttribute('data-end'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    /* El "+" (caso Andrés) solo debe aparecer al terminar, no en cada
       valor intermedio mientras todavía está contando. */
    var suffixWhileCounting = suffix.replace(/\+$/, '');
    var duration = 2000;

    if (prefersReducedMotionForCounters) {
      el.textContent = end + suffix;
      el.classList.add('is-counted');
      return;
    }

    var startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.round(start + (end - start) * easeOutCubic(progress));

      if (progress < 1) {
        el.textContent = current + suffixWhileCounting;
        window.requestAnimationFrame(step);
      } else {
        el.textContent = end + suffix; /* valor exacto + sufijo completo, "+" incluido */
        el.classList.add('is-counted');
      }
    }

    window.requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && countEls.length) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCountUp(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    countEls.forEach(function (el) {
      countObserver.observe(el);
    });
  }
  /* Sin IntersectionObserver disponible: no hacemos nada y queda el
     valor final estático que ya trae el HTML. */

  /* -- Hero sticky / scrollytelling: aparición de los textos según el
     progreso de scroll dentro de .hero-scroll -----------------------------
     .hero__lead y .hero__secondary usan .reveal-on-scroll (ver
     assets/css/components.css) para la transición visual (opacity +
     translateY, sin cambios). Lo que cambió es CÓMO se decide cuándo
     agregar '.is-visible': ahora que .hero queda sticky mientras se
     recorre .hero-scroll, ambos textos permanecen dentro del viewport todo
     ese tiempo, así que un IntersectionObserver ya no sirve para
     escalonarlos (nunca dejarían de "intersectar"). En su lugar medimos
     qué porcentaje de ese recorrido ya se scrolleó y revelamos cada texto
     al cruzar su propio umbral. Se activan una sola vez -- no se vuelven a
     ocultar si el usuario scrollea hacia arriba.

     Sin preventDefault, sin bloqueo de scroll, sin librerías externas:
     solo lectura pasiva de la posición de scroll (addEventListener con
     { passive: true }) + requestAnimationFrame para no recalcular en cada
     evento. El scroll del navegador sigue siendo 100% nativo.
     ------------------------------------------------------------------------ */
  var heroScroll = document.querySelector('.hero-scroll');
  var heroLead = document.querySelector('.hero__lead');
  var heroSecondary = document.querySelector('.hero__secondary');
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroScroll && heroLead && heroSecondary) {
    if (prefersReducedMotion) {
      /* La regla @media (prefers-reduced-motion: reduce) en CSS ya deja
         opacity:1 sin transición; acá solo nos aseguramos de que la clase
         esté presente para cualquier otro estilo que dependa de ella. */
      heroLead.classList.add('is-visible');
      heroSecondary.classList.add('is-visible');
    } else {
      var LEAD_THRESHOLD = 0.22; /* ~20-25% del recorrido: aparece la bajada */
      var SECONDARY_THRESHOLD = 0.5; /* ~50% del recorrido: aparece el texto secundario */
      var ticking = false;
      var done = false;

      var updateHeroReveal = function () {
        ticking = false;

        var total = heroScroll.offsetHeight - window.innerHeight;
        var progress = total > 0 ? -heroScroll.getBoundingClientRect().top / total : 1;
        progress = Math.max(0, Math.min(1, progress));

        if (progress >= LEAD_THRESHOLD) {
          heroLead.classList.add('is-visible');
        }
        if (progress >= SECONDARY_THRESHOLD) {
          heroSecondary.classList.add('is-visible');
          done = true;
          window.removeEventListener('scroll', onHeroScroll);
        }
      };

      var onHeroScroll = function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateHeroReveal);
        }
      };

      window.addEventListener('scroll', onHeroScroll, { passive: true });
      updateHeroReveal(); /* estado inicial, por si la página carga con scroll restaurado */
    }
  }

  /* -- Métricas animadas (hero de Andrés Rieznik: Instagram / TikTok /
     YouTube) -----------------------------------------------------------
     [data-metric-animate] ya trae el HTML final completo en cada una
     (numero inicial / flecha / numero final, mas un .visually-hidden con
     el texto plano para lectores de pantalla -- ver
     proyectos/andres-rieznik/index.html). La secuencia interna de cada
     metrica (aparece el numero inicial, se dibuja la flecha, aparece el
     numero final) es CSS puro por transition-delay (ver .metric-sequence
     en proyecto.css) y dura ~1.5s de punta a punta.

     Acá se encadenan las tres UNA DESPUES DE LA OTRA (Instagram, después
     TikTok, después YouTube) en vez de que las tres animen en simultaneo
     al entrar juntas en viewport: se observan las tres, pero apenas la
     PRIMERA que cruza el umbral dispara runMetricSequence() una única vez
     (metricStarted evita que una segunda intersección -- por ej. si
     TikTok cruza el umbral una fracción despues que Instagram -- dispare
     la secuencia de nuevo); ahí se agrega .is-metric-animated a cada
     elemento con un setTimeout escalonado según su posición en el HTML
     (METRIC_SEQUENCE_GAP entre el inicio de una y la siguiente, tiempo
     suficiente para que la metrica anterior ya haya terminado del todo
     antes de que arranque la próxima). Una sola vez por carga de página
     (se desobservan las tres apenas arranca la secuencia), nunca se
     repite al scrollear hacia arriba y abajo. Con prefers-reduced-motion
     directamente no se observa nada -- la regla @media en CSS ya deja
     las tres secuencias completas sin transición. */
  var metricEls = document.querySelectorAll('[data-metric-animate]');
  var prefersReducedMotionForMetric =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var METRIC_SEQUENCE_GAP = 1600; /* ms entre el arranque de una métrica y la siguiente -- la secuencia individual de cada una dura ~1.5s, así que la próxima arranca recién cuando la anterior ya terminó */

  function runMetricSequence(els) {
    els.forEach(function (el, index) {
      window.setTimeout(function () {
        el.classList.add('is-metric-animated');
      }, index * METRIC_SEQUENCE_GAP);
    });
  }

  if (
    'IntersectionObserver' in window &&
    metricEls.length &&
    !prefersReducedMotionForMetric
  ) {
    var metricStarted = false;
    var metricElsArray = Array.prototype.slice.call(metricEls);

    var metricObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !metricStarted) {
            metricStarted = true;
            runMetricSequence(metricElsArray);
            metricElsArray.forEach(function (el) {
              metricObserver.unobserve(el);
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    metricElsArray.forEach(function (el) {
      metricObserver.observe(el);
    });
  } else if (!prefersReducedMotionForMetric) {
    /* Sin IntersectionObserver disponible: se muestran directo, sin
       animación escalonada, en vez de quedar invisibles para siempre. */
    metricEls.forEach(function (el) {
      el.classList.add('is-metric-animated');
    });
  }
  /* Con prefers-reduced-motion activo no hacemos nada: la regla @media
     (prefers-reduced-motion: reduce) en CSS ya deja la secuencia
     completa sin transición, sin necesidad de la clase. */
})();

/* -- Thumbnails de YouTube en "Videos para redes" (Andrés Rieznik): estas
   tarjetas no guardan la URL completa de la miniatura, solo el videoId
   (atributo data-youtube-id) -- getYouTubeThumbnail() arma la URL en
   runtime, así no hay que repetirla a mano por cada video nuevo. Primer
   intento con maxresdefault (mejor calidad, no siempre disponible);
   si falla, se reemplaza por hqdefault (casi siempre disponible) y se
   reemplaza el handler de error por uno distinto para no volver a
   intentar maxresdefault -- sin loop. Si incluso hqdefault fallara, ese
   segundo handler oculta la imagen para que quede visible el placeholder
   de .media (data-label) en vez del ícono de imagen rota del navegador,
   igual que en el resto del sitio. No toca las miniaturas de YouTube ya
   hardcodeadas en "Recortes en Youtube" ni en "Producción original" --
   siguen con su propio onerror inline, sin cambios. */
(function () {
  function getYouTubeThumbnail(videoId, quality) {
    return 'https://img.youtube.com/vi/' + videoId + '/' + (quality || 'maxresdefault') + '.jpg';
  }

  document.querySelectorAll('img[data-youtube-id]').forEach(function (img) {
    var videoId = img.getAttribute('data-youtube-id');
    if (!videoId) return;

    img.onerror = function () {
      this.onerror = function () {
        this.onerror = null;
        this.style.display = 'none';
      };
      this.src = getYouTubeThumbnail(videoId, 'hqdefault');
    };
    img.src = getYouTubeThumbnail(videoId, 'maxresdefault');
  });
})();

/* -- Carrusel de piezas gráficas (galería editorial genérica, primer uso
   en "Mini documental en Arrecifes" de Andrés Rieznik): scroll-snap
   nativo resuelve swipe táctil y scroll de mouse/trackpad sin JS; este
   bloque solo agrega flechas, contador, arrastre con mouse en desktop y
   la clase "activa" de cada slide (protagonismo visual vs. el peek de
   la siguiente, ver .graphic-carousel__media en proyecto.css). Sin
   autoplay -- el usuario decide cuándo avanzar. Reutilizable tal cual
   para cualquier otro carrusel [data-carousel] que se agregue después,
   no quedó atado a esta página. */
(function () {
  var carousels = document.querySelectorAll('[data-carousel]');
  if (!carousels.length) return;

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  carousels.forEach(function (root) {
    var viewport = root.querySelector('[data-carousel-viewport]');
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-slide]'));
    var prevBtn = root.querySelector('[data-carousel-prev]');
    var nextBtn = root.querySelector('[data-carousel-next]');
    var currentEl = root.querySelector('[data-carousel-current]');
    var totalEl = root.querySelector('[data-carousel-total]');
    if (!viewport || !slides.length) return;

    var activeIndex = 0;

    if (totalEl) totalEl.textContent = pad(slides.length);

    /* activeIndex es la única fuente de verdad de "cuál slide está
       activa", y solo cambia en dos momentos controlados: un click en
       flecha/teclado (goToIndex, síncrono) o cuando un scroll nativo
       (swipe, trackpad, soltar un arrastre con mouse) se asienta
       (handleScrollSettled). Antes se resolvía con un IntersectionObserver
       que actualizaba el índice de forma asíncrona según qué tanto
       porcentaje de cada slide era visible -- si se hacía otro click
       antes de que el observer llegara a disparar, ese segundo click
       calculaba "siguiente" sobre un índice todavía viejo, y de ahí la
       sensación de que el carrusel "seguía de largo" o se salteaba
       posiciones. Acá cada click actualiza activeIndex y la UI (clase
       is-active, contador, flechas deshabilitadas) al instante, sin
       esperar a que termine la animación de scroll -- 1 click siempre
       mueve exactamente 1 slide. */
    function updateUI() {
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === activeIndex);
      });
      if (currentEl) currentEl.textContent = pad(activeIndex + 1);
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === slides.length - 1;
    }

    /* Centra la slide activa en el viewport calculando la distancia real
       entre sus centros (getBoundingClientRect, no offsetLeft -- así no
       depende de cuál termine siendo el offsetParent) y sumándola al
       scrollLeft actual. Sin loop: si el resultado cae fuera del rango
       de scroll válido, scrollTo lo recorta solo al extremo -- la
       primera slide queda pegada a la izquierda mostrando peek solo a
       la derecha, la última pegada a la derecha con peek solo a la
       izquierda. Es el "cuando exista" pedido, sin necesitar padding
       extra en el track para simularlo. */
    function scrollToActive(behavior) {
      var slide = slides[activeIndex];
      var viewportRect = viewport.getBoundingClientRect();
      var slideRect = slide.getBoundingClientRect();
      var delta = (slideRect.left + slideRect.width / 2) - (viewportRect.left + viewportRect.width / 2);
      viewport.scrollTo({
        left: viewport.scrollLeft + delta,
        behavior: behavior
      });
    }

    function goToIndex(index) {
      var clamped = Math.max(0, Math.min(slides.length - 1, index));
      if (clamped === activeIndex) return;
      activeIndex = clamped;
      updateUI();
      scrollToActive(prefersReducedMotion ? 'auto' : 'smooth');
    }

    /* Qué slide queda activa después de un scroll nativo (swipe táctil,
       trackpad, o soltar un arrastre con mouse): la de centro
       geométricamente más cercano al centro del viewport en ese momento
       -- más preciso que un umbral de intersección y no depende de
       IntersectionObserver. */
    function nearestIndexFromScroll() {
      var viewportRect = viewport.getBoundingClientRect();
      var center = viewportRect.left + viewportRect.width / 2;
      var bestIndex = activeIndex;
      var bestDistance = Infinity;
      slides.forEach(function (slide, i) {
        var rect = slide.getBoundingClientRect();
        var distance = Math.abs(rect.left + rect.width / 2 - center);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });
      return bestIndex;
    }

    function handleScrollSettled() {
      var index = nearestIndexFromScroll();
      if (index !== activeIndex) {
        activeIndex = index;
        updateUI();
      }
    }

    var scrollSettleTimer = null;
    if ('onscrollend' in window) {
      viewport.addEventListener('scrollend', handleScrollSettled);
    } else {
      /* Fallback para navegadores sin evento "scrollend" nativo: se
         considera asentado el scroll cuando pasan 120ms sin que se
         dispare un nuevo evento "scroll". */
      viewport.addEventListener('scroll', function () {
        if (scrollSettleTimer) clearTimeout(scrollSettleTimer);
        scrollSettleTimer = setTimeout(handleScrollSettled, 120);
      });
    }

    updateUI();
    scrollToActive('auto');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToIndex(activeIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToIndex(activeIndex + 1);
      });
    }

    viewport.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToIndex(activeIndex + 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToIndex(activeIndex - 1);
      }
    });

    /* Arrastre con mouse en desktop -- el swipe táctil ya lo resuelve
       scroll-snap nativo, por eso se ignora pointerType === 'touch' acá
       (dejarlo pasar de largo sin preventDefault ni scrollLeft manual).
       Al soltar, se fuerza el snap a la slide más cercana (goToIndex) en
       vez de confiar en que el navegador snapee solo tras una asignación
       manual de scrollLeft -- así nunca queda a mitad de camino entre
       dos slides. */
    var isDragging = false;
    var dragMoved = false;
    var dragStartX = 0;
    var dragStartScroll = 0;

    viewport.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch') return;
      isDragging = true;
      dragMoved = false;
      dragStartX = event.clientX;
      dragStartScroll = viewport.scrollLeft;
      viewport.classList.add('is-dragging');
    });

    viewport.addEventListener('pointermove', function (event) {
      if (!isDragging) return;
      var delta = event.clientX - dragStartX;
      if (Math.abs(delta) > 4) dragMoved = true;
      viewport.scrollLeft = dragStartScroll - delta;
    });

    function endDrag() {
      if (!isDragging) return;
      isDragging = false;
      viewport.classList.remove('is-dragging');
      if (dragMoved) {
        goToIndex(nearestIndexFromScroll());
      }
    }
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointerleave', endDrag);

    /* Abrir el lightbox en la pieza clickeada -- pero no si ese click en
       realidad fue el final de un arrastre (soltar después de arrastrar
       no debería abrir la imagen). */
    var openButtons = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-open]'));
    openButtons.forEach(function (btn, i) {
      btn.addEventListener('click', function (event) {
        if (dragMoved) {
          event.preventDefault();
          dragMoved = false;
          return;
        }
        openLightbox(root, i);
      });
    });
  });

  /* -- Lightbox genérico (ver .lightbox en components.css): un solo
     elemento a nivel de página, reutilizado por cualquier [data-carousel]
     que lo necesite. Cierra con la X, con Escape o clickeando el fondo;
     ArrowLeft/ArrowRight navegan entre las imágenes de la MISMA galería
     que lo abrió. */
  var lightbox = document.querySelector('[data-lightbox]');
  var lightboxImg = lightbox && lightbox.querySelector('[data-lightbox-img]');
  var activeGalleryImages = null;
  var activeGalleryIndex = 0;
  var lastFocusedEl = null;

  function showLightboxImage() {
    var img = activeGalleryImages[activeGalleryIndex];
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
  }

  function openLightbox(galleryRoot, index) {
    if (!lightbox || !lightboxImg) return;
    var images = Array.prototype.slice.call(galleryRoot.querySelectorAll('[data-carousel-img]'));
    if (!images.length) return;
    activeGalleryImages = images;
    activeGalleryIndex = index;
    showLightboxImage();
    lastFocusedEl = document.activeElement;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    var closeBtn = lightbox.querySelector('[data-lightbox-close]');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', onLightboxKeydown);
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    document.removeEventListener('keydown', onLightboxKeydown);
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function lightboxStep(delta) {
    if (!activeGalleryImages) return;
    activeGalleryIndex =
      (activeGalleryIndex + delta + activeGalleryImages.length) % activeGalleryImages.length;
    showLightboxImage();
  }

  function onLightboxKeydown(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      lightboxStep(1);
    } else if (event.key === 'ArrowLeft') {
      lightboxStep(-1);
    }
  }

  if (lightbox) {
    var lbClose = lightbox.querySelector('[data-lightbox-close]');
    var lbPrev = lightbox.querySelector('[data-lightbox-prev]');
    var lbNext = lightbox.querySelector('[data-lightbox-next]');

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', function () { lightboxStep(-1); });
    if (lbNext) lbNext.addEventListener('click', function () { lightboxStep(1); });

    /* Click en el fondo oscuro (no en la imagen ni en los botones) cierra
       el lightbox -- basta con chequear que el target sea el propio
       contenedor, ya que la imagen y los botones son hijos directos. */
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }
})();
