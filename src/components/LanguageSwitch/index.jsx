import * as C from "./styles" 
import brFlag from "../../assets/br-flag.svg"
import usaFlag from "../../assets/usa-flag.svg"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"

export function LanguageSwitch() {
  const [isActive, setIsActive] = useState(false)
  const languageOptions = [
    {
      value: "ptBr",
      flag: brFlag
    },
    {
      value: "eng",
      flag: usaFlag
    }
  ]
  const { t, i18n } = useTranslation();

  const [showLanguagePopUp, setShowLanguagePopUp] = useState(false)

  function showDropDown() {
    setIsActive(!isActive)
    setShowLanguagePopUp(!showLanguagePopUp)
  }
  return (
    <>
      <C.DropDown onClick={showDropDown}>
          {
          languageOptions.map((option) => {
            if(i18n.language === option.value){
              return (
                <>
                <C.LanguageBtn key={option.value}><img src={option.flag} alt=""/>
                  {
                  isActive ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>
                  }
                </C.LanguageBtn>
                     { showLanguagePopUp ?
                      <C.Wrapper key={option.value}>
                        {languageOptions.map((option) => {
                          if(i18n.language !== option.value) {
                            return (
                                <C.LanguageBtn onClick={() => i18n.changeLanguage(option.value)} key={option.value}><img src={option.flag} alt="" />
                                </C.LanguageBtn>
                              )
                          }
                          })}
                      </C.Wrapper>
                      : <></>}
                </>
                )
            }
          })
          }
      </C.DropDown>
    </>
  )
} 