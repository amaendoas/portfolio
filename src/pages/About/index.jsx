import * as C from "./styles"
import { Theme } from "../../components/Theme"
import { Screen } from "../../components/Screen"
import balloon from "../../assets/pixel-baloon.svg"
import tag from "../../assets/front-end-tag.svg"
import balls from "../../assets/balls.svg"
import smile from "../../assets/smile-pixel.svg"
export function About() {
  return (
    <Theme>
    <C.Container>
      <C.Image>
        <C.Stickers>
          <img src={balloon} alt="that's me" className="balloon"/>
          <div>
          <img src={tag} alt="front-end developer" className="tag" />
          <p>FRONT-END DEVELOPER</p>
          </div>
        </C.Stickers>
      </C.Image>
      <C.AboutMe>
        <Screen>
            <h1>
          <span>&lsaquo;</span>
            AboutMe
          <span>/&rsaquo;</span>
          </h1>
          <div className="description">
          <p>Hi, my name is <strong>Amanda Guerra</strong>, I'm 27 years old.</p>
          <p>I'm a <strong>Front-end developer</strong>, passionate about technology and UX/UI design. I'm current improving my skills in React to get my first opportunity in technology area.</p>
          <p>I also have a civil engineering degree!</p>
          </div>
        </Screen>
        <img src={balls} alt="balls" className="balls"/>
        <img src={smile} alt="smile" className="smile"/>
      </C.AboutMe>
    </C.Container>
    </Theme>
  )
}