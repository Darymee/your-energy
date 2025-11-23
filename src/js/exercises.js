import { data_api } from './api';
import { Template } from './template';
import {
  getLastSessionLS,
  setLastSessionLS,
  toggleFavoriteLS,
  removeFavoriteLS,
} from './local_storage';
import { Modal, openModal } from './modal';
import iziToast from 'izitoast';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
  quoteBody: document.querySelector('.quote-card-body'),
};

let lastRenderCount = data_api.limitPage;
let prevLimit = data_api.limitPage;
let isResizingLoad = false;
let currentView = 'categories'; // 'categories' або 'exercises'
let currentCategoryName = null;
let exercisesCurrentPage = 1;
let exercisesTotalPages = 1;

const indicator = refs.btnBox
  ? refs.btnBox.querySelector('.exercises-thumb-indicator')
  : null;

const onResize = async () => {
  if (!indicator) return;

  updateIndicator();
  if (data_api.limitPage !== prevLimit && !isResizingLoad) {
    isResizingLoad = true;
    try {
      prevLimit = data_api.limitPage;
      lastRenderCount = prevLimit;
      await loadAndRenderExercises({ updatePagination: true });
    } finally {
      isResizingLoad = false;
    }
  }
};

const updateIndicator = () => {
  if (!indicator) return;

  const activeBtn = refs.btnBox.querySelector('button.active');
  if (!activeBtn || !indicator) return;

  const boxRect = refs.btnBox.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();

  const left = btnRect.left - boxRect.left;
  const width = btnRect.width;

  indicator.style.transform = `translateX(${left}px)`;
  indicator.style.width = `${width}px`;
};

/* ---------------- Skeleton ---------------- */

const renderSkeletonList = () => {
  refs.listEx.innerHTML = Template.skeletonExMarkup(lastRenderCount);
};

/* ---------------- Pagination ---------------- */

const renderPaginationList = maxPage => {
  const arr = [];
  for (let i = 1; i <= maxPage; i++) {
    arr.push(Template.itemPagination(i));
  }
  refs.paginationBox.innerHTML = arr.join('');
};

const setActivePaginationButton = page => {
  const buttons = [...refs.paginationBox.children];
  if (!buttons.length) return;

  buttons.forEach(btn => btn.classList.remove('pagination-item-active'));

  const index = page - 1;
  if (index >= 0 && index < buttons.length) {
    buttons[index].classList.add('pagination-item-active');
  }
};

/* ---------------- Handlers ---------------- */

const handleRemoveFavorite = e => {
  e.stopPropagation();
  const id = e.currentTarget.dataset.id;
  removeFavoriteLS(id);
  e.currentTarget.remove();

  const modal = document.querySelector('.modal-exercises');
  if (modal) {
    const modalFavoriteBtn = modal.querySelector('[data-btn-favorites]');
    if (modalFavoriteBtn) {
      modalFavoriteBtn.textContent = 'Add to favorites';
      modalFavoriteBtn.classList.remove('active');
      const useElement = modalFavoriteBtn.querySelector('use');
      if (useElement) {
        useElement.setAttribute('href', 'img/sprite.svg#icon-heart');
      }
    }
  }
};

/* ---------------- Update card favorite state ---------------- */

const handleSubmitRating = async (e, exerciseId) => {
  e.preventDefault();

  const form = e.target.closest('form');
  if (!form) return;

  const email = form.querySelector('#rating-email')?.value.trim() || '';
  const review = form.querySelector('#rating-comment')?.value.trim() || '';
  const rateInput = form.querySelector('input[name="rate"]:checked');
  const rate = rateInput ? parseFloat(rateInput.value) : null;

  if (!rate) {
    iziToast.info({
      message: 'Please select your rating.',
      position: 'topRight',
    });
    return;
  }

  if (!email) {
    iziToast.info({
      message: 'Please enter your email',
      position: 'topRight',
    });
    return;
  }

  if (!review) {
    iziToast.info({
      message: 'Please enter your review',
      position: 'topRight',
    });
    return;
  }

  try {
    const response = await data_api.rateExercise(
      exerciseId,
      rate,
      email,
      review
    );

    if (response) {
      iziToast.success({
        message: 'Rating submitted successfully!',
        position: 'topRight',
      });

      const container = document.querySelector(
        '.full-overlay.is-open [data-close-overlay]'
      );

      if (container) {
        container.click();
      }
    }
  } catch (err) {
    iziToast.error({
      message: err,
      position: 'topRight',
    });
  }
};

