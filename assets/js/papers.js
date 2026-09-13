/* ==========================================================================
   PAPERS — renderiza assets/data/papers.json dentro de [data-papers-list].
   Agregar una publicación nueva es editar ese JSON, sin tocar HTML ni JS.
   ========================================================================== */

(function () {
  var listEl = document.querySelector('[data-papers-list]');
  if (!listEl) return;

  var dataPath = listEl.getAttribute('data-papers-src') || 'assets/data/papers.json';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  fetch(dataPath)
    .then(function (res) { return res.json(); })
    .then(function (papers) {
      if (!Array.isArray(papers) || !papers.length) {
        listEl.innerHTML = '<div class="news-empty">Todavía no hay publicaciones cargadas.</div>';
        return;
      }

      listEl.innerHTML = papers.map(function (p) {
        return (
          '<article class="paper-card">' +
            '<div>' +
              '<h3 class="paper-card__title">' + escapeHtml(p.title) + '</h3>' +
              '<p class="paper-card__meta">' + escapeHtml(p.authors) + '</p>' +
              '<p class="paper-card__meta">' + escapeHtml(p.journal) + (p.year ? ' · ' + p.year : '') + '</p>' +
            '</div>' +
            '<a class="arrow-link paper-card__doi" href="' + escapeHtml(p.url) + '" target="_blank" rel="noopener noreferrer">' +
              'Ver DOI <span class="arrow-link__arrow">&#8599;</span>' +
            '</a>' +
          '</article>'
        );
      }).join('');
    })
    .catch(function () {
      listEl.innerHTML = '<div class="news-error">No se pudo cargar el listado de publicaciones.</div>';
    });
})();
