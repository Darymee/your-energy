import { data_api } from './api';
import { handleExerciseItemClick } from './exercises';
import {
  getFavoritesLS,
  removeFavoriteLS,
  getDailyQuoteLS,
  setDailyQuoteLS,
} from './local_storage';
import { Template } from './template';

const API_URL = 'https://your-energy.b.goit.study/api';

const refs = {
  quoteText: document.querySelector('.js-quote-text'),
  quoteAuthor: document.querySelector('.js-quote-author'),
  listContainer: document.querySelector('.js-favorites-list'),
  emptyMessage: document.querySelector('.js-favorites-empty'),
};

document.addEventListener('DOMContentLoaded', () => {
  fetchQuote();
  renderFavorites();
});

async function fetchQuote() {
  if (!refs.quoteText) return;

  const fallbackQuote = {
    quote:
      'Your body can stand almost anything. It's your mind that you have to convince.',
    author: 'Unknown',
  };

  // Check localStorage cache first
  const cachedQuote = getDailyQuoteLS();
  if (cachedQuote) {
    refs.quoteText.textContent = cachedQuote.quote;
    refs.quoteAuthor.textContent = cachedQuote.author;
    return;
  }

  // Fetch from API if no cache
  try {
    const response = await fetch(`${API_URL}/quote`);
    if (!response.ok) throw new Error('Failed to fetch quote');

    const { author, quote } = await response.json();

    refs.quoteText.textContent = quote;
    refs.quoteAuthor.textContent = author;
    // Save to cache
    setDailyQuoteLS(quote, author);
  } catch (error) {
    console.error('Error getting quote:', error);
    refs.quoteText.textContent = fallbackQuote.quote;
    refs.quoteAuthor.textContent = fallbackQuote.author;
  }
}

async function getFavoriteExercisesAsync() {
  const ids = getFavoritesLS();

  if (ids.length === 0) return [];

  const requests = ids.map(id => data_api.getExerciseById(id));
  const exercises = await Promise.all(requests);

  return exercises;
}

async function renderFavorites() {
  if (!refs.listContainer) return;

  const favorites = await getFavoriteExercisesAsync();

  if (favorites.length === 0) {
    refs.listContainer.innerHTML = '';
    refs.emptyMessage.classList.remove('is-hidden');
  } else {
    refs.emptyMessage.classList.add('is-hidden');
    refs.listContainer.innerHTML = createMarkup(favorites);
    addEventListeners();
  }
}

function createMarkup(arr) {
  return arr.map(card => Template.favoriteCard(card)).join('');
}

function addEventListeners() {
  const deleteBtns = refs.listContainer.querySelectorAll('.js-delete-btn');
  const startBtns = refs.listContainer.querySelectorAll('.js-start-btn');

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', handleDelete);
  });

  startBtns.forEach(btn => {
    btn.addEventListener('click', handleStart);
  });
}

function handleDelete(event) {
  const btn = event.currentTarget;
  const id = btn.dataset.id;

  removeFavoriteLS(id);
  renderFavorites();
}

function handleStart(event) {
  const btn = event.currentTarget;
  const id = btn.dataset.id;

  handleExerciseItemClick(event, id);
}