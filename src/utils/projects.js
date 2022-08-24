import rocketMovie from "../assets/rocket-movie.png"

export const projects = [
  {
    id: 1,
    title: 'Focus Timer',
    description: 'Projeto frontend que consiste em um cronômetro estilo Pomodoro com 3 tipos de música de fundo para foco nos estudos. Desenvolvido como desafio das aulas do Explorer da Rocketseat.', github: 'https://github.com/amaendoas/focus-timer-2',
    status: 'Finished', finished: 'finished',
    tags: ['html', 'css', 'javascript']
  },
  {
    id: 2,
    title: 'GitFav',
    description: 'Projeto frontend que consiste em página web que usa a API do github para buscar e salvar as pessoas favoritas do github. Desenvolvido como desafio do curso Explorer da Rocketseat.', github: 'https://github.com/amaendoas/github-favs', status: 'Finished', finished: 'finished',
    tags: ['html', 'css', 'javascript']
  },
  {
    id: 3,
    title: 'Rocket Notes',
    description: 'Projeto fullstack desenvolvido para fins educativos consiste em um SPA responsivo com o objetivo de gerenciar notas e links úteis. Desenvolvido no Stage 08 do Explorer da Rocketseat.', github: 'https://github.com/amaendoas/rocket-notes-frontend', status: 'Finished', finished: 'finished',live: 'https://myrocketnotes.netlify.app/',
    tags: ['react', 'nodejs', 'sqlite']
  },
  {
    id: 4,
    title: 'Rocket Movie',
    description: 'Projeto fullstack desenvolvido para fins educativos consiste em um SPA responsivo com o objetivo de listar e avaliar filmes assistidos. Desenvolvido no Stage 09 do Explorer da Rocketseat.', status: 'Working on it', github: 'https://github.com/amaendoas/rocket-movie-frontend',
    tags: ['react', 'nodejs', 'sqlite']
  },
  {
    id: 5,
    title: 'StepDev',
    description: 'Projeto fullstack de um website de uma empresa fictícia (StepDev) com a intenção de simular a requisitação de um orçamento de serviço por parte da mesma. O principal objetivo do projeto é a criação de uma SPA com um formulário multi-step responsivo para fins educativos.', status: 'Finished', finished: 'finished', github: 'https://github.com/amaendoas/stepdev-frontend', live: 'https://stepdev1.web.app/',
    tags: ['figma', 'react', 'nodejs', 'firebase', 'typescript']
  }
]