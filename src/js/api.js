import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class Api {
  totalPages = 0;
  currentPage = 1;
  limitPage = 9;
  filterType = 'Muscles';

  constructor() {
    this.#isMobileScreen();
    window.addEventListener('resize', this.#onSizeScreen);
  }

  #isMobileScreen() {
    const { matches: isMobileScreen } = window.matchMedia('(max-width: 767px)');
    this.limitPage = isMobileScreen ? 9 : 12;
  }

  #onSizeScreen = () => {
    const currWidthScreen = window.innerWidth;
    const nextLimit = currWidthScreen >= 768 ? 12 : 9;
    if (nextLimit !== this.limitPage) {
      this.limitPage = nextLimit;
      this.currentPage = 1;
    }
  };

  #getSearchParams() {
    return {
      filter: this.filterType,
      page: this.currentPage,
      limit: this.limitPage,
    };
  }

  #handleError = error => {
    console.error('API Error:', error);
    return Promise.reject(
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred'
    );
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
    try {
      const response = await axios.get('/filters', {
        params: this.#getSearchParams(),
      });

      this.totalPages = response.data.totalPages;

      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async getExercises(filters = {}, page = 1, limit = 10) {
    try {
      const params = {
        ...filters,
        page,
        limit,
      };

      const response = await axios.get('/exercises', { params });
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  // FIX #4: Properly map filterType + name to correct API parameter
  async getExerciseByCategory(filterType, name, page = 1, limit = 10) {
    try {
      // Map the UI filter type to the correct API query parameter
      const filterKeyMap = {
        'Muscles': 'muscles',
        'Body parts': 'bodypart',
        'Equipment': 'equipment',
      };

      const paramKey = filterKeyMap[filterType];

      if (!paramKey) {
        throw new Error(`Unknown filter type: ${filterType}`);
      }

      const params = {
        [paramKey]: name.toLowerCase(),
        page,
        limit,
      };

      const response = await axios.get('/exercises', { params });
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async getExerciseById(exerciseId) {
    try {
      const response = await axios.get(`/exercises/${exerciseId}`);
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async rateExercise(exerciseId, rating, email, review = '') {
    try {
      if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
      }

      const response = await axios.patch(`/exercises/${exerciseId}/rating`, {
        rate: rating,
        email,
        review,
      });
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async getQuote() {
    try {
      const response = await axios.get('/quote');
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async subscribe(email) {
    try {
      const response = await axios.post('/subscription', { email });
      return response;
    } catch (error) {
      return this.#handleError(error);
    }
  }
}

export const data_api = new Api();
