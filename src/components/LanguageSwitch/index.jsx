import * as C from "./styles" 
import brFlag from "../../assets/br-flag.svg"
import usaFlag from "../../assets/usa-flag.svg"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import {IoIosClose} from "react-icons/io"

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

export function LanguageSwitch() {
  const { i18n } = useTranslation()
  const [showLanguagePopUp, setShowLanguagePopUp] = useState(false)
  return (
    <>
      <C.Dropdown onClick={() => setShowLanguagePopUp(!showLanguagePopUp)}>
          {languageOptions.map((option) => {
            if(i18n.language === option.value){
              return (
                  <C.Button><img src={option.flag} alt="" />
                  {option.name}
                  </C.Button>
                )
            }
          })}
      </C.Dropdown>
     { showLanguagePopUp ?
      <>
        <C.After onClick={()=> setShowLanguagePopUp(!showLanguagePopUp)}>
        </C.After>
          <C.PopUp>
            <p>Choose your language</p>
            {languageOptions.map((option) => {
              return (
                  <C.Button onClick={() => i18n.changeLanguage(option.value)}><img src={option.flag} alt="" />
                  {option.name}
                  </C.Button>
                )
              })}
              <C.Button onClick={()=> setShowLanguagePopUp(!showLanguagePopUp)}>
                <IoIosClose/>
              </C.Button>
            </C.PopUp>
      </>
     
      : <></>}
    </>
  )
} 