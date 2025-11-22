import { Modal, closeModal } from './modal';
import { data_api } from './api';
import iziToast from 'izitoast';

// Store current exercise ID for rating submission
let currentExerciseId = null;

// Export function to set exercise ID when opening rating modal
export function setRatingExerciseId(id) {
  currentExerciseId = id;
}

Modal('rating', modalRatingTemplate());

function modalRatingTemplate() {
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

  sendBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    const review = reviewInput.value.trim();

    // Validation
    if (!currentRate) {
      iziToast.warning({
        message: 'Please choose a rating',
        position: 'topRight',
      });
      return;
    }

    if (!email) {
      iziToast.warning({
        message: 'Email is required',
        position: 'topRight',
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      iziToast.warning({
        message: 'Please enter a valid email address',
        position: 'topRight',
      });
      return;
    }

    if (!review) {
      iziToast.warning({
        message: 'Please write a comment',
        position: 'topRight',
      });
      return;
    }

    if (!currentExerciseId) {
      iziToast.error({
        message: 'Exercise not found. Please try again.',
        position: 'topRight',
      });
      return;
    }

    // Disable button during submission
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    try {
      await data_api.rateExercise(currentExerciseId, currentRate, email, review);

      iziToast.success({
        message: 'Thank you for your rating!',
        position: 'topRight',
      });

      // Reset form
      currentRate = 0;
      highlight(0);
      ratingValue.textContent = '0.0';
      emailInput.value = '';
      reviewInput.value = '';
      currentExerciseId = null;

      // Close modal after successful submission
      closeModal();
    } catch (error) {
      iziToast.error({
        message: error || 'Failed to submit rating. Please try again.',
        position: 'topRight',
      });
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send';
    }
  });
}
