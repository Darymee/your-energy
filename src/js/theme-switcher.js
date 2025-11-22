const checkbox = document.querySelector('.theme-switch .checkbox');
const root = document.documentElement;

const storedTheme = localStorage.getItem('theme');
const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initialTheme);
checkbox.checked = initialTheme === 'dark';

function withThemeTransition(callback) {
  root.classList.add('theme-transition');

  window.setTimeout(() => {
    root.classList.remove('theme-transition');
  }, 400);

  callback();
}

checkbox.addEventListener('change', e => {
  const newTheme = e.target.checked ? 'dark' : 'light';

  withThemeTransition(() => {
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
