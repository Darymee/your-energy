import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

class Api {
  totalPages = 0;
  currentPage = 1;

  #getSearchParams = (filter = 'Muscles') => {
    return {
      filter: filter,
      page: this.currentPage,
      limit: 12,
    };
  };

  incrementCurrentPage() {
    if(this.currentPage>=this.totalPages) return
    this.currentPage += 1;
  }

  async getDataByFilter(typeFilter) {
    const res = await axios.get('/filters', {
      params: this.#getSearchParams(typeFilter),
    });

    this.totalPages = res.data.totalPages;
    this.currentPage = res.data.page;
    console.log('res', res);
    return res.data;
  }
}

export const data_api = new Api();
