export const Template = {
  templateExCard({ filter, name, imgURL }) {
    return `<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${imgURL});'>
              <div class="exercises-wrap-info">
                <p>${name}</p>
                <p>${filter}</p>
              </div>
            </div>
          </li>`;
  },

  templateItemPagination(numPage) {
    return `<button class="pagination-item" type="button">
          ${numPage}
        </button>`;
  },
};
