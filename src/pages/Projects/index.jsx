import { Project } from "../../components/Project"
import { Tag } from "../../components/Tag"
import { Theme } from "../../components/Theme"
import { Title } from "../../components/Title"
import * as C from "./styles"
import rocketMovie from "../../assets/rocket-movie.png"
import more from "../../assets/more.svg"

export function Projects() {

  const items = [
    {
      id: 1,
      title: 'Rocket Movie',
      img: rocketMovie,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna morbi ac adipiscing orci nunc suspendisse amet, vel odio. Enim ultricies sed vel lacus, feugiat id ac.', github: 'https://github.com/amaendoas/rocket-movie-frontend',
      tags: ['react', 'nodejs', 'sqlite']
    },

  ]
  return (
    <Theme>
    <C.Container>
      <Title title="Projects"/>
      <C.Content>
       {items.map((item) =>
       <Project
       key={item.id}
       id={item.id}
       title={item.title}
       img={item.img}
       description={item.description}
       tag={(item.tags.map((tag, index) =>
        <Tag
        key={index}
        title={tag}/>
        ))}
       />
        )}
        <img src={more} alt="more projects soon" />
      </C.Content>
    </C.Container>
    </Theme>
  )
}