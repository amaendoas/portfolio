import * as C from "./styles" 
import brFlag from "../../assets/br-flag.svg"
import usaFlag from "../../assets/usa-flag.svg"
import { useTranslation } from "react-i18next"


export function LanguageSwitch() {
  const { i18n } = useTranslation();

  return (
    <C.LanguageBtn onClick={() => i18n.changeLanguage(i18n.language === 'ptBr' ? 'eng' : 'ptBr')}>
      <img src={i18n.language === 'ptBr' ? brFlag : usaFlag} alt=""/>
    </C.LanguageBtn>
  )
} 