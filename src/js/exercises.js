import { data_api } from './api';
import { Template } from './template';
import { getLastSessionLS, setLastSessionLS } from './local_storage';
import { Modal } from './modal';
import { modalExerciseTemplate } from './modal-exercises';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
  quoteBody: document.querySelector('.quote-card-body'),
};

let lastRenderCount = data_api.limitPage;
let prevLimit = data_api.limitPage;
let isResizingLoad = false;

const indicator = refs.btnBox.querySelector('.exercises-thumb-indicator');

const onResize = async () => {
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

/* ---------------- List render + fillers ---------------- */
const renderExerciseItem = async e => {
  const id = e.target.dataset.id;

  const res = await data_api.getExerciseById(id);

  console.log(res);

  Modal('exercise', modalExerciseTemplate(res));
};

const renderExerciseList = async e => {
  const res = await data_api.getExerciseByCategory(
    data_api.filterType,
    e.currentTarget.dataset.name
  );

  refs.listEx.classList.add('body-parts-list');
  const cards = res.results.map(item => Template.favoriteCard(item));
  refs.listEx.innerHTML = cards.join('');

  const exerciseCards = document.querySelectorAll('.card-btn-start');

  exerciseCards.forEach(card =>
    card.addEventListener('click', e => renderExerciseItem(e))
  );
};

const renderListHtml = data => {
  const cards = data.results.map(i => Template.exerciseCard(i));

  refs.listEx.innerHTML = cards.join('');

  const exerciseCards = document.querySelectorAll('.exercises-item');

  exerciseCards.forEach(card =>
    card.addEventListener('click', e => renderExerciseList(e))
  );

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
        refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);

        setLastSessionLS({
          author: res.author,
          quote: res.quote,
          time: Date.now(),
        });
      } else {
        const itemQuote = Template.quote(lastAuthor, lastQuote);
        refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);
      }
    } else {
      const res = await data_api.getQuote();
      const itemQuote = Template.quote(res.author, res.quote);
      refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);

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
    refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);
  }
};

/* ----------------Loader ---------------- */

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
      requestAnimationFrame(updateIndicator);
    }
    renderListHtml(res);
    renderPaginationList(data_api.totalPages);
    setActivePaginationButton(data_api.currentPage);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

getFilteredData();

const onClickFilterBtn = async e => {
  try {
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

    if (clickedNumPage === data_api.currentPage) return;

    data_api.currentPage = clickedNumPage;

    await loadAndRenderExercises();
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

/* ---------------- Listeners ---------------- */

window.addEventListener('resize', onResize);
refs.btnBox.addEventListener('click', onClickFilterBtn);
refs.paginationBox.addEventListener('click', onClickPaginationBox);
