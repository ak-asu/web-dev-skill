import { useState, useEffect, createContext } from 'react';
import type { ReactNode } from 'react';
import { getInitialTheme, applyTheme } from '../utils/themeUtils';

// Define theme type and context type
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with undefined as default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;

// Provider component that will wrap our app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get initial theme from localStorage or system preferences
  const [theme, setTheme] = useState<Theme>(() => {
    return getInitialTheme();
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to document when theme changes
  useEffect(() => {
    // Use the utility function to apply theme
    applyTheme(theme);
  }, [theme]);

  // Provide theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
