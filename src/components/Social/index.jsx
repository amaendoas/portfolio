import * as C from "./styles"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"

export function Social() {
  return (
    <C.Container>
      <a href="https://github.com/amaendoas" target="_blank">
        <SiGithub/>
      </a>
      <a href="https://www.instagram.com/amaendoas" target="_blank">
        <SiInstagram/>
      </a>
      <a href="https://www.linkedin.com/in/guerramanda/" target="_blank">
        <SiLinkedin/>
      </a>
    </C.Container>
  )
}