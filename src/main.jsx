import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './contexts/useTheme'
import "./i18n/index.js"
import { App } from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </React.StrictMode>

)
