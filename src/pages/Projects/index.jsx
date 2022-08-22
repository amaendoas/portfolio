import { Project } from "../../components/Project"
import { Tag } from "../../components/Tag"
import { Theme } from "../../components/Theme"
import { Title } from "../../components/Title"
import * as C from "./styles"
import more from "../../assets/more.svg"
import { projects } from "../../utils/projects"

export function Projects() {

  return (
    <Theme>
    <C.Container>
      <Title title="Projects"/>
      <C.Content>
       {projects.map((project) =>
       <Project
       key={project.id}
       id={project.id}
       title={project.title}
       img={project.img}
       description={project.description}
       github={project.github}
       tag={(project.tags.map((tag, index) =>
        <Tag
        key={index}
        title={tag}/>
        ))}
       />
        )}
        <img src={more} alt="more projects soon" className="more"/>
      </C.Content>
    </C.Container>
    </Theme>
  )
}