const handleExerciseItemClick = async e => {
  const id = e.currentTarget.dataset.id;
  const res = await data_api.getExerciseById(id);

  Modal('exercise', Template.exerciseModal(res), 'overlay-exersices');
  openModal('exercise');

  const btnAddToFavorites = document.querySelector('[data-btn-favorites]');
  const btnAddRating = document.querySelector('[data-btn-rating]');

  btnAddToFavorites.addEventListener('click', () => {
    const id = res._id;
    const wasAdded = toggleFavoriteLS(id);

    const icon = btnAddToFavorites.querySelector('[data-fav-icon]');

    if (wasAdded) {
      btnAddToFavorites.textContent = 'Remove from favorites';
      btnAddToFavorites.appendChild(icon.closest('svg'));
      icon.setAttribute('href', 'img/sprite.svg#icon-trash');

      const favoriteCard = document.querySelector(
        `.favorites-item[data-id="${id}"] [data-open-overlay]`
      );

      const trashBtnTemplate = `<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${id}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;

      favoriteCard.insertAdjacentHTML('beforebegin', trashBtnTemplate);

      const deleteBtn = document.querySelector(
        `[data-btn-remove-favorites][data-id="${id}"]`
      );
      if (deleteBtn) {
        deleteBtn.addEventListener('click', handleRemoveFavorite);
      }
    } else {
      btnAddToFavorites.textContent = 'Add to favorites';
      btnAddToFavorites.appendChild(icon.closest('svg'));
      icon.setAttribute('href', 'img/sprite.svg#icon-heart');

      const deleteBtn = document.querySelector(
        `[data-btn-remove-favorites][data-id="${id}"]`
      );
      if (deleteBtn) {
        deleteBtn.remove();
      }
    }
  });

  btnAddRating.addEventListener('click', () => {
    const openedModal = document.querySelector('.modal-exercises');
    if (openedModal) {
      openedModal.remove();
    }

    const ratingModalMarkup = Template.ratingModal();
    Modal('rating', ratingModalMarkup, 'overalay-rating');
    openModal('rating');

    const submitRatingBtn = document.querySelector('[data-btn-submit-rating]');
    submitRatingBtn.addEventListener('click', event =>
      handleSubmitRating(event, id)
    );

    const form = document.querySelector('.rating-form'); // форма зірочного рейтингу
    const rateInputs = form.querySelectorAll('input[name="rate"]');
    const rateValue = form.querySelector('.rating-form-value');

    rateInputs.forEach(input => {
      input.addEventListener('change', () => {
        rateValue.textContent = input.value; // оновлюємо текст
      });
    });
  });
};

const handleCategoryClick = async e => {
  currentCategoryName = e.currentTarget.dataset.name;
  currentView = 'exercises';
  exercisesCurrentPage = 1;

  await loadExercisesByCategory();
};

const loadExercisesByCategory = async () => {
  const res = await data_api.getExerciseByCategory(
    data_api.filterType,
    currentCategoryName,
    exercisesCurrentPage,
    10
  );

  exercisesTotalPages = res.totalPages || 1;

  refs.listEx.classList.add('body-parts-list');
  const cards = res.results.map(item => Template.favoriteCard(item));
  refs.listEx.innerHTML = cards.join('');

  renderPaginationList(exercisesTotalPages);
  setActivePaginationButton(exercisesCurrentPage);

  addEventListenersToCards();
};

/* ---------------- Event listeners management ---------------- */

const addEventListenersToCards = () => {
  const exerciseCards = document.querySelectorAll('.card-btn-start');
  const btnsRemoveFromFavorites = document.querySelectorAll(
    '[data-btn-remove-favorites]'
  );

  exerciseCards.forEach(card =>
    card.addEventListener('click', handleExerciseItemClick)
  );

  btnsRemoveFromFavorites.forEach(btn =>
    btn.addEventListener('click', handleRemoveFavorite)
  );
};

const addEventListenersToExerciseCards = () => {
  const exerciseCards = document.querySelectorAll('.exercises-item');
  exerciseCards.forEach(card =>
    card.addEventListener('click', handleCategoryClick)
  );
};

/* ---------------- List render ---------------- */

const renderListHtml = data => {
  const cards = data.results.map(i => Template.exerciseCard(i));
  refs.listEx.innerHTML = cards.join('');

  addEventListenersToExerciseCards();
  lastRenderCount = Math.max(cards.length, data_api.limitPage);
};

/* ---------------- Quote ---------------- */

const hasPassed24Hours = timestampMs => {
  const nowMs = Date.now();
  const diffMs = nowMs - timestampMs;
  const hours24Ms = 24 * 60 * 60 * 1000;
  return diffMs >= hours24Ms;
};

const renderQuote = async () => {
  try {
    const hasLastSession = getLastSessionLS();

    if (hasLastSession) {
      const { author: lastAuthor, quote: lastQuote, time } = hasLastSession;
      const isFutureDate = hasPassed24Hours(time);

      if (isFutureDate) {
        const res = await data_api.getQuote();
        const itemQuote = Template.quote(res.author, res.quote);
        refs.quoteBody.innerHTML = itemQuote;

        setLastSessionLS({
          author: res.author,
          quote: res.quote,
          time: Date.now(),
        });
      } else {
        const itemQuote = Template.quote(lastAuthor, lastQuote);
        refs.quoteBody.innerHTML = itemQuote;
      }
    } else {
      const res = await data_api.getQuote();
      const itemQuote = Template.quote(res.author, res.quote);
      refs.quoteBody.innerHTML = itemQuote;

      setLastSessionLS({
        author: res.author,
        quote: res.quote,
        time: Date.now(),
      });
    }
  } catch (error) {
    const errorAuthor = 'Tom Brady';
    const errorQuote = `A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.`;
    const itemQuote = Template.quote(errorAuthor, errorQuote);

    if (!indicator) return;

    refs.quoteBody.innerHTML = itemQuote;
  }
};

/* ---------------- Loader ---------------- */

const loadAndRenderExercises = async ({ updatePagination = false } = {}) => {
  renderSkeletonList();

  const res = await data_api.getDataByFilter();

  renderListHtml(res);

  if (updatePagination) {
    renderPaginationList(data_api.totalPages);
  }

  setActivePaginationButton(data_api.currentPage);
};

const getFilteredData = async () => {
  if (!indicator) return;

  try {
    renderQuote();
    const res = await data_api.getDataByFilter();
    if (refs.btnBox.children[0]) {
      refs.btnBox.children[0].classList.add('active');
      requestAnimationFrame(updateIndicator);
    }
    renderListHtml(res);
    renderPaginationList(data_api.totalPages);
    setActivePaginationButton(data_api.currentPage);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

/* ---------------- Filter and Pagination handlers ---------------- */

const onClickFilterBtn = async e => {
  try {
    currentView = 'categories';
    currentCategoryName = null;
    refs.listEx.classList.remove('body-parts-list');
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    const selectedType = clickedBtn.dataset.type;
    if (!selectedType) return;

    data_api.changeSearchType(selectedType);

    lastRenderCount = data_api.limitPage;

    [...e.currentTarget.children].forEach(btn =>
      btn.classList.remove('active')
    );
    clickedBtn.classList.add('active');
    requestAnimationFrame(updateIndicator);

    await loadAndRenderExercises({ updatePagination: true });
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

const onClickPaginationBox = async e => {
  try {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    const clickedNumPage = Number(clickedBtn.textContent.trim());
    if (!Number.isFinite(clickedNumPage)) return;

    // Перевіряємо який режим перегляду
    if (currentView === 'exercises') {
      if (clickedNumPage === exercisesCurrentPage) return;
      exercisesCurrentPage = clickedNumPage;
      await loadExercisesByCategory();
    } else {
      if (clickedNumPage === data_api.currentPage) return;
      data_api.currentPage = clickedNumPage;
      await loadAndRenderExercises();
    }
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

/* ---------------- Initialize ---------------- */

getFilteredData();

/* ---------------- Listeners ---------------- */

if (refs.btnBox) {
  window.addEventListener('resize', onResize);
  refs.btnBox.addEventListener('click', onClickFilterBtn);
}
if (refs.paginationBox) {
  refs.paginationBox.addEventListener('click', onClickPaginationBox);
}
