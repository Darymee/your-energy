const modalStore = {};

let refs = null;
let backdropHandler = null;
let closeBtnHandler = null;

export function Modal(name, content) {
  modalStore[name] = content;
}

export function initModalSystem() {
  refs = {
    modal: document.querySelector('[data-overlay]'),
    modalContent: document.querySelector('[data-overlay-content]'),
  };

  document.querySelectorAll('[data-open-overlay]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.openOverlay;
      openModal(key);
    });
  });
}

export function openModal(key) {
  if (!refs) {
    console.warn('Modal system is not initialized');
    return;
  }

  const content = modalStore[key];
  if (!content) return console.warn(`No modal found for key: ${key}`);

  // Очищення попередніх обробників
  cleanupListeners();

  refs.modalContent.innerHTML = content;
  refs.modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Додаємо обробник кнопки закриття
  const closeBtn = refs.modal.querySelector('[data-close-overlay]');
  if (closeBtn) {
    closeBtnHandler = closeModal;
    closeBtn.addEventListener('click', closeBtnHandler);
  }

  // Додаємо обробник backdrop
  backdropHandler = backdropClose;
  refs.modal.addEventListener('click', backdropHandler);
}

export function closeModal() {
  if (!refs) return;

  refs.modalContent.innerHTML = '';
  refs.modal.classList.remove('is-open');
  document.body.style.overflow = '';

  cleanupListeners();
}

function cleanupListeners() {
  if (backdropHandler) {
    refs.modal.removeEventListener('click', backdropHandler);
    backdropHandler = null;
  }

  if (closeBtnHandler) {
    const closeBtn = refs.modal.querySelector('[data-close-overlay]');
    closeBtn?.removeEventListener('click', closeBtnHandler);
    closeBtnHandler = null;
  }
}

function backdropClose(e) {
  if (e.target === refs.modal) closeModal();
}

initModalSystem();
