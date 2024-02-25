import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(()=> {
    const mode = JSON.parse(localStorage.getItem('mode'))
    return mode || 'dark'
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(prev => {
      const theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', JSON.stringify(theme))
      return theme
    });
  };

  const isDarkTheme = theme === 'light';

  return [onToggleTheme, isDarkTheme];
}