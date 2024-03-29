import * as C from "./styles"
import { StackItem } from "../../components/StackItem"
import Carousel from "react-elastic-carousel"
import { Theme } from "../../components/Theme"
import { Title } from "../../components/Title"
import star from "../../assets/star-smile.svg"
import heart from "../../assets/purple-heart.svg"
import { stack } from "../../utils/stack"
import { useTranslation } from "react-i18next"

export function Stack() {
  const { t } = useTranslation()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 }
  ];
  
  return (
    <Theme>
    <C.Container>
      <Title title={t("stackTitle")}/>

      <C.Content>
        <div className="carousel-wrapper">
          <img src={star} alt="star-smile" className="smile" />
          <img src={heart} alt="heart" className="heart"/>
          <Carousel breakPoints={breakPoints}>
              {stack.map((item) => (
                <StackItem key={item.id} title={item.title} icon={item.icon} color={item.color} value={item.value}/>
                ))}
          </Carousel>
        </div>
      </C.Content>
    </C.Container>
    </Theme>
  )
}