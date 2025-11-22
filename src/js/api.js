import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class Api {
  currentPage = 1;
  totalPages = 1;
  limitPage = 9;
  filterType = 'Muscles';

  exercisesFilters = {
    bodypart: null,
    muscles: null,
    equipment: null,
    keyword: '',
  };

  constructor() {
    this.#updateLimitFromScreen();
    window.addEventListener('resize', this.#onSizeScreen);
  }

  #updateLimitFromScreen() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    this.limitPage = isMobile ? 9 : 12;
  }

  #onSizeScreen = () => {
    const prev = this.limitPage;
    this.#updateLimitFromScreen();
    if (prev !== this.limitPage) {
      this.resetPage();
    }
  };

  #handleError = error => {
    console.error('API Error:', error);
    return Promise.reject(
      error.response?.data?.message ||
        error.message ||
        'An unexpected error occurred'
    );
  };

  #paginationParams(extra = {}) {
    return {
      page: this.currentPage,
      limit: this.limitPage,
      ...extra,
    };
  }

  #mapFilterTypeToKey(type) {
    const normalized = String(type).toLowerCase();
    if (normalized.includes('muscle')) return 'muscles';
    if (normalized.includes('body')) return 'bodypart';
    if (normalized.includes('equipment')) return 'equipment';
    return null;
  }

  setPage(page) {
    const next = Number(page);
    if (Number.isFinite(next) && next > 0) this.currentPage = next;
  }

  resetPage() {
    this.currentPage = 1;
  }

  hasMorePages() {
    return this.currentPage < this.totalPages;
  }

  changeSearchType(field) {
    this.filterType = field;
    this.resetPage();
  }

  async getDataByFilter() {
    try {
      const response = await axios.get('/filters', {
        params: this.#paginationParams({ filter: this.filterType }),
      });

      this.totalPages = response.data.totalPages || 1;
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  setExercisesFilters(partial = {}) {
    // дозволяє комбінувати bodypart+muscles+equipment+keyword
    this.exercisesFilters = {
      ...this.exercisesFilters,
      ...partial,
    };
    this.resetPage();
  }

  clearExercisesFilters() {
    this.exercisesFilters = {
      bodypart: null,
      muscles: null,
      equipment: null,
      keyword: '',
    };
    this.resetPage();
  }

  setCategoryFilter(filterType, name, { resetOthers = true } = {}) {
    const key = this.#mapFilterTypeToKey(filterType);
    if (!key) return;

    if (resetOthers) {
      const { keyword } = this.exercisesFilters;
      this.exercisesFilters = {
        bodypart: null,
        muscles: null,
        equipment: null,
        keyword: keyword || '',
        [key]: name || null,
      };
    } else {
      this.exercisesFilters = {
        ...this.exercisesFilters,
        [key]: name || null,
      };
    }
  }

  async getExercises(extraFilters = {}) {
    try {
      const merged = {
        ...this.exercisesFilters,
        ...extraFilters,
      };

      const cleanedFilters = Object.fromEntries(
        Object.entries(merged).filter(
          ([, v]) => v !== null && v !== undefined && v !== ''
        )
      );
      console.log('🚀 ~ cleanedFilters:', cleanedFilters);

      const response = await axios.get('/exercises', {
        params: this.#paginationParams(cleanedFilters),
      });
      console.log('🚀 ~ response:', response);

      this.totalPages = response.data.totalPages || 1;
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }

  async getExerciseByCategory(filter, name, page = 1, limit = 10) {
    try {
      const params = {
        ...filter,
        ...name,
        ...page,
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
