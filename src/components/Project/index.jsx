import * as C from "./styles.js"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { MdLanguage } from "react-icons/md"
import { useState } from "react"
import { Status } from "../Status/index.jsx"
import { MdOutlineAccessTime } from "react-icons/md"

export function Project({ title, tag, description, github, live, status, finished, date}) {
  const [isActive, setIsActive] = useState(true)

  function ShowHide() {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <C.Container>
      <C.Title>
        <h2>
      <span>&lsaquo;</span>
          {title}
      <span>/&rsaquo;</span>
        </h2>
        <button onClick={ShowHide}> 
        {
          isActive ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>
        }
        </button>
      </C.Title>
      <div className={`content ${isActive ? "active" : "inactive"}`}>
        <C.Content>
          <p>
          {description}
          </p>
            <C.Tags>
            {tag}
            </C.Tags>
          <C.Footer>
            <C.Links>
              <C.Info>
                <p>
                <MdOutlineAccessTime className="time"/>
                  {date}
                </p>
                <Status status={status} finished={finished}/>
              </C.Info>
            <a href={github} target="_blank">
              <BsGithub size={25}/>
            </a>
            {
              live &&
            <a href={live} target="_blank">
              <MdLanguage size={25}/>
            </a>
            }
            </C.Links>
          </C.Footer>
        </C.Content>
      </div>
    </C.Container>
  )
}