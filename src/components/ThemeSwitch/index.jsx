import * as C from "./styles"
import { BsSun } from "react-icons/bs"
import { BiMoon } from "react-icons/bi"
import { useTheme } from "../../contexts/useTheme"

export function ThemeSwitch() {
  const { theme, switchTheme } = useTheme()

  return (
    <C.Container onClick={switchTheme}>
      { 
        theme === 'light' ? <BsSun size={20}/>: <BiMoon size={20}/>
      }
    </C.Container>
  )
}