import { data_api } from './api';
const iconPath = './img/sprite.svg';

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
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

    return `<li class='exercises-item' data-name="${name}">
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
    `;
  },
};
