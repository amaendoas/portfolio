import * as C from "./styles"
import heartImg from "../../assets/footer-heart.svg"
import { PinkButton } from "../PinkButton"

export function Footer() {
  return (
    <C.Container>
      developed with <img src={heartImg} alt="heart" /> by 
        <a href="https://github.com/amaendoas" target="_blank">
        <PinkButton title="amaendoas"/>
        </a>
    </C.Container>
  )
}