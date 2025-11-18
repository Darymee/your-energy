import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

class Api {
  #getSearchParams = filter => {
    return {
      filter: filter,
      page: 1,
      limit: 12,
    };
  };

  async getDataByFilter() {
    const res = await axios.get('/filters', {
      params: this.#getSearchParams('Muscles'),
    });
    return res.data;
  }
}

export const data_api = new Api();
