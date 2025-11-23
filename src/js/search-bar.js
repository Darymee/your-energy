document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.search-bar-input');
  const resetBtn = document.querySelector('.search-bar-reset-btn');

  if (!input || !resetBtn) return;

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      resetBtn.classList.remove('visually-hidden');
    } else {
      resetBtn.classList.add('visually-hidden');
    }
  });

  resetBtn.addEventListener('click', e => {
    e.preventDefault();
    input.value = '';
    resetBtn.classList.add('visually-hidden');
    input.focus();
  });
});
