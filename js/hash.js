document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
        history.replaceState(null, '', window.location.pathname);
      }, 500);
    }
  });
});

// if (window.location.pathname.endsWith('.html')) {
//   const novaURL = window.location.pathname.replace('.html', '');
//   window.history.replaceState({}, '', novaURL);
// }
