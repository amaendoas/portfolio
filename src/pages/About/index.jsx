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
        <img src={balloon} alt="that's me" className="balloon"/>
        <div>
        <img src={tag} alt="that's me" className="tag" />
        <p>FRONT-END DEVELOPER</p>
        </div>
      </C.Image>
      <C.AboutMe>
        <Screen>
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ipsum urna vel sed. In consequat arcu, ut eget tempus netus. Arcu, vel eget faucibus tortor lectus nunc arcu. Ut neque sit malesuada et enim.</p>
        </Screen>
        <img src={balls} alt="balls" className="balls"/>
        <img src={smile} alt="smile" className="smile"/>
      </C.AboutMe>
    </C.Container>
    </Theme>
  )
}