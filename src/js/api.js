import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

class Api {
  #getSearchParams = (filter = 'Muscles') => {
    return {
      filter: filter,
      page: 1,
      limit: 12,
    };
  };

  async getDataByFilter(typeFilter) {
    const res = await axios.get('/filters', {
      params: this.#getSearchParams(typeFilter),
    });
    return res.data;
  }
}

export const data_api = new Api();
