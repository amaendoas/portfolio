import * as C from "./styles"
import { SiGithub, SiInstagram, SiLinkedin, SiReact } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import heart from "../../assets/footer-heart.svg"


export function Footer() {
  return (
    <C.Container>
      <a href="">
        <SiGithub/>
        github
        </a>
      <a href="">
        <SiInstagram/>
        instagram
        </a>
      <a href="">
        <SiLinkedin/>
        linkedin
        </a>

      <a href="">
        <HiOutlineMail/>
        email
        </a>
    </C.Container>
  )
}