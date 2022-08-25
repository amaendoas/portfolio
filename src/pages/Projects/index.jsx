import { Project } from "../../components/Project"
import { Tag } from "../../components/Tag"
import { Theme } from "../../components/Theme"
import { Title } from "../../components/Title"
import * as C from "./styles"
import more from "../../assets/more.svg"
import { projects } from "../../utils/projects"
import folders from "../../assets/folders.svg"

export function Projects() {
  const projectsItems = projects.slice(0).reverse()

  console.log(projectsItems)

  return (
    <Theme>
    <C.Container>
      <C.Title>
        <Title title="Projects"/>
        <img src={folders} alt="folders" className="folders"/>
      </C.Title>
      <C.Content>
       {projectsItems.map((project) =>
       <Project
       key={project.id}
       title={project.title}
       img={project.img}
       description={project.description}
       github={project.github}
       live={project.live}
       status={project.status}
       finished={project.finished}
       date={project.date}
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