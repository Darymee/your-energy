import { Modal, initModalSystem } from './modal';
import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';
const LS_KEY = 'favoriteExercises';
const overlay = document.querySelector('[data-overlay]');
const overlayContent = document.querySelector('[data-overlay-content]');

onOpenModal('64f389465ae26083f39b17a4');
initModalSystem();

function getFavoriteIds() {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
}

function setFavorites(ids) {
    localStorage.setItem(LS_KEY, JSON.stringify(ids));
}

async function onOpenModal(id) {
    try {
        const { data } = await axios.get(`${BASE_URL}/exercises/${id}`);

        const exerciseId = data._id || id;

        const favoriteIds = getFavoriteIds();

        const isFavorite = favoriteIds.includes(exerciseId);

        const textBtn = textForBtn(isFavorite);

        const html = modalExerciseTemplate(data, textBtn);
        overlayContent.innerHTML = html;
        overlay.classList.add('is-open');

        const favoriteBtn = overlayContent.querySelector('.favorite-btn');
        const favoriteBtnText = favoriteBtn?.querySelector('.favorite-btn-text');

        if (favoriteBtn && favoriteBtnText) {
            favoriteBtn.addEventListener('click', () => {
                console.log('click');
                const ids = getFavoriteIds();

                if (ids.includes(exerciseId)) {
                    const newIds = ids.filter(storeId => storeId !== exerciseId);
                    setFavorites(newIds);
                    favoriteBtnText.textContent = 'Add to favorites';
                } else {
                    const newIds = [...ids, exerciseId];
                    setFavorites(newIds);
                    favoriteBtnText.textContent = 'Delete to favorites';
                }
            });
        }
    } catch (err) {
        console.error(err);
    }
}

function makeStars(rating) {
    const safeRating = Math.max(0, Math.min(5, rating));
    const fullCount = Math.floor(safeRating);
    const emptyCount = 5 - fullCount;
    const full = Array(fullCount)
        .fill(
            `<svg class="full" width="18" height="18">
        <use href="./img/sprite.svg#icon-star"></use>
        </svg>`
        )
        .join('');
    const empty = Array(emptyCount)
        .fill(
            `<svg class="empty" width="18" height="18">
        <use href="./img/sprite.svg#icon-star"></use>
        </svg>`
        )
        .join('');
    return full + empty;
}

function textForBtn(isFavorite) {
    return isFavorite
        ? `<span class="favorite-btn-text">Delete to fovorites</span>
          <svg class="modal-btn-icon" width="18" height="18">
                    <use href="./img/sprite.svg#icon-trash"></use>
                    </svg>`
        : `<span class="favorite-btn-text">Add to favorites</span>
                    <svg class="modal-btn-icon" width="18" height="18">
                    <use href="./img/sprite.svg#icon-heart"></use>
                    </svg>`;
}

function modalExerciseTemplate(data, textBtn) {
    const {
        name,
        rating,
        gifUrl,
        target,
        bodyPart,
        equipment,
        popularity,
        burnedCalories,
        description,
        time,
    } = data;
    const starsHtml = makeStars(rating);
    return `
        <div class="modal-exercises">
                <div class="modal-img-wrapper">
                <img class="modal-img" src="${gifUrl}" alt="${name}" />
            </div>
            <div class="modal-details">
                <p class="modal-title">${name}</p>
                <div class="modal-rating">


                    <div class="modal-rating-value">${rating}</div>
                    <div class="modal-rating-stars">${starsHtml}</div>
                </div>
                <div class="info-grid">
                    <div class="info-row">
                        <div class="info-grid-item">
                            <div class="info-grid-label">Target</div>
                            <div class="info-grid-value">${target}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Body Part</div>
                            <div class="info-grid-value">${bodyPart}</div>
                        </div>

                        <div class="info-grid-item">
                            <div class="info-grid-label">Equipment</div>
                            <div class="info-grid-value">${equipment}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Popular</div>
                            <div class="info-grid-value">${popularity}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Burned calories</div>
                            <div class="info-grid-value">${burnedCalories} / ${time}</div>
                        </div>
                    </div>
                </div>

                <p class="modal-description">${description}</p>
<div class="section-btn">
                    <button type="button" class="modal-btn favorite-btn">${textBtn}
                                        </button>
                     <button type="button" class="modal-btn rating-btn">Give a rating
                   
                    </button>
</div>
            </div>
        </div>`;
}
