import ReactDOM from "react-dom/client"
import { AppContextProvider } from "./contexts"
import "./i18n/index.js"
import { App } from "./App"
import { StrictMode } from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
)
