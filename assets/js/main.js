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
