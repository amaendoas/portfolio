import * as C from "./styles.js"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { MdLanguage } from "react-icons/md"
import { useState } from "react"

export function Project({id, title, tag, description, github, live}) {
  const [isActive, setIsActive] = useState(true)

  function ShowHide() {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <C.Container>
      <C.Title>
        <span>{id}</span>
        <h2>{title}</h2>
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
          <C.Footer>
            <C.Tags>
            {tag}
            </C.Tags>
            <C.Links>
            <a href={github} target="_blank">
              <BsGithub size={25}/>
              <span>
              repo
              </span>
            </a>
            {
              live &&
            <a href={live} target="_blank">
              <MdLanguage size={25}/>
              <span>
              deploy
              </span>
            </a>
            }
            </C.Links>
          </C.Footer>
        </C.Content>
      </div>
    </C.Container>
  )
}