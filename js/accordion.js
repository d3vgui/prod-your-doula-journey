const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header  = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.height = 0;
    });

    if (!isActive) {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
