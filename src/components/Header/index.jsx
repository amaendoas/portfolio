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
      <NavLink to="/" className="logo">
        <PinkButton title="amaendoas" path="/"/>
      </NavLink>
      <button onClick={() => setIsActive(!isActive)} className="button-menu">
      <img src={`${isActive ? close : menu}`} alt="menu" />
      </button>
      <nav
      className={`menu navbar ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <NavLink to="/about">
              <PinkButton title="about"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stack">
              <PinkButton title="stack"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" path="/projects">
              <PinkButton title="projects"/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <PinkButton title="contact"/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </C.Container>
  )
}