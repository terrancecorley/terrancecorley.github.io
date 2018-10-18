const main = (() => {
  const nav = document.querySelector('#site-nav');
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    if (window.scrollY >= navTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }

    if (window.scrollY >= navTop && window.screen.width >= 1024) {
      nav.style.paddingRight = '150px';
    } else if (window.scrollY < navTop && window.screen.width >= 1024) {
      nav.style.paddingRight = '0';
    }
  }

  window.addEventListener('scroll', stickyNavigation);
})();