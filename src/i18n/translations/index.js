import engHome from "../../pages/Home/home-eng.js"
import ptBrHome from "../../pages/Home/home-pt-br.js"
import languageSwitchEng from "../../components/LanguageSwitch/languageSwitch-eng.js"
import languageSwitchPtBR from "../../components/LanguageSwitch/languageSwitch-ptBR.js"

export const languages = {
  eng: {
    translation: {
      ...engHome,
      ...languageSwitchEng
    }
  },
  ptBr: {
    translation: {
      ...ptBrHome,
      ...languageSwitchPtBR
    }
  }
}