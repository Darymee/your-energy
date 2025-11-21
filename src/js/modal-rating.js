/*import { Modal } from './modal';

Modal('rating', modalRatingTemplate());

function modalRatingTemplate() {
  const data = {
    rate: 5,
    email: 'test@gmail.com',
    review: 'My best exercise',
  };

  return `
    <div class="modal-rating-overlay">
      <p class="rating-label">Rating</p>

      <div class="rating-stars">
        <span class="rating-value">0.0</span>
        <div class="stars">
          <span data-rate="1">★</span>
          <span data-rate="2">★</span>
          <span data-rate="3">★</span>
          <span data-rate="4">★</span>
          <span data-rate="5">★</span>
        </div>
      </div>

      <input class="rating-email" type="email" placeholder="Email">

      <textarea class="rating-text" placeholder="Your comment"></textarea>

      <button class="rating-send">Send</button>
    </div>
  `;
}

export function initModalRating() {
  const modal = document.querySelector('.modal-rating');
  if (!modal) return;

  const stars = modal.querySelectorAll('.stars span');
  const ratingValue = modal.querySelector('.rating-value');
  const emailInput = modal.querySelector('.rating-email');
  const reviewInput = modal.querySelector('.rating-text');
  const sendBtn = modal.querySelector('.rating-send');

  let currentRate = 0;

  // Hover + active star logic
  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      highlight(parseInt(star.dataset.rate));
    });

    star.addEventListener('mouseout', () => {
      highlight(currentRate);
    });

    star.addEventListener('click', () => {
      currentRate = parseInt(star.dataset.rate);
      ratingValue.textContent = currentRate.toFixed(1);
      highlight(currentRate);
    });
  });

  function highlight(rate) {
    stars.forEach(star => {
      star.classList.toggle('active', parseInt(star.dataset.rate) <= rate);
    });
  }

  // Send handler
  sendBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const review = reviewInput.value.trim();

    if (!currentRate) return alert('Please choose a rating');
    if (!email) return alert('Email is required');
    if (!review) return alert('Please write a comment');

    const payload = { rate: currentRate, email, review };
    console.log('Review sent:', payload);

    alert('Review successfully sent!');

    // reset
    currentRate = 0;
    highlight(0);
    ratingValue.textContent = '0.0';
    emailInput.value = '';
    reviewInput.value = '';
  });
}
*/





document.addEventListener('DOMContentLoaded', function() {
  const ratingModal = document.querySelector('[data-rating-modal]');
  const closeBtn = document.querySelector('.modal-close-btn');
  const openBtn = document.querySelector('.give-rating-btn');
  const form = document.querySelector('.rating-form');
  const ratingDisplay = document.querySelector('.rating-form-value');

  if (!ratingModal) return;

  function openModal() {
    ratingModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    if (form) form.reset();
    document.querySelectorAll('.rating-form-radio').forEach(r => r.checked = false);
    updateRatingDisplay('0.0');
  }

  function closeModal() {
    ratingModal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
    if (form) form.reset();
    document.querySelectorAll('.rating-form-radio').forEach(r => r.checked = false);
    updateRatingDisplay('0.0');
  }

  function updateRatingDisplay(value) {
    if (ratingDisplay) ratingDisplay.textContent = parseFloat(value).toFixed(1);
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  ratingModal.addEventListener('click', function(e) {
    if (e.target === ratingModal) closeModal();
  });

  const starLabels = document.querySelectorAll('.rating-form-stars label');
  starLabels.forEach(label => {
    const radio = document.getElementById(label.getAttribute('for'));
    label.addEventListener('click', function(e) {
      e.preventDefault();
      if (!radio) return;
      document.querySelectorAll('.rating-form-radio').forEach(r => r.checked = false);
      radio.checked = true;
      updateRatingDisplay(radio.value);
    });
    label.addEventListener('mouseenter', () => {
      if (radio) updateRatingDisplay(radio.value);
    });
    label.addEventListener('mouseleave', () => {
      const selected = document.querySelector('.rating-form-radio:checked');
      updateRatingDisplay(selected ? selected.value : '0.0');
    });
  });

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = form.querySelector('#rating-email').value.trim();
      const comment = form.querySelector('#rating-comment').value.trim();
      const selected = form.querySelector('.rating-form-radio:checked');

      if (!email || !comment || !selected) {
        alert('Пожалуйста, заполните все поля и выберите рейтинг');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Введите корректный email');
        return;
      }

      console.log('Rating submitted:', {
        rating: parseFloat(selected.value),
        email,
        comment
      });

      alert('Спасибо за ваш отзыв!');
      closeModal();
    });
  }

  window.openRatingModal = openModal;
});
