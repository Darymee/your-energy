import { data_api } from './api';
import { Template } from './template';
import {
  toggleFavoriteLS,
  removeFavoriteLS,
  getDailyQuoteLS,
  setDailyQuoteLS,
} from './local_storage';
import { Modal, openModal } from './modal';
import iziToast from 'izitoast';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
  quoteBody: document.querySelector('.quote-card-body'),
  searchBar: document.querySelector('.search-bar'),
  exercisesBredcrumbs: document.querySelector('.exercises-bredcrumbs'),
  favoritesEmpty: document.querySelector('.favorites-empty'),
  exercisedTitleThumb: document.querySelector('.exercises-title-thumb'),
};

let lastRenderCount = data_api.limitPage;
let currentView = 'categories';
let currentCategoryName = null;
let exercisesCurrentPage = 1;
let exercisesTotalPages = 1;
let currentSearchQuery = '';

/* ---------------- Skeleton ---------------- */

const renderSkeletonList = () => {
  refs.listEx.innerHTML = Template.skeletonExMarkup(lastRenderCount);
};

/* ---------------- Pagination ---------------- */

const renderPaginationList = maxPage => {
  const arr = [];

  const isExercisesView = currentView === 'exercises';
  const currentPage = isExercisesView
    ? exercisesCurrentPage
    : data_api.currentPage;
  const totalPages = maxPage || 1;

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  arr.push(
    `<button class="pagination-arrow pagination-arrow-prev" type="button" data-action="prev" aria-label="Previous page" ${
      prevDisabled ? 'disabled' : ''
    }>&lsaquo;</button>`
  );

  for (let i = 1; i <= totalPages; i++) {
    arr.push(Template.itemPagination(i));
  }

  arr.push(
    `<button class="pagination-arrow pagination-arrow-next" type="button" data-action="next" aria-label="Next page" ${
      nextDisabled ? 'disabled' : ''
    }>&rsaquo;</button>`
  );

  refs.paginationBox.innerHTML = arr.join('');
};

const setActivePaginationButton = page => {
  const pageButtons = [
    ...refs.paginationBox.querySelectorAll('.pagination-item'),
  ];
  if (!pageButtons.length) return;

  pageButtons.forEach(btn => btn.classList.remove('pagination-item-active'));

  const index = page - 1;
  if (index >= 0 && index < pageButtons.length) {
    pageButtons[index].classList.add('pagination-item-active');
  }

  const prevBtn = refs.paginationBox.querySelector('[data-action="prev"]');
  const nextBtn = refs.paginationBox.querySelector('[data-action="next"]');

  const isExercisesView = currentView === 'exercises';
  const currentPage = isExercisesView
    ? exercisesCurrentPage
    : data_api.currentPage;
  const totalPages = isExercisesView
    ? exercisesTotalPages
    : data_api.totalPages;

  if (prevBtn) prevBtn.disabled = currentPage <= 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
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

export const handleExerciseItemClick = async (e, _id) => {
  const id = _id || e.currentTarget.dataset.id;
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
    Modal('rating', ratingModalMarkup, 'overlay-rating');
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

const handleSearch = () => {
  const searchInput = document.querySelector('.search-bar-input');
  const searchBarIconClose = document.querySelector('.search-bar-icon-close');

  if (!searchInput || !searchBarIconClose) return;

  let timeoutId = null;

  searchInput.addEventListener('input', e => {
    const query = e.target.value.trim();

    if (query.length > 0) {
      searchBarIconClose.classList.add('visible');
    } else {
      searchBarIconClose.classList.remove('visible');
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      await performSearch(query);
    }, 500);
  });

  searchBarIconClose.addEventListener('click', async () => {
    searchInput.value = '';
    searchBarIconClose.classList.remove('visible');

    currentSearchQuery = '';

    await performSearch('');
  });
};

const performSearch = async query => {
  currentSearchQuery = query;

  try {
    renderSkeletonList();

    const res = await data_api.getExerciseByCategory(
      data_api.filterType,
      currentCategoryName,
      exercisesCurrentPage,
      10,
      query
    );

    exercisesTotalPages = res.totalPages || 1;

    if (!res.results.length) {
      refs.favoritesEmpty.classList.remove('is-hidden');
      refs.listEx.innerHTML = '';
      refs.listEx.style.display = 'none';
      refs.paginationBox.style.display = 'none';
      return;
    }

    refs.listEx.style.display = 'flex';
    refs.paginationBox.style.display = 'flex';
    refs.favoritesEmpty.classList.add('is-hidden');
    refs.listEx.classList.add('body-parts-list');

    const cards = res.results.map(item => Template.favoriteCard(item));
    refs.listEx.innerHTML = cards.join('');

    renderPaginationList(exercisesTotalPages);
    setActivePaginationButton(exercisesCurrentPage);

    addEventListenersToCards();
  } catch (error) {
    console.error('Search error:', error);
  }
};

const handleCategoryClick = async e => {
  currentCategoryName = e.currentTarget.dataset.nameCategory;
  currentView = 'exercises';
  exercisesCurrentPage = 1;

  await loadExercisesByCategory();
};

const loadExercisesByCategory = async () => {
  const res = await data_api.getExerciseByCategory(
    data_api.filterType,
    currentCategoryName,
    exercisesCurrentPage,
    10,
    currentSearchQuery
  );

  exercisesTotalPages = res.totalPages || 1;

  refs.exercisedTitleThumb.classList.add('is-search-shown');
  refs.searchBar.classList.add('is-show');
  refs.exercisesBredcrumbs.classList.add('is-show');
  refs.exercisesBredcrumbs.querySelector('.exercises-category').innerHTML =
    currentCategoryName;

  if (!res.results.length) {
    console.log('sadas');
    refs.favoritesEmpty.classList.remove('is-hidden');
    refs.listEx.innerHTML = '';
    refs.listEx.style.display = 'none';
    refs.paginationBox.style.display = 'none';
    return;
  }

  refs.paginationBox.style.display = 'flex';
  refs.listEx.style.display = 'flex';
  refs.favoritesEmpty.classList.add('is-hidden');
  refs.searchBar.classList.add('is-show');
  refs.listEx.classList.add('body-parts-list');
  const cards = res.results.map(item => Template.favoriteCard(item));
  refs.listEx.innerHTML = cards.join('');

  renderPaginationList(exercisesTotalPages);
  setActivePaginationButton(exercisesCurrentPage);

  handleSearch();
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

const renderQuote = async () => {
  const wrapper = document.querySelector('.quote-card');
  if (!wrapper) return;

  const fallbackQuote = {
    author: 'Tom Brady',
    quote: `A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.`,
  };

  const cachedQuote = getDailyQuoteLS();
  if (cachedQuote) {
    wrapper.innerHTML = Template.quoteTemplate({
      quote: cachedQuote.quote,
      author: cachedQuote.author,
    });
    return;
  }

  try {
    const res = await data_api.getQuote();
    wrapper.innerHTML = Template.quoteTemplate(res);

    setDailyQuoteLS(res.quote, res.author);
  } catch (error) {
    console.error('Error fetching quote:', error);
    wrapper.innerHTML = Template.quoteTemplate(fallbackQuote);
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
  try {
    renderQuote();

    const res = await data_api.getDataByFilter();

    if (refs.btnBox.children[0]) {
      refs.btnBox.children[0].classList.add('active');
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

    await loadAndRenderExercises({ updatePagination: true });
    refs.exercisedTitleThumb.classList.remove('is-search-shown');
    refs.searchBar.classList.remove('is-show');
    refs.exercisesBredcrumbs.classList.remove('is-show');
    refs.listEx.style.display = 'flex';
  } catch (error) {
    console.error('Filter error:', error);
  }
};

const onClickPaginationBox = async e => {
  try {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    const action = clickedBtn.dataset.action;

    // Handle arrows first
    if (action === 'prev' || action === 'next') {
      if (currentView === 'exercises') {
        const newPage =
          action === 'prev'
            ? exercisesCurrentPage - 1
            : exercisesCurrentPage + 1;

        if (newPage < 1 || newPage > exercisesTotalPages) return;

        exercisesCurrentPage = newPage;
        await loadExercisesByCategory();
      } else {
        const newPage =
          action === 'prev'
            ? data_api.currentPage - 1
            : data_api.currentPage + 1;

        if (newPage < 1 || newPage > data_api.totalPages) return;

        data_api.currentPage = newPage;
        await loadAndRenderExercises();
      }

      return; // avoid falling through to numeric logic
    }

    // Numeric buttons (existing logic)
    const clickedNumPage = Number(clickedBtn.textContent.trim());
    if (!Number.isFinite(clickedNumPage)) return;

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
    console.error('Pagination error:', error);
  }
};

/* ---------------- Initialize ---------------- */

getFilteredData();

/* ---------------- Listeners ---------------- */

if (refs.btnBox) {
  refs.btnBox.addEventListener('click', onClickFilterBtn);
}
if (refs.paginationBox) {
  refs.paginationBox.addEventListener('click', onClickPaginationBox);
}
