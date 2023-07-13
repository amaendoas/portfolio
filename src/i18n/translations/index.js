import engHome from "../../pages/Home/home-eng.js"
import ptBrHome from "../../pages/Home/home-pt-br.js"
import languageSwitchEng from "../../components/LanguageSwitch/languageSwitch-eng.js"
import languageSwitchPtBR from "../../components/LanguageSwitch/languageSwitch-ptBR.js"
import headerPtBR from "../../components/Header/header-ptBr.js"
import headerEng from "../../components/Header/header-eng.js"
import aboutEng from "../../pages/About/about-eng.js"
import aboutPtBr from "../../pages/About/about-ptBR.js"

export const languages = {
  eng: {
    translation: {
      ...engHome,
      ...languageSwitchEng,
      ...headerEng,
      ...aboutEng
    }
  },
  ptBr: {
    translation: {
      ...ptBrHome,
      ...languageSwitchPtBR,
      ...headerPtBR,
      ...aboutPtBr
    }
  }
}