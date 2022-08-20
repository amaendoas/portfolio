import * as C from "./styles.js"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import { useState } from "react"

export function Project({id, title, img, tag, description, github}) {
  const [isActive, setIsActive] = useState(false)

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
          <img src={img} alt="project image" />
          <p>
          {description}
          </p>
          <C.Footer>
            {tag}
            <a href={github} target="_blank">
              <BsGithub size={27}/>
            </a>
          </C.Footer>
        </C.Content>
      </div>
    </C.Container>
  )
}