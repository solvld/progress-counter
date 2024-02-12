import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDarkTheme = theme === 'dark';

  return [onToggleTheme, isDarkTheme];
}