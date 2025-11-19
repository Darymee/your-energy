import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

class Api {
  totalPages = 0;
  currentPage = 1;
  limitPage = 12;
  filterType = 'Muscles';

  #getSearchParams = () => {
    return {
      filter: this.filterType,
      page: this.currentPage,
      limit: this.limitPage,
    };
  };

  incrementPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }

  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  changeSearchType(field) {
    this.filterType = field;

    this.currentPage = 1;
  }

  hasMorePages() {
    return this.currentPage < this.totalPages;
  }

  async getDataByFilter() {
    const res = await axios.get('/filters', {
      params: this.#getSearchParams(),
    });

    this.totalPages = res.data.totalPages;

    return res.data;
  }
}

export const data_api = new Api();
