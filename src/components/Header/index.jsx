import * as C from "./styles"
import menu from "../../assets/menu.svg"
import { PinkButton } from "../PinkButton"
import { useState } from "react"
import close from "../../assets/x.svg"
import { Link, NavLink } from "react-router-dom"


export function Header() {
  const [isActive, setIsActive] = useState(false)

  return(
    <C.Container>
      <Link to="/" className="logo">
        <PinkButton title="amaendoas" path="/"/>
      </Link>
      <button onClick={() => setIsActive(!isActive)} className="button-menu">
      <img src={`${isActive ? close : menu}`} alt="menu" />
      </button>
      <nav
      className={`menu navbar ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <NavLink to="/about">
              <PinkButton title="about" path="/about"/>
            </NavLink>
          </li>
          <li>
            <Link to="/stack">
              <PinkButton title="stack" path="/stack"/>
            </Link>
          </li>
          <li>
            <Link to="/projects" path="/projects">
              <PinkButton title="projects"/>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <PinkButton title="contact" path="/contact"/>
            </Link>
          </li>
        </ul>
      </nav>
    </C.Container>
  )
}