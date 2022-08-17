import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import * as C from "./styles"
import download from "../../assets/download.svg"
import heart from "../../assets/home-heart.svg"
import stars from "../../assets/stars.svg"
import star3 from "../../assets/star-3.svg"
import star11 from "../../assets/star-11.svg"


export function Home() {
  return(
    <C.Container>
      <Header/>
      <C.Main>
        <C.PopUp>
          <img src={heart} alt="heart" className="heart1" />
          <img src={heart} alt="heart" className="heart2" />
          <img src={stars} alt="" className="stars"/>
          <img src={star3} alt="" className="star3"/>
          <img src={star11} alt="" className="star11"/>
          <C.Header>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </C.Header>
            <div className="line"></div>
             <h1>HELLO WORLD!</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eget tincidunt libero. orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             <Button icon={download} title="download resume"/>
        </C.PopUp>
      </C.Main>
      <Footer/>
    </C.Container>
  )
}