import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import { ThemeConfig } from '../types';

interface ThemeContextType {
  theme: ThemeConfig['value'];
  setTheme: (theme: ThemeConfig['value']) => void;
  toggleTheme: () => void;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeContext = useTheme();
  
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
}