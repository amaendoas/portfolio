import * as C from "./styles"
import menu from "../../assets/menu.svg"
import { PinkButton } from "../PinkButton"
import { useRef, useState } from "react"
import close from "../../assets/x.svg"


export function Header() {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  return(
    <C.Container>
      <PinkButton title="a"/>
      <button onClick={() => setIsActive(!isActive)} className="button-menu">
      <img src={`${isActive ? close : menu}`} alt="menu" />
      </button>
      <nav
      ref={dropDownRef}
      className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
          <PinkButton title="home"/>
          </li>
          <li>
            <PinkButton title="about"/>
          </li>
          <li>
            <PinkButton title="stack"/>
          </li>
          <li>
            <PinkButton title="projects"/>
          </li>
          <li>
            <PinkButton title="contact"/>
          </li>
        </ul>
      </nav>
    </C.Container>
  )
}