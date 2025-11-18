import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

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

const getSearchParams = filter => {
  return {
    filter: filter,
    page: 1,
    limit: 12,
  };
};

const getDataByFilters = async () => {
  const res = await axios.get('/filters', {
    params: getSearchParams('Muscles'),
  });
  console.log(res.data);
  return res.data;
};

try {
  const res = await getDataByFilters();
  const list = res.results.map(i => createImgCard(i)).join('');
  console.log('🚀 ~ list:', list);
  refs.listEx.innerHTML = list;
} catch (error) {}
