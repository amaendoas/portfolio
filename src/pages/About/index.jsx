import * as C from "./styles"
import { Theme } from "../../components/Theme"
import { Screen } from "../../components/Screen"
import balloon from "../../assets/pixel-baloon.svg"
import tag from "../../assets/front-end-tag.svg"
import balls from "../../assets/balls.svg"
import smile from "../../assets/smile-pixel.svg"
import { useTranslation } from "react-i18next"

export function About() {
  const { t } = useTranslation()
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
            {t("title")}
          <span>/&rsaquo;</span>
          </h1>
          <div className="description">
          <p>{t("HiMyNameIs")} <strong>Amanda Guerra</strong>, {t("myAge")}</p>
          <p>{t("iAm")} <strong>{t("frontEnd")}</strong>, {t("passionAndSkills")}</p>
          <p>{t("civilDegree")}</p>
          </div>
        </Screen>
        {/* <img src={balls} alt="balls" className="balls"/> */}
        <img src={smile} alt="smile" className="smile"/>
      </C.AboutMe>
    </C.Container>
    </Theme>
  )
}