/**
 * Theme handling — persists the chosen theme (light/dark) in
 * localStorage and falls back to the visitor's OS preference
 * the first time they arrive.
 */
(function () {
  const STORAGE_KEY = 'draftedux_theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function updateToggleUI(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Apply as early as possible to avoid a flash of the wrong theme.
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    updateToggleUI(initialTheme);

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      updateToggleUI(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {
        /* localStorage unavailable — theme just won't persist */
      }
    });
  });
})();
