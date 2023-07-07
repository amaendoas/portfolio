import * as C from "./styles"
import { Button } from "../../components/Button"
import { Theme } from "../../components/Theme"
import download from "../../assets/download.svg"
import heart from "../../assets/home-heart.svg"
import stars from "../../assets/stars.svg"
import star3 from "../../assets/star-3.svg"
import star11 from "../../assets/star-11.svg"
import smile from "../../assets/smile-baloon.svg"
import { Screen } from "../../components/Screen"
import coding from "../../assets/coding.gif"


export function Home() {
  return(
    <Theme>
    <C.Container>
      <C.Main>
        <C.Content>
          <Screen>
            <C.PopUp>
              <img src={heart} alt="heart" className="heart1" />
              <img src={heart} alt="heart" className="heart2" />
              <img src={stars} alt="" className="stars"/>
              <img src={star3} alt="" className="star3"/>
              <img src={star11} alt="" className="star11"/>
                <h1>HELLO WORLD!</h1>
                <p> My name is <strong>Amanda Guerra</strong>, I'm a <u>web developer</u>  with main interest in <strong>front-end</strong> and <strong>UX/UI design</strong>.</p>
                <a href="https://drive.google.com/u/0/uc?id=1Uw9UXIF2-ZxBWK11sjSHmeetO5gUOhRv&export=download" target="_blank">
                <Button icon={download} title="download resume"/>
                </a>
            </C.PopUp>
          </Screen>
        </C.Content>
      <C.Background>
        <div>
          <img src={smile} alt="smile ballon" className="smile"/>
          <img src={coding} alt="woman coding" className="gif"/>
        </div>
      </C.Background>
      </C.Main>
    </C.Container>          
    </Theme>
  )
}