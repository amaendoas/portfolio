import { ThemeContextProvider } from './theme';

export function AppContextProvider({ children }) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
}
