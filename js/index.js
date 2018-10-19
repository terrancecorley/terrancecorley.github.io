const main = (() => {

  window.onload = function () {
    // localStorage.clear();

    const logo = document.querySelector('#logo');
    if (!('hasCodeRunBefore' in localStorage)) {
      console.log('false ran');
      logo.classList.add('on-load-animation__swing-in', 'on-load-animation__offset');
      localStorage.setItem('hasCodeRunBefore', true);
    } 
    
    /* else if ('hasCodeRunBefore' in localStorage) {
      console.log('true ran');
      logo.classList.remove('on-load-animation__swing-in');
    } */

    console.log(this.localStorage);
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