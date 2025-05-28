(() => {
  const refs = {
    openButtons: document.querySelectorAll('.price-btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalOverlay: document.querySelector('[data-modal]'),
    modalWrappers: document.querySelectorAll('.modal-wrapper'),
  };
  refs.openButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      // Якщо це кнопка для відкриття, а не "Go to checkout"
      if (!btn.closest('form')) {
        refs.modalOverlay.classList.add('is-open');
        refs.modalWrappers.forEach((wrapper, i) => {
          wrapper.classList.toggle('none', i !== index);
        });
      }
    });
  });
  // Закриття по кнопці
  refs.closeModalBtn.addEventListener('click', () => {
    refs.modalOverlay.classList.remove('is-open');
  });
  // Закриття по кліку на фон
  refs.modalOverlay.addEventListener('click', (event) => {
    if (event.target === refs.modalOverlay) {
      refs.modalOverlay.classList.remove('is-open');
    }
  });
})();