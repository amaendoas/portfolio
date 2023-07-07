import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from "./routes";
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from "./styles/global";
import "./i18n/index.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
)
