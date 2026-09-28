/* Phil-Mobile — menu burger (mobile uniquement) */
(function () {
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('menu');
  var backdrop = document.querySelector('.menu-backdrop');
  if (!burger || !panel) return;

  function setOpen(open) {
    panel.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function () {
    setOpen(!panel.classList.contains('open'));
  });
  if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setOpen(false);
  });
})();
