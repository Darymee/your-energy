let file = window.location.pathname.split('/').pop() || 'index.html';
let currentPage =
  file === '' || file === 'index.html' ? 'home' : file.replace('.html', ''); // 'favorites'

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add('is-active');
    link.classList.add('is-current');
  }
});

const navList = document.querySelector('.nav-list');
const indicator = document.querySelector('.nav-indicator');

function moveIndicator(target) {
  if (!indicator || !navList || !target) return;

  const navRect = navList.getBoundingClientRect();
  const rect = target.getBoundingClientRect();

  const offsetLeft = rect.left - navRect.left;

  indicator.style.width = rect.width + 'px';
  indicator.style.transform = `translateX(${offsetLeft}px)`;
}

let activeLink = document.querySelector('.nav-link.is-active') || links[0];
moveIndicator(activeLink);

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    moveIndicator(link);

    activeLink.classList.remove('is-current');
  });

  link.addEventListener('click', event => {
    if (link.dataset.page === currentPage) {
      event.preventDefault();
      moveIndicator(link);
      return;
    }

    links.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
    activeLink = link;
  });
});

navList.addEventListener('mouseleave', () => {
  moveIndicator(activeLink);
  activeLink.classList.add('is-current');
});

window.addEventListener('resize', () => {
  moveIndicator(activeLink);
});
