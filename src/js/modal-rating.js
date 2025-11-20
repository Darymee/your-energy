import { Modal } from './modal';

Modal(modalRatingTemplate());

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
