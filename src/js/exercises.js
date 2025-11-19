import { data_api } from './api';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
  paginationBox: document.querySelector('.pagination'),
};

const templateExCard = ({ filter, name, imgURL }) => {
  return `<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${imgURL});'>
              <div class="exercises-wrap-info">
                <p>${name}</p>
                <p>${filter}</p>
              </div>
            </div>
          </li>
`;
};

const templateItemPagination = numPage => {
  return `<button class="pagination-item" type="button">
          ${numPage}
        </button>`;
};

const renderPaginationList = maxPage => {
  const arr = [];
  for (let i = 1; i <= maxPage; i++) {
    arr.push(templateItemPagination(i));
  }

  const markHtml = arr.join('');
  refs.paginationBox.innerHTML = markHtml;
};

const renderListHtml = data => {
  const list = data.results.map(i => templateExCard(i)).join('');
  refs.listEx.innerHTML = list;
};

try {
  const res = await data_api.getDataByFilter();
  refs.btnBox.children[0].classList.add('active');
  renderListHtml(res);
  renderPaginationList(data_api.totalPages);
  console.log(data_api.currentPage);
  refs.paginationBox.children[data_api.currentPage - 1].classList.add(
    'pagination-item-active'
  );
} catch (error) {
  console.log('🚀 ~ error:', error);
}

const onClickFilterBtn = async e => {
  try {
    const selectedType = e.target.dataset.type;
    data_api.changeSearchType(selectedType);

    [...e.currentTarget.children].forEach(btn =>
      btn.classList.remove('active')
    );

    const res = await data_api.getDataByFilter();
    renderListHtml(res);
    renderPaginationList(data_api.totalPages);
    refs.paginationBox.children[data_api.currentPage - 1].classList.add(
      'pagination-item-active'
    );
    e.target.classList.add('active');
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

const onClickPaginationBox = async e => {
  try {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    const clickedNumPage = Number(clickedBtn.textContent.trim());

    if (clickedNumPage === data_api.currentPage) {
      console.log(
        'clickedNumPage === data_api.currentPage',
        clickedNumPage === data_api.currentPage
      );
    } else {
      data_api.incrementPage();
      const res = await data_api.getDataByFilter();
      renderListHtml(res);
    }
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

refs.btnBox.addEventListener('click', onClickFilterBtn);
refs.paginationBox.addEventListener('click', onClickPaginationBox);
