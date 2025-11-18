import { data_api } from './api';

const refs = {
  listEx: document.querySelector('.exercises-list'),
  btnBox: document.querySelector('.exercises-thumb-btn'),
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

const renderHtml = data => {
  const list = data.results.map(i => templateExCard(i)).join('');
  refs.listEx.innerHTML = list;
};

try {
  const res = await data_api.getDataByFilter();
  renderHtml(res);
} catch (error) {}

const onClickBtn = async e => {
  try {
    const selectedType = e.target.dataset.type;
    const res = await data_api.getDataByFilter(selectedType);
    renderHtml(res);
  } catch (error) {}
};

refs.btnBox.addEventListener('click', onClickBtn);
