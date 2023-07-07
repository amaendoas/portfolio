import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { languages } from "./translations"

i18n.use(initReactI18next).init({
  fallbackLng: "ptBr",
  interpolation: {
    escapeValue: false
  },
  resources: languages
})

export default i18n