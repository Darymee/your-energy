import { data_api } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const ratingModal = document.querySelector('[data-rating-modal]');
  const closeBtn = document.querySelector('[data-rating-close]');
  const form = document.querySelector('.rating-form');
  const ratingDisplay = document.querySelector('.rating-form-value');

  let currentExerciseId = null;


  function openRatingModal(exerciseId) {
    currentExerciseId = exerciseId || null;

    ratingModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    if (form) form.reset();
    document.querySelectorAll('.rating-form-radio').forEach(r => (r.checked = false));
    updateRatingDisplay('0.0');
  }

  window.openRatingModal = openRatingModal;



  function closeRatingModal() {
    ratingModal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
    if (form) form.reset();
    currentExerciseId = null;
  }


  

  function updateRatingDisplay(value) {
    if (ratingDisplay) {
      ratingDisplay.textContent = parseFloat(value).toFixed(1);
    }
  }


  

  const openRatingBtns = document.querySelectorAll('[data-open-overlay="rating"]');

  openRatingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id || null;
      openRatingModal(id);
    });
  });


  

  if (closeBtn) {
    closeBtn.addEventListener('click', closeRatingModal);
  }




  ratingModal.addEventListener('click', e => {
    if (e.target === ratingModal) {
      closeRatingModal();
    }
  });


  

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !ratingModal.classList.contains('is-hidden')) {
      closeRatingModal();
    }
  });


  

  const starRadios = document.querySelectorAll('.rating-form-radio');
  const starLabels = document.querySelectorAll('.rating-form-stars label');

  starRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.checked) {
        updateRatingDisplay(this.value);
      }
    });
  });

  starLabels.forEach(label => {
    label.addEventListener('click', () => {
      const id = label.getAttribute('for');
      const radio = document.getElementById(id);

      if (radio) {
        starRadios.forEach(r => (r.checked = false));
        radio.checked = true;
        updateRatingDisplay(radio.value);
      }
    });

    label.addEventListener('mouseenter', () => {
      const id = label.getAttribute('for');
      const radio = document.getElementById(id);
      if (radio && !radio.checked) updateRatingDisplay(radio.value);
    });

    label.addEventListener('mouseleave', () => {
      const selected = document.querySelector('.rating-form-radio:checked');
      updateRatingDisplay(selected ? selected.value : '0.0');
    });
  });


  
  
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = form.querySelector('#rating-email').value.trim();
      const review = form.querySelector('#rating-comment').value.trim();
      const selectedRating = form.querySelector('.rating-form-radio:checked');

      if (!selectedRating) {
        iziToast.error({
          title: 'Error',
          message: 'Please select a rating',
          position: 'topRight',
        });
        return;
      }

      if (!email) {
        iziToast.error({
          title: 'Error',
          message: 'Please enter your email',
          position: 'topRight',
        });
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        iziToast.error({
          title: 'Error',
          message: 'Please enter a valid email address',
          position: 'topRight',
        });
        return;
      }

      if (!review) {
        iziToast.error({
          title: 'Error',
          message: 'Please enter your review',
          position: 'topRight',
        });
        return;
      }

      const rating = parseFloat(selectedRating.value);

      try {
        await data_api.rateExercise(currentExerciseId, rating, email, review);

        iziToast.success({
          title: 'Success!',
          message: 'Thank you for your rating!',
          position: 'topRight',
          timeout: 3000,
        });

        setTimeout(() => {
          closeRatingModal();
        }, 800);

      } catch (error) {
        console.error('Rating submission error:', error);

        let message = 'Failed to submit rating. Please try again.';

        if (error.message?.includes('1 and 5')) {
          message = 'Rating must be between 1 and 5 stars';
        } else if (error.response?.status === 404) {
          message = 'Exercise not found.';
        }

        iziToast.error({
          title: 'Error',
          message,
          position: 'topRight',
        });
      }
    });
  }
});
