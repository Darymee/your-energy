const STORAGE_KEY = {
  FAVOTIRES: 'favorites',
  UI_THEME: 'ui-theme',
  LAST_SESSION: 'last_session',
};

/* ---------------- Last Session ---------------- */

export const getLastSessionLS = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY.LAST_SESSION);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing last session from localStorage:', error);
    return null;
  }
};

export const setLastSessionLS = value => {
  if (value) {
    try {
      localStorage.setItem(STORAGE_KEY.LAST_SESSION, JSON.stringify(value));
    } catch (error) {}
    console.error('Error setting last session to localStorage:', error);
  }
};

/* ---------------- FAVORITES ---------------- */

export const getFavoritesLS = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY.FAVOTIRES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error parsing favorites from localStorage:', error);
    return [];
  }
};

export const addFavoriteLS = id => {
  try {
    const data = getFavoritesLS();

    if (!data.includes(id)) {
      data.push(id);
      localStorage.setItem(STORAGE_KEY.FAVOTIRES, JSON.stringify(data));
    }
  } catch (error) {
    console.error('Error adding favorites to localStorage:', error);
  }
};

export const removeFavoriteLS = id => {
  try {
    const data = getFavoritesLS();
    const updatedData = data.filter(item => item !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error removing favorite item from localStorage:', error);
  }
};

/* ---------------- UI THEME ---------------- */

export const getUIThemeLS = () => {
  return localStorage.getItem(THEME_KEY) || 'light';
};

export const setUIThemeLS = theme => {
  if (theme !== 'light' && theme !== 'dark') return;
  localStorage.setItem(STORAGE_KEY.UI_THEME, theme);
};
