document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const icon = btn.querySelector('.icon');

    item.classList.toggle('open');

    if (item.classList.contains('open')) {
      icon.textContent = 'keyboard_arrow_up';
      icon.classList.add('rotate');
    } else {
      icon.textContent = 'keyboard_arrow_down';
      icon.classList.remove('rotate');
    }
  });
});
