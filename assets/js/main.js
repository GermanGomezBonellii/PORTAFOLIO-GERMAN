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
})();
