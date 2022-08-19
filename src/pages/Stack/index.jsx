import * as C from "./styles"
import {useState} from "react"
import { StackItem } from "../../components/StackItem"
import Carousel from "react-elastic-carousel"
import { Theme } from "../../components/Theme"
import { SiReact, SiSqlite, SiTypescript, SiNodedotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
import { Title } from "../../components/Title"
import star from "../../assets/star-smile.svg"
import heart from "../../assets/heart.svg"

export function Stack() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 }
  ];

  const items = [
    {id: 1, title: 'html', icon: SiHtml5, value: 4, color: '#E34F26'},
    {id: 2, title: 'css', icon: SiCss3, value: 4, color: '#1572B6'},
    {id: 3, title: 'javascript', icon: SiJavascript, value: 3, color: '#F7DF1E'},
    {id: 4, title: 'reactjs', icon: SiReact, value: 3, color: '#61DAFB'},
    {id: 5, title: 'nodejs', icon: SiNodedotjs, value: 3, color: '#339933'},
    {id: 6, title: 'sqlite', icon: SiSqlite, value: 2, color: '#003B57'},
    {id: 7, title: 'typescript', icon: SiTypescript, value: 2, color: '#3178C6'}
  ]
  
  return (
    <Theme>
    <C.Container>
      <Title title="Stack"/>
      <div className="carousel-wrapper">
      <img src={star} alt="star-smile" className="smile" />
      <img src={heart} alt="heart" className="heart"/>
        <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <StackItem title={item.title} icon={item.icon} color={item.color} value={item.value}/>
              ))}
        </Carousel>
      </div>
    </C.Container>
    </Theme>
  )
}