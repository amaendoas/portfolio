import * as C from "./styles"
import { Button } from "../../components/Button"
import { Theme } from "../../components/Theme"
import download from "../../assets/download.svg"
import heart from "../../assets/pink-heart.svg"
import stars from "../../assets/stars.svg"
import star3 from "../../assets/star-3.svg"
import star11 from "../../assets/star-11.svg"
import smile from "../../assets/smile-baloon.svg"
import { Screen } from "../../components/Screen"
import coding from "../../assets/coding.gif"
import { useTranslation } from "react-i18next"
import { useTheme } from "../../contexts/theme"


export function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();

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
                <p>
                 { t("myNameIs") } <strong>Amanda Guerra</strong>, {t("iAm")} <u>{t("webDeveloper")}</u> {t("mainInterest")} <strong>front-end</strong> {t("and")} <strong>UX/UI</strong> design.
                </p>
                <a href="https://www.canva.com/design/DAFriDO0igo/hibac47YNLjuIdb26Id9jA/view?utm_content=DAFriDO0igo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">
                <Button icon={download} title={t("downloadText")}/>
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