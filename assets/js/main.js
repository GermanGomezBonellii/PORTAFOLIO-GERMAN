/* ==========================================================================
   MAIN.JS — comportamiento compartido por todas las páginas: menú mobile,
   aparición suave al hacer scroll, thumbnails de YouTube, carrusel de
   piezas gráficas y lightbox genérico. Sin dependencias externas.
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

    document.querySelectorAll('.site-header__nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -- Aparición suave (fade-in / reveal-on-scroll) al entrar en viewport - */
  var revealEls = document.querySelectorAll('.fade-in, .reveal-on-scroll');

  if ('IntersectionObserver' in window && revealEls.length) {
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

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();

/* -- Thumbnails de YouTube a partir de un videoId --------------------------
   Cualquier <img data-youtube-id="XXXX"> arma su propia URL de miniatura en
   runtime (maxresdefault -> hqdefault si falla), sin repetir la URL a mano
   por cada video. Reutilizado en Videos y en Kalulu y alfabetización. */
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

/* -- Carrusel de piezas gráficas (Kalulu: piezas de lanzamiento del mini
   documental en Arrecifes) + lightbox genérico. --------------------------- */
(function () {
  var carousels = document.querySelectorAll('[data-carousel]');
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  if (carousels.length) {
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

      function updateUI() {
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === activeIndex);
        });
        if (currentEl) currentEl.textContent = pad(activeIndex + 1);
        if (prevBtn) prevBtn.disabled = activeIndex === 0;
        if (nextBtn) nextBtn.disabled = activeIndex === slides.length - 1;
      }

      function scrollToActive(behavior) {
        var slide = slides[activeIndex];
        var viewportRect = viewport.getBoundingClientRect();
        var slideRect = slide.getBoundingClientRect();
        var delta = (slideRect.left + slideRect.width / 2) - (viewportRect.left + viewportRect.width / 2);
        viewport.scrollTo({ left: viewport.scrollLeft + delta, behavior: behavior });
      }

      function goToIndex(index) {
        var clamped = Math.max(0, Math.min(slides.length - 1, index));
        if (clamped === activeIndex) return;
        activeIndex = clamped;
        updateUI();
        scrollToActive(prefersReducedMotion ? 'auto' : 'smooth');
      }

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
        viewport.addEventListener('scroll', function () {
          if (scrollSettleTimer) clearTimeout(scrollSettleTimer);
          scrollSettleTimer = setTimeout(handleScrollSettled, 120);
        });
      }

      updateUI();
      scrollToActive('auto');

      if (prevBtn) prevBtn.addEventListener('click', function () { goToIndex(activeIndex - 1); });
      if (nextBtn) nextBtn.addEventListener('click', function () { goToIndex(activeIndex + 1); });

      viewport.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') { event.preventDefault(); goToIndex(activeIndex + 1); }
        else if (event.key === 'ArrowLeft') { event.preventDefault(); goToIndex(activeIndex - 1); }
      });

      var isDragging = false, dragMoved = false, dragStartX = 0, dragStartScroll = 0;

      viewport.addEventListener('pointerdown', function (event) {
        if (event.pointerType === 'touch') return;
        isDragging = true; dragMoved = false;
        dragStartX = event.clientX; dragStartScroll = viewport.scrollLeft;
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
        if (dragMoved) goToIndex(nearestIndexFromScroll());
      }
      viewport.addEventListener('pointerup', endDrag);
      viewport.addEventListener('pointerleave', endDrag);

      var openButtons = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-open]'));
      openButtons.forEach(function (btn, i) {
        btn.addEventListener('click', function (event) {
          if (dragMoved) { event.preventDefault(); dragMoved = false; return; }
          openLightbox(root, i);
        });
      });
    });
  }

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
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function lightboxStep(delta) {
    if (!activeGalleryImages) return;
    activeGalleryIndex = (activeGalleryIndex + delta + activeGalleryImages.length) % activeGalleryImages.length;
    showLightboxImage();
  }

  function onLightboxKeydown(event) {
    if (event.key === 'Escape') closeLightbox();
    else if (event.key === 'ArrowRight') lightboxStep(1);
    else if (event.key === 'ArrowLeft') lightboxStep(-1);
  }

  if (lightbox) {
    var lbClose = lightbox.querySelector('[data-lightbox-close]');
    var lbPrev = lightbox.querySelector('[data-lightbox-prev]');
    var lbNext = lightbox.querySelector('[data-lightbox-next]');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', function () { lightboxStep(-1); });
    if (lbNext) lbNext.addEventListener('click', function () { lightboxStep(1); });
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }
})();

/* -- Tabs de Artículos (Ensayos / Papers) ------------------------------------ */
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-articles-tab]'));
  if (!tabs.length) return;

  var panels = {};
  document.querySelectorAll('[data-articles-panel]').forEach(function (panel) {
    panels[panel.getAttribute('data-articles-panel')] = panel;
  });

  function activate(name) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute('data-articles-tab') === name;
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    Object.keys(panels).forEach(function (key) {
      panels[key].hidden = key !== name;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activate(tab.getAttribute('data-articles-tab'));
    });
  });
})();
