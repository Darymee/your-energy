export const Template = {
  exCard({ filter, name, imgURL }) {
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
};
