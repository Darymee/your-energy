import { data_api } from './api';
import { getFavoritesLS, removeFavoriteLS } from './local_storage';
import { getTemplate, Template } from './template';

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

  try {
    const response = await fetch(`${API_URL}/quote`);
    if (!response.ok) throw new Error('Failed to fetch quote');

    const { author, quote } = await response.json();

    refs.quoteText.textContent = quote;
    refs.quoteAuthor.textContent = author;
  } catch (error) {
    console.error('Error getting quote:', error);
    refs.quoteText.textContent =
      'Your body can stand almost anything. It’s your mind that you have to convince.';
    refs.quoteAuthor.textContent = 'Unknown';
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

export function createMarkup(arr) {
  return arr.map(card => Template[getTemplate('favorite')](card)).join('');
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

  console.log(`Open modal for exercise ID: ${id}`);
}
