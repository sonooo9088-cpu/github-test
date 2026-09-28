(function () {
  // 모바일 메뉴 토글
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '메뉴 열기');
    }
  });

  // 예약 섹션이 보이면 플로팅 버튼 숨기기
  var floating = document.querySelector('.floating-cta');
  var reserve = document.getElementById('reserve');
  if ('IntersectionObserver' in window && floating && reserve) {
    new IntersectionObserver(function (entries) {
      floating.style.visibility = entries[0].isIntersecting ? 'hidden' : '';
    }).observe(reserve);
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
