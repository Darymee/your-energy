import { data_api } from './api';
const iconPath = `${import.meta.env.BASE_URL}img/sprite.svg`;
import { hasFavoriteLS } from './local_storage';

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function makeStars(rating) {
  const safeRating = Math.round(Math.max(0, Math.min(5, Number(rating) || 0)));
  const full = Array(safeRating)
    .fill(
      `<svg class="full" width="18" height="18">
        <use href="${iconPath}#icon-star"></use>
        </svg>`
    )
    .join('');
  const empty = Array(5 - safeRating)
    .fill(
      `<svg class="empty" width="18" height="18">
        <use href="${iconPath}#icon-star"></use>
        </svg>`
    )
    .join('');
  return full + empty;
}

export const Template = {
  exerciseCard({ filter, name, imgURL }) {
    const capitalizeStr = str => {
      if (!str) return '';
      const parseStr = str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      return parseStr;
    };

    return `<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${imgURL});'>
              <div class="exercises-wrap-info">
                <p>${capitalizeStr(name)}</p>
                <p>${filter}</p>
              </div>
            </div>
          </li>`;
  },

  itemPagination(numPage) {
    return `<button class="pagination-item" type="button">
          ${numPage}
        </button>`;
  },

  quote(author, quote) {
    return `<p class="quote-card-text">
             ${quote}
            </p>
            <p class="quote-card-author">${author}</p>`;
  },

  skeletonExMarkup(count = data_api.limitPage) {
    return Array.from({ length: count })
      .map(
        () => `
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`
      )
      .join('');
  },

  favoriteCard({ _id, name, burnedCalories, time, bodyPart, target }) {
    return `
      <li class="favorites-item" data-id=${_id}>
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>

           ${
             hasFavoriteLS(_id)
               ? `<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${_id}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${iconPath}#icon-trash"></use>
                 </svg>
               </button>`
               : ''
           }

          <button class="card-btn-start js-start-btn" data-id="${_id}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${iconPath}#icon-arrow-start"></use>
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
    `;
  },

  exerciseModal({
    _id,
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
  }) {
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

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${
                    hasFavoriteLS(_id)
                      ? 'Remove from favorites'
                      : 'Add to favorites'
                  }
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${
                        hasFavoriteLS(_id) ? 'icon-trash' : 'icon-heart'
                      }"  data-fav-icon></use>
                    </svg>

                <button type="button" class="modal-btn-rating" data-btn-rating>
                  Give a rating
                </button>
            </div>
        </div>
      </div>`;
  },
};
