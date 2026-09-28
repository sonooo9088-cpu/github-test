(function () {
  // 모바일 메뉴
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

  // 예약 섹션에서는 하단 예약 바 숨기기
  var dock = document.getElementById('dock');
  var reserve = document.getElementById('reserve');
  if ('IntersectionObserver' in window && dock && reserve) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle('is-hidden', entries[0].isIntersecting);
    }).observe(reserve);
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
