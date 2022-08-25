import * as C from "./styles"
import { SiGithub, SiInstagram, SiLinkedin, SiReact } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"



export function Footer() {
  return (
    <C.Container>
        <a href="https://github.com/amaendoas" target='_blank'>
        <span>&lsaquo;</span>
          github
        <span>/&rsaquo;</span>
          </a>
        <a href="https://www.instagram.com/amaendoas" target='_blank'>
        <span>&lsaquo;</span>
          instagram
        <span>/&rsaquo;</span>
          </a>
        <a href="https://www.linkedin.com/in/guerramanda/" target='_blank'>
        <span>&lsaquo;</span>
          linkedin
        <span>/&rsaquo;</span>
          </a>
        <a href="mailto:guerraamanda1@hotmail.com" target='_blank'>
        <span>&lsaquo;</span>
          email
          <span>/&rsaquo;</span>
          </a>
    </C.Container>
  )
}