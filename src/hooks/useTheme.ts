import { useState, useEffect } from 'react';
import { ThemeConfig } from '../types';

const themes: ThemeConfig[] = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
];

export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig['value']>(() => {
    // Check for stored preference or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      return storedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Store preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    themes,
  };
}