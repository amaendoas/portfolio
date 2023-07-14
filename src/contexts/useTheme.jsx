import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('@theme') || 'light');

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('@theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}