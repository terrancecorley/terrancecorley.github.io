const main = (() => {
  // at 30em width and on scroll
  // header sticky
  const header = document.querySelector('#site-header');
  const body = document.querySelector('body');

  window.addEventListener('scroll', () => {
    body.style.paddingTop = '20em';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.backgroundColor = 'rgba(92,96,99, 0.9)';
    header.style.height = '200px';
    header.style.transition = 'all 0.2s ease-in-out';
  });
})();