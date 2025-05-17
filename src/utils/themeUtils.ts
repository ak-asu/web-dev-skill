/**
 * Detects user's preferred color scheme from system preferences
 * @returns 'dark' if user prefers dark mode, 'light' otherwise
 */
export const getPreferredColorScheme = (): 'dark' | 'light' => {
  // Check if window object is available (for SSR compatibility)
  if (typeof window !== 'undefined' && window.matchMedia) {
    // Check if the user prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }  
  // Default to dark if we can't detect
  return 'dark';
};

/**
 * Gets the current theme from localStorage or falls back to system preference
 * @returns The current theme ('dark' or 'light')
 */
export const getInitialTheme = (): 'dark' | 'light' => {
  // Check if running in a browser environment
  if (typeof window === 'undefined') return 'dark';  
  // Try to get theme from localStorage
  const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  // If there's a saved preference, use that
  if (savedTheme) {
    return savedTheme;
  }  
  // Otherwise, use the system preference
  return getPreferredColorScheme();
};

/**
 * Apply theme class to document
 * @param theme The theme to apply ('dark' or 'light')
 */
export const applyTheme = (theme: 'dark' | 'light'): void => {
  if (typeof document === 'undefined') return;  
  
  // Update the data-theme attribute
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  
  // Add or remove the dark class based on theme
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
  
  // Dispatch a custom event to notify components that theme has changed
  const themeChangeEvent = new CustomEvent('themechange', { detail: { theme } });
  document.dispatchEvent(themeChangeEvent);
  
  // Store in localStorage for persistence
  localStorage.setItem('theme', theme);
};
