import * as C from "./styles"
import menu from "../../assets/menu.svg"
import { PinkButton } from "../PinkButton"
import { useState } from "react"
import close from "../../assets/x.svg"
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"


export function Header() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation()

  return(
    <C.Container>
      <Link to="/" className="logo">
      <PinkButton title="amaendoas" path="/"/>
      </Link>
      <button onClick={() => setShow(!show)} className="button-menu">
      <img src={`${show ? close : menu}`} alt="menu" />
      </button>
      <nav
      className={`menu navbar ${show ? "show" : "hide"}`}
      >
            <NavLink to="/"
            >
            <span>&lsaquo;</span>{t("home")}<span>/&rsaquo;</span>
            </NavLink>

            <NavLink to="/about" >
            <span>&lsaquo;</span>{t("about")}<span>/&rsaquo;</span>
            </NavLink>

            <NavLink to="/stack">
            <span>&lsaquo;</span>{t("stack")}<span>/&rsaquo;</span>
            </NavLink>

            <NavLink to="/projects">
            <span>&lsaquo;</span>
            {t("projects")}
            <span>/&rsaquo;</span>
            </NavLink>

            <NavLink to="/contact">
            <span>&lsaquo;</span>
            {t("contact")}
            <span>/&rsaquo;</span>
            </NavLink>
      </nav>
    </C.Container>
  )
}