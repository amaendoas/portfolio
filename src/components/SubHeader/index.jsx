import { LanguageSwitch } from "../LanguageSwitch"
import { ThemeSwitch } from "../ThemeSwitch"
import * as C from "./styles"

export function SubHeader() {
  return (
    <C.Container>
      <LanguageSwitch/>
      <ThemeSwitch/>
    </C.Container>
  )
}