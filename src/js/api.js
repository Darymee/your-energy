import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class Api {
  #getSearchParams = (filter = 'Muscles', page = 1, limit = 12) => {
    return {
      filter,
      page,
      limit,
    };
  };

  #handleError = error => {
    console.error('API Error:', error);
    return Promise.reject(
      error.response?.data?.message ||
        error.message ||
        'An unexpected error occurred'
    );
  };

  async getDataByFilter(typeFilter, page = 1, limit = 12) {
    try {
      const response = await axios.get('/filters', {
        params: this.#getSearchParams(typeFilter, page, limit),
      });
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
      return response.data;
    } catch (error) {
      return this.#handleError(error);
    }
  }
}

export const data_api = new Api();
