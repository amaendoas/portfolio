import * as C from "./styles"
import menu from "../../assets/menu.svg"
import { PinkButton } from "../PinkButton"
import { useState } from "react"
import close from "../../assets/x.svg"
import { Link } from "react-router-dom"


export function Header() {
  const [isActive, setIsActive] = useState(false)

  return(
    <C.Container>
      <Link to="/">
        <PinkButton title="amaendoas" className="logo"/>
      </Link>
      <button onClick={() => setIsActive(!isActive)} className="button-menu">
      <img src={`${isActive ? close : menu}`} alt="menu" />
      </button>
      <nav
      className={`menu navbar ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link to="/">
              <PinkButton title="home"/>
            </Link>
          </li>
          <li>
          <Link to="/about">
              <PinkButton title="about"/>
            </Link>
          </li>
          <li>
            <Link to="/stack">
              <PinkButton title="stack"/>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <PinkButton title="projects"/>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <PinkButton title="contact"/>
            </Link>
          </li>
        </ul>
      </nav>
    </C.Container>
  )
}