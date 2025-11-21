export const Modal = content => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-overlay]'),
    modal: document.querySelector('[data-overlay]'),
    modalContent: document.querySelector('[data-overlay-content]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);

  function openModal() {
    refs.modalContent.innerHTML = content;
    refs.modal.classList.add('is-open');

    const closeModalBtn = refs.modal.querySelector('[data-close-overlay]');
    closeModalBtn?.addEventListener('click', closeModal);
  }

  function closeModal() {
    refs.modalContent.innerHTML = '';
    refs.modal.classList.remove('is-open');
  }
};
