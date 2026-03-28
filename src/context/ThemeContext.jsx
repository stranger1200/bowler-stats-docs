import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'bowler-stats-theme';
const TRANSITION_MS = 420;

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    document.body.classList.add('theme-switching');
    setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
    window.setTimeout(() => {
      document.body.classList.remove('theme-switching');
    }, TRANSITION_MS);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
