const modalStore = {};

export function Modal(name, content) {
  modalStore[name] = content;
}

export function initModalSystem() {
  const refs = {
    modal: document.querySelector('[data-overlay]'),
    modalContent: document.querySelector('[data-overlay-content]'),
  };

  document.querySelectorAll('[data-open-overlay]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.openOverlay;
      openModal(key);
    });
  });

  function openModal(key) {
    const content = modalStore[key];
    if (!content) return console.warn(`No modal found for key: ${key}`);

    refs.modalContent.innerHTML = content;
    refs.modal.classList.add('is-open');

    const closeBtn = refs.modal.querySelector('[data-close-overlay]');
    closeBtn?.addEventListener('click', closeModal);

    refs.modal.addEventListener('click', backdropClose);
  }

  function closeModal() {
    refs.modalContent.innerHTML = '';
    refs.modal.classList.remove('is-open');
    refs.modal.removeEventListener('click', backdropClose);
  }

  function backdropClose(e) {
    if (e.target === refs.modal) closeModal();
  }
}

initModalSystem();
