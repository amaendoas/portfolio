import React from 'react'
import { AppRoutes } from "./routes";
import { ThemeProvider} from 'styled-components';
import { useTheme } from './contexts/theme'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark';
import GlobalStyle from "./styles/global";
import "./i18n/index.js"

export function App() {
  const { theme } = useTheme();

return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle/>
      <AppRoutes />
    </ThemeProvider>
)
}