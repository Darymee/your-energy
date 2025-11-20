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

const isFutureDay = timestampMs => {
  const now = new Date();

  const target = new Date(timestampMs);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const targetDay = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate()
  );
  return targetDay > today;
};

const renderQuote = async () => {
  try {
    const hasLastSession = getDataLocalStorage('last_session');

    if (hasLastSession) {
      const { author: lastAuthor, quote: lastQuote, time } = hasLastSession;
      const isFutureDate = isFutureDay(time);

      if (isFutureDate) {
        const res = await data_api.getQuote();
        const itemQuote = Template.quote(res.author, res.quote);
        refs.quoteBody.insertAdjacentHTML('beforeend', itemQuote);

        setDataToLocalStorage('last_session', {
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

      setDataToLocalStorage('last_session', {
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
