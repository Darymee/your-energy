import axios from 'axios';
import { initModalRating } from './modal-rating';
import { Modal, initModalSystem } from './modal';

const BASE_URL = 'https://your-energy.b.goit.study/api';
const LS_KEY = 'favoriteExercises';
const overlayContent = document.querySelector('[data-overlay-content]');

initModalSystem();

const exerciseTrigger = document.querySelector(
    '[data-open-overlay="exercise"]'
);
if (exerciseTrigger) {
    exerciseTrigger.addEventListener('click', () => {
        onOpenModal('64f389465ae26083f39b17a4');
    });
}

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

        Modal('exercise', html);

        const ratingBtn = overlayContent.querySelector('.rating-btn');
        if (ratingBtn) {
            ratingBtn.addEventListener('click', () => {
                const ratingTrigger = document.querySelector(
                    '[data-open-overlay="rating"]'
                );
                if (!ratingTrigger) return;
                ratingTrigger.click();
                initModalRating();
            });
        }

        const favoriteBtn = overlayContent.querySelector('.favorite-btn');
        const favoriteBtnText = favoriteBtn?.querySelector('.favorite-btn-text');

        if (favoriteBtn && favoriteBtnText) {
            favoriteBtn.addEventListener('click', () => {
                toggleFavorite(exerciseId, favoriteBtnText);
            });
        }
    } catch (err) {
        console.error(err);
    }
}

function toggleFavorite(exerciseId, favoriteBtnText) {
    let ids = getFavoriteIds();
    if (ids.includes(exerciseId)) {
        const newIds = ids.filter(storeId => storeId !== exerciseId);
        setFavorites(newIds);
        favoriteBtnText.textContent = 'Add to favorites';
    } else {
        ids.push(exerciseId);
        setFavorites(ids);
        favoriteBtnText.textContent = 'Delete to favorites';
    }
}

function textForBtn(isFavorite) {
    return isFavorite
        ? `<span class="favorite-btn-text">Delete to favorites</span>
          <svg class="modal-btn-icon" width="18" height="18">
                    <use href="./img/sprite.svg#icon-trash"></use>
                    </svg>`
        : `<span class="favorite-btn-text">Add to favorites</span>
                    <svg class="modal-btn-icon" width="18" height="18">
                    <use href="./img/sprite.svg#icon-heart"></use>
                    </svg>`;
}

function makeRatingStarsMarkup(rating) {
    const num = Number(rating) || 0;
    const safeRating = Math.max(0, Math.min(5, num));

    const fullStars = Math.floor(safeRating);
    let starsHTML = '';
    for (let i = 1; i <= 5; i += 1) {
        const isActive = i <= fullStars ? 'active' : '';
        starsHTML += `<span data-rate="${i}" class="${isActive}">★</span>`;
    }
    return `
    <div class="rating-stars">
    <span class="rating-value">${safeRating.toFixed(1)}</span>
    <div class="stars">${starsHTML}</div>
    </div>`;
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
    const starsHtml = makeRatingStarsMarkup(rating);
    return `
        <div class="modal-exercises">
                <div class="modal-img-wrapper">
                <img class="modal-img" src="${gifUrl}" alt="${name}" />
            </div>
            <div class="modal-details">
                <p class="modal-title">${name}</p>
             ${starsHtml}
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
