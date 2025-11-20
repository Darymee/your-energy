import { data_api } from './api';
import { getFavoritesLS, removeFavoriteLS } from './local_storage';

const API_URL = 'https://your-energy.b.goit.study/api';
const iconPath = './img/sprite.svg';

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

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, burnedCalories, time, bodyPart, target }) => `
      <li class="favorites-item">
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
          <button class="card-btn-delete js-delete-btn" data-id="${_id}" type="button" aria-label="Remove">
            <svg class="card-icon-trash" width="16" height="16">
              <use href="${iconPath}#icon-trash"></use>
            </svg>
          </button>
          
          <button class="card-btn-start js-start-btn" data-id="${_id}" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${iconPath}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${iconPath}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${capitalize(name)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${burnedCalories} / ${time} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${capitalize(bodyPart)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${capitalize(target)}</span>
          </li>
        </ul>
      </li>
    `
    )
    .join('');
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
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
