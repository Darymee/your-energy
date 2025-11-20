import { Modal } from './modal';

Modal('<p>Test</p>');

// function makeStars(rating) {
//   const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
//   const full = Array(safeRating)
//     .fill(
//       `<svg class="full" width="18" height="18">
//         <use href="./img/sprite.svg#icon-star"></use>
//         </svg>`
//     )
//     .join('');
//   const empty = Array(5 - safeRating)
//     .fill(
//       `<svg class="empty" width="18" height="18">
//         <use href="./img/sprite.svg#icon-star"></use>
//         </svg>`
//     )
//     .join('');
//   return full + empty;
// }

// function modalExerciseTemplate(data) {
//   const {
//     name,
//     rating,
//     gifUrl,
//     target,
//     bodyPart,
//     equipment,
//     popularity,
//     burnedCalories,
//     description,
//     time,
//   } = data;
//   const starsHtml = makeStars(rating);
//   return `
//         <div class="modal">
//         <div class="modal-close">
//       <svg width="18" height="18">
// <use class="icon-close" href="./img/sprite.svg#icon-close"></use>
//       </svg>
//         </div>
//             <div class="modal-img-wrapper">
//                 <img class="modal-img" src="${gifUrl}" alt="${name}" />
//             </div>
//             <div class="modal-details">
//                 <p class="modal-title">${name}</p>
//                 <div class="modal-rating">
//                     <div class="modal-rating-value">${rating}</div>
//                     <div class="modal-rating-stars">${starsHtml}</div>
//                 </div>
//                 <div class="info-grid">
//                     <div class="info-row">
//                         <div class="info-grid-item">
//                             <div class="info-grid-label">Target</div>
//                             <div class="info-grid-value">${target}</div>
//                         </div>
//                         <div class="info-grid-item">
//                             <div class="info-grid-label">Body Part</div>
//                             <div class="info-grid-value">${bodyPart}</div>
//                         </div>

//                         <div class="info-grid-item">
//                             <div class="info-grid-label">Equipment</div>
//                             <div class="info-grid-value">${equipment}</div>
//                         </div>
//                         <div class="info-grid-item">
//                             <div class="info-grid-label">Popular</div>
//                             <div class="info-grid-value">${popularity}</div>
//                         </div>
//                         <div class="info-grid-item">
//                             <div class="info-grid-label">Burned calories</div>
//                             <div class="info-grid-value">${burnedCalories} / ${time}</div>
//                         </div>
//                     </div>
//                 </div>

//                 <p class="modal-description">${description}</p>

//                     <button type="button" class="modal-btn">Add to favorites
//                     <svg class="modal-btn-icon" width="18" height="18">
//                     <use href="./img/sprite.svg#icon-heart"></use>
//                     </svg>
//                     </button>

//             </div>
//         </div>`;
// }
