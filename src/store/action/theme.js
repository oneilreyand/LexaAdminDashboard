export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE'
});

export const setDarkMode = (isDark) => ({
  type: 'SET_DARK_MODE',
  payload: isDark
});
