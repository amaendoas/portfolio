import * as C from "./styles"
import { Theme } from "../../components/Theme"
import {Title} from "../../components/Title"
import { Screen } from "../../components/Screen"
import { Button } from "../../components/Button"
import send from "../../assets/send.svg"
import clouds from "../../assets/3-clouds.svg"
import balloon from "../../assets/say-hi.svg"
import { Social } from "../../components/Social"

export function Contact() {
  return (
    <Theme>
    <C.Container>
      <Title title="Contact"/>
      <C.Content>
        <Screen>
          <img src={clouds} alt="clouds" className="clouds"/>
          <img src={balloon} alt="balloon" className="balloon"/>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="E-mail"/>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          <Button icon={send} title="send"/>
        </Screen>
        <Social/>
      </C.Content>
    </C.Container>
    </Theme>
  )
}