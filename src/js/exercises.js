import { data_api } from './api';
import { Template } from './template';
import { getDataLocalStorage, setDataToLocalStorage } from './local_storage';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
  quoteBody: document.querySelector('.quote-card-body'),
};

const renderPaginationList = maxPage => {
  const arr = [];
  for (let i = 1; i <= maxPage; i++) {
    arr.push(Template.itemPagination(i));
  }

  const markHtml = arr.join('');
  refs.paginationBox.innerHTML = markHtml;
};

const renderListHtml = data => {
  const list = data.results.map(i => Template.exCard(i)).join('');
  refs.listEx.innerHTML = list;
};

const isTomorrow = timeSession => {
  if (!timeSession) return;
  const now = new Date();
  const target = new Date(timeSession);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  return target >= tomorrow && target < dayAfterTomorrow;
};

const renderQuote = async () => {
  try {
    const hasLastSession = getDataLocalStorage('last_session');

    if (hasLastSession) {
      const { author: lastAuthor, quote: lastQuote, time } = hasLastSession;
      const isNextDay = isTomorrow(time);

      if (isNextDay) {
        console.log('fetch for next day');
        const res = await data_api.getQuote();
        const itemQuote = Template.quote(res.author, res.quote);
        refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);

        setDataToLocalStorage('last_session', {
          author: res.author,
          quote: res.quote,
          time: Date.now(),
        });
      } else {
        console.log('get data');
        const itemQuote = Template.quote(lastAuthor, lastQuote);
        refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);
      }
    } else {
      console.log('new data');
      const res = await data_api.getQuote();
      const itemQuote = Template.quote(res.author, res.quote);
      refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);

      setDataToLocalStorage('last_session', {
        author: res.author,
        quote: res.quote,
        time: Date.now(),
      });
    }
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
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

try {
  const res = await data_api.getDataByFilter();
  if (refs.btnBox.children[0]) {
    refs.btnBox.children[0].classList.add('active');
  }
  renderListHtml(res);
  renderPaginationList(data_api.totalPages);
  renderQuote();
  setActivePaginationButton(data_api.currentPage);
} catch (error) {
  console.log('🚀 ~ error:', error);
}

const onClickFilterBtn = async e => {
  try {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    const selectedType = clickedBtn.dataset.type;
    if (!selectedType) return;

    data_api.changeSearchType(selectedType);

    [...e.currentTarget.children].forEach(btn =>
      btn.classList.remove('active')
    );
    clickedBtn.classList.add('active');

    const res = await data_api.getDataByFilter();
    renderListHtml(res);
    renderPaginationList(data_api.totalPages);
    setActivePaginationButton(data_api.currentPage);
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

    const res = await data_api.getDataByFilter();
    renderListHtml(res);
    setActivePaginationButton(data_api.currentPage);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

refs.btnBox.addEventListener('click', onClickFilterBtn);
refs.paginationBox.addEventListener('click', onClickPaginationBox);
