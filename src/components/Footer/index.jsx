import * as C from "./styles"
import heartImg from "../../assets/footer-heart.svg"
import { PinkButton } from "../PinkButton"
import { Social } from "../Social"

export function Footer() {
  return (
    <C.Container>
      <C.Credits>
      developed with <img src={heartImg} alt="heart" /> by 
        <a href="https://github.com/amaendoas" target="_blank">
        <PinkButton title="amaendoas"/>
        </a>
      </C.Credits>
      {/* <C.Social>
        <Social/>
      </C.Social> */}
    </C.Container>
  )
}