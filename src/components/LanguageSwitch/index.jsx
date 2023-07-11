import * as C from "./styles" 
import brFlag from "../../assets/br-flag.svg"
import usaFlag from "../../assets/usa-flag.svg"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { PopUp } from "../PopUp"

export function LanguageSwitch() {
  const languageOptions = [
    {
      name: "pt-br",
      value: "ptBr",
      flag: brFlag
    },
    {
      name: "eng",
      value: "eng",
      flag: usaFlag
    }
  ]
  const { t, i18n } = useTranslation();

  const [showLanguagePopUp, setShowLanguagePopUp] = useState(false)
  return (
    <>
      <C.PopUpBtn onClick={() => setShowLanguagePopUp(!showLanguagePopUp)}>
          {
          languageOptions.map((option) => {
            if(i18n.language === option.value){
              return (
                  <C.LanguageBtn key={option.value}><img src={option.flag} alt="" />
                  {option.name}
                  </C.LanguageBtn>
                )
            }
          })
          }
      </C.PopUpBtn>
     { showLanguagePopUp ?
      <C.Wrapper>
        <PopUp title={t("chooseLanguage")} onClick={()=> setShowLanguagePopUp(!showLanguagePopUp)}>
            {languageOptions.map((option) => {
              return (
                  <C.LanguageBtn onClick={() => i18n.changeLanguage(option.value)} key={option.value}><img src={option.flag} alt="" />
                  {option.name}
                  </C.LanguageBtn>
                )
              })}
        </PopUp>
      </C.Wrapper>
      : <></>}
    </>
  )
} 