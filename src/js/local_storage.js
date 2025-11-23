const STORAGE_KEY = {
  FAVORITES: 'favorites',
  UI_THEME: 'ui-theme',
  LAST_SESSION: 'last_session',
  DAILY_QUOTE: 'daily_quote',
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
    } catch (error) {
      console.error('Error setting last session to localStorage:', error);
    }
  }
};

/* ---------------- FAVORITES ---------------- */

export const getFavoritesLS = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY.FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error parsing favorites from localStorage:', error);
    return [];
  }
};

export const hasFavoriteLS = id => {
  const list = getFavoritesLS();
  return list.includes(id);
};

export const addFavoriteLS = id => {
  try {
    const data = getFavoritesLS();
    if (!data.includes(id)) {
      data.push(id);
      localStorage.setItem(STORAGE_KEY.FAVORITES, JSON.stringify(data));
    }
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
};

export const removeFavoriteLS = id => {
  try {
    const data = getFavoritesLS();
    const updatedData = data.filter(item => item !== id);
    localStorage.setItem(STORAGE_KEY.FAVORITES, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const toggleFavoriteLS = id => {
  if (hasFavoriteLS(id)) {
    removeFavoriteLS(id);
    return false;
  } else {
    addFavoriteLS(id);
    return true;
  }
};

/* ---------------- UI THEME ---------------- */

export const getUIThemeLS = () => {
  return localStorage.getItem(STORAGE_KEY.UI_THEME) || 'light';
};

export const setUIThemeLS = theme => {
  if (theme !== 'light' && theme !== 'dark') return;
  localStorage.setItem(STORAGE_KEY.UI_THEME, theme);
};

/* ---------------- DAILY QUOTE ---------------- */

const isSameDay = timestamp => {
  if (!timestamp) return false;
  const saved = new Date(timestamp);
  const now = new Date();
  return (
    saved.getFullYear() === now.getFullYear() &&
    saved.getMonth() === now.getMonth() &&
    saved.getDate() === now.getDate()
  );
};

export const getDailyQuoteLS = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY.DAILY_QUOTE);
    if (!data) return null;

    const parsed = JSON.parse(data);
    if (isSameDay(parsed.timestamp)) {
      return parsed;
    }
    return null;
  } catch (error) {
    console.error('Error getting daily quote from localStorage:', error);
    return null;
  }
};

export const setDailyQuoteLS = (quote, author) => {
  try {
    const data = {
      quote,
      author,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY.DAILY_QUOTE, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving daily quote to localStorage:', error);
  }
};
