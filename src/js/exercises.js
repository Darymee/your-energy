import { data_api } from './api';

const refs = {
  listEx: document.querySelector('.exercises-list'),
};

const createImgCard = ({ filter, name, imgURL }) => {
  return ` <li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${imgURL});'>
              <div class="exercises-wrap-info">
                <p>${name}</p>
                <p>${filter}</p>
              </div>
            </div>
          </li>
`;
};

try {
  const res = await data_api.getDataByFilter();
  const list = res.results.map(i => createImgCard(i)).join('');
  refs.listEx.innerHTML = list;
} catch (error) {}
