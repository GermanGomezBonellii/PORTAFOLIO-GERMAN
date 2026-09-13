/* ==========================================================================
   LIBROS — renderiza assets/data/books.json dentro de [data-books-grid].
   ========================================================================== */

(function () {
  var gridEl = document.querySelector('[data-books-grid]');
  if (!gridEl) return;

  var dataPath = gridEl.getAttribute('data-books-src') || 'assets/data/books.json';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  fetch(dataPath)
    .then(function (res) { return res.json(); })
    .then(function (books) {
      if (!Array.isArray(books) || !books.length) return;

      gridEl.innerHTML = books.map(function (b) {
        var cover = b.cover
          ? '<img src="' + escapeHtml(b.cover) + '" alt="Portada de ' + escapeHtml(b.title) + '" loading="lazy">'
          : escapeHtml(b.title);
        return (
          '<div class="book-card">' +
            '<div class="book-card__cover' + (b.cover ? ' book-card__cover--photo' : '') + '">' + cover + '</div>' +
            '<div>' +
              '<span class="book-card__year">' + escapeHtml(b.year) +
                (b.publisher ? ' · ' + escapeHtml(b.publisher) : '') +
              '</span>' +
            '</div>' +
          '</div>'
        );
      }).join('');
    })
    .catch(function () { /* silencioso: la sección simplemente no se rellena */ });
})();
