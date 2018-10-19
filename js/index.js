const main = (() => {

  window.onload = function () {
    // localStorage.clear();
    // console.log(this.localStorage);
    const logo = document.querySelector('.logo');
    if (!('hasCodeRunBefore' in localStorage)) {
      console.log('the first load func ran', this.localStorage);
      logo.classList.add('on-load-animation__swing-in');
      localStorage.setItem('hasCodeRunBefore', true);
    } else if ('hasCodeRunBefore' in localStorage) {
      console.log('the has ran func ran', this.localStorage);
      logo.classList.remove('on-load-animation__swing-in');
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