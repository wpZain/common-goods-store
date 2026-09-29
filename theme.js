(() => {
  const storageKey = 'common-goods-theme';
  const root = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey) || 'light';
    } catch {
      return 'light';
    }
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    root.setAttribute('data-bs-theme', theme);

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      const label = `Switch to ${nextTheme} theme`;
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.innerHTML = `<i class="bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}" aria-hidden="true"></i>`;
    });
  }

  setTheme(getSavedTheme());

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch {
        return;
      }
    });
  });
})();