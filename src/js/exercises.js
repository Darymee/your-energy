import { data_api } from './api';
import { Template } from './template';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
};

const renderPaginationList = maxPage => {
  const arr = [];
  for (let i = 1; i <= maxPage; i++) {
    arr.push(Template.templateItemPagination(i));
  }

  const markHtml = arr.join('');
  refs.paginationBox.innerHTML = markHtml;
};

const renderListHtml = data => {
  const list = data.results.map(i => Template.templateExCard(i)).join('');
  refs.listEx.innerHTML = list;
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
