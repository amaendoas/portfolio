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
import { Social } from "../../components/Social"


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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eget tincidunt libero. orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button icon={download} title="download resume"/>
            </C.PopUp>
          </Screen>
          <Social/>
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