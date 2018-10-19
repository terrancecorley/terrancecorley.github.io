const main = (() => {

  window.onload = function () {
    const logo = document.querySelector('#logo');
    if (!('hasCodeRunBefore' in sessionStorage)) {
      logo.classList.add('on-load-animation__swing-in');
      sessionStorage.setItem('hasCodeRunBefore', true);
    } else if ('hasCodeRunBefore' in sessionStorage) {
      logo.classList.add('logo--position-reset');
    }
  };

  const nav = document.querySelector('#site-nav');
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    if (window.scrollY >= navTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }

    if (window.scrollY >= navTop && window.innerWidth >= 1024) {
      nav.style.paddingRight = '150px';
    } else if (window.scrollY < navTop && window.innerWidth >= 1024) {
      nav.style.paddingRight = '0';
    }
  }

  window.addEventListener('scroll', stickyNavigation);
})();