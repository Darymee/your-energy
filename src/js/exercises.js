import { data_api } from './api';
import { Template } from './template';
import { getLastSessionLS, setLastSessionLS } from './local_storage';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
  quoteBody: document.querySelector('.quote-card-body'),
};

let lastRenderCount = data_api.limitPage;
let prevLimit = data_api.limitPage;
let isResizingLoad = false;
let viewMode = 'filters';

const indicator = refs.btnBox.querySelector('.exercises-thumb-indicator');

/* ---------------- Indicator ---------------- */

const updateIndicator = () => {
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
  if (buttons[index]) {
    buttons[index].classList.add('pagination-item-active');
  }
};

/* ---------------- Render Filters list ---------------- */

const renderFiltersList = data => {
  refs.listEx.classList.remove('body-parts-list');

  const cards = data.results.map(i => Template.exerciseCard(i)).join('');
  refs.listEx.innerHTML = cards;

  //тут можна виправити поставити слухач на список (на разі тут просто тест)
  document
    .querySelectorAll('.exercises-item')
    .forEach(card => card.addEventListener('click', onCategoryClick));

  lastRenderCount = Math.max(cards.length, data_api.limitPage);
};

/* ---------------- Render Exercises list ---------------- */

const renderExercisesList = data => {
  refs.listEx.classList.add('body-parts-list');

  const cards = data.results.map(item => Template.favoriteCard(item));
  refs.listEx.innerHTML = cards.join('');

  lastRenderCount = Math.max(cards.length, data_api.limitPage);
};

/* ---------------- Loaders ---------------- */

const loadFiltersPage = async ({ updatePagination = false } = {}) => {
  renderSkeletonList();

  const res = await data_api.getDataByFilter();
  renderFiltersList(res);

  if (updatePagination) renderPaginationList(data_api.totalPages);
  setActivePaginationButton(data_api.currentPage);
};

const loadExercisesPage = async ({ updatePagination = false } = {}) => {
  renderSkeletonList();

  const res = await data_api.getExercises();
  renderExercisesList(res);

  if (updatePagination) renderPaginationList(data_api.totalPages);
  setActivePaginationButton(data_api.currentPage);
};

const loadCurrentView = async ({ updatePagination = false } = {}) => {
  if (viewMode === 'filters') {
    await loadFiltersPage({ updatePagination });
  } else {
    await loadExercisesPage({ updatePagination });
  }
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
    const lastSession = getLastSessionLS();

    if (lastSession && !hasPassed24Hours(lastSession.time)) {
      refs.quoteBody.innerHTML = Template.quote(
        lastSession.author,
        lastSession.quote
      );
      return;
    }

    const res = await data_api.getQuote();
    const { author = 'Unknown', quote = 'No quote available' } = res;

    refs.quoteBody.innerHTML = Template.quote(author, quote);

    setLastSessionLS({
      author,
      quote,
      time: Date.now(),
    });
  } catch {}
};
/* ---------------- Init ---------------- */

const init = async () => {
  renderQuote();

  if (refs.btnBox.children[0]) {
    refs.btnBox.children[0].classList.add('active');
    requestAnimationFrame(updateIndicator);
  }

  viewMode = 'filters';
  await loadFiltersPage({ updatePagination: true });
};

init();

/* ---------------- Handlers ---------------- */

const onClickFilterBtn = async e => {
  const clickedBtn = e.target.closest('button');
  if (!clickedBtn) return;

  const selectedType = clickedBtn.dataset.type;
  if (!selectedType) return;

  viewMode = 'filters';
  data_api.changeSearchType(selectedType);

  lastRenderCount = data_api.limitPage;

  [...refs.btnBox.children].forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
  requestAnimationFrame(updateIndicator);

  await loadFiltersPage({ updatePagination: true });
};

const onClickPaginationBox = async e => {
  const clickedBtn = e.target.closest('button');
  if (!clickedBtn) return;

  const clickedNumPage = Number(clickedBtn.textContent.trim());
  if (!Number.isFinite(clickedNumPage)) return;
  if (clickedNumPage === data_api.currentPage) return;

  data_api.setPage(clickedNumPage);
  await loadCurrentView();
};

const onCategoryClick = async e => {
  const name = e.currentTarget.dataset.name;
  console.log('🚀 ~ name:', name);
  if (!name) return;

  viewMode = 'exercises';

  data_api.setCategoryFilter(data_api.filterType, name);

  await loadExercisesPage({ updatePagination: true });
};
/* ---------------- Resize ---------------- */

const onResize = async () => {
  updateIndicator();

  if (data_api.limitPage !== prevLimit && !isResizingLoad) {
    isResizingLoad = true;
    try {
      prevLimit = data_api.limitPage;
      lastRenderCount = prevLimit;

      data_api.resetPage();
      await loadCurrentView({ updatePagination: true });
    } finally {
      isResizingLoad = false;
    }
  }
};

/* ---------------- Listeners ---------------- */

window.addEventListener('resize', onResize);
refs.btnBox.addEventListener('click', onClickFilterBtn);
refs.paginationBox.addEventListener('click', onClickPaginationBox);
