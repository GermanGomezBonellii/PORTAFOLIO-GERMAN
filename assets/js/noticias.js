/* ==========================================================================
   NOTICIAS — lee la tabla "noticias" de Supabase vía REST (PostgREST) y
   renderiza el tablón. No usa el SDK de supabase-js (evita una dependencia
   extra sólo para un GET de lectura pública): un fetch simple con la
   anon key alcanza porque RLS permite lectura pública de filas activas.

   Requiere que assets/js/supabase-config.js tenga URL y anonKey reales.
   Mientras sigan con los valores placeholder, se muestra un estado
   explícito en vez de intentar pegarle a una URL inexistente.
   ========================================================================== */

(function () {
  var listEl = document.querySelector('[data-news-list]');
  var filtersEl = document.querySelector('[data-news-filters]');
  if (!listEl) return;

  var config = window.SUPABASE_CONFIG || {};
  var isConfigured =
    config.url && config.anonKey &&
    config.url.indexOf('TU-PROYECTO') === -1 &&
    config.anonKey.indexOf('TU-ANON-KEY') === -1;

  if (!isConfigured) {
    listEl.innerHTML =
      '<div class="news-empty">Esta sección todavía no está conectada a Supabase. ' +
      'Completá <code>assets/js/supabase-config.js</code> con la URL y la anon key ' +
      'del proyecto, y creá la tabla <code>noticias</code> (ver ' +
      '<code>supabase/schema.sql</code>) para que el tablón se muestre acá.</div>';
    return;
  }

  var endpoint =
    config.url.replace(/\/$/, '') +
    '/rest/v1/noticias?select=*&active=eq.true&order=pinned.desc,sort_order.asc,date.desc';

  var allItems = [];
  var activeCategory = 'todas';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      var d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch (e) {
      return dateStr;
    }
  }

  function render() {
    var items = allItems.filter(function (item) {
      return activeCategory === 'todas' || item.category === activeCategory;
    });

    var limit = parseInt(listEl.getAttribute('data-news-limit'), 10);
    if (limit) items = items.slice(0, limit);

    if (!items.length) {
      listEl.innerHTML = '<div class="news-empty">No hay novedades en esta categoría por ahora.</div>';
      return;
    }

    listEl.innerHTML = items.map(function (item) {
      var img = item.image_url
        ? '<img src="' + escapeHtml(item.image_url) + '" alt="" loading="lazy">'
        : '';
      var pinned = item.pinned
        ? '<span class="tag tag--pinned">Destacado</span>'
        : (item.category ? '<span class="tag">' + escapeHtml(item.category) + '</span>' : '');

      return (
        '<a class="news-card" href="' + escapeHtml(item.url || '#') + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="news-card__media">' + img + '</span>' +
          '<span class="news-card__body">' +
            '<span class="news-card__top">' +
              '<span class="news-card__date">' + escapeHtml(formatDate(item.date)) + '</span>' +
              pinned +
            '</span>' +
            '<span class="news-card__title">' + escapeHtml(item.title) + '</span>' +
            (item.description ? '<span class="news-card__desc">' + escapeHtml(item.description) + '</span>' : '') +
          '</span>' +
          '<span class="news-card__arrow" aria-hidden="true">&#8599;</span>' +
        '</a>'
      );
    }).join('');
  }

  function renderFilters() {
    if (!filtersEl) return;
    var categories = ['todas'];
    allItems.forEach(function (item) {
      if (item.category && categories.indexOf(item.category) === -1) categories.push(item.category);
    });
    if (categories.length <= 1) return;

    filtersEl.innerHTML = categories.map(function (cat) {
      return (
        '<button type="button" class="news-filter" data-category="' + escapeHtml(cat) + '" ' +
        'aria-pressed="' + (cat === activeCategory ? 'true' : 'false') + '">' +
        escapeHtml(cat === 'todas' ? 'Todas' : cat) + '</button>'
      );
    }).join('');

    filtersEl.querySelectorAll('[data-category]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = btn.getAttribute('data-category');
        filtersEl.querySelectorAll('[data-category]').forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        render();
      });
    });
  }

  listEl.innerHTML = '<div class="news-empty">Cargando novedades…</div>';

  fetch(endpoint, {
    headers: {
      apikey: config.anonKey,
      Authorization: 'Bearer ' + config.anonKey,
    },
  })
    .then(function (res) {
      if (!res.ok) throw new Error('Supabase respondió ' + res.status);
      return res.json();
    })
    .then(function (data) {
      allItems = Array.isArray(data) ? data : [];
      renderFilters();
      render();
    })
    .catch(function (err) {
      listEl.innerHTML =
        '<div class="news-error">No se pudieron cargar las novedades (' +
        escapeHtml(err.message) + '). Revisá la configuración de Supabase y las políticas de RLS.</div>';
    });
})();
