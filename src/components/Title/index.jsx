import * as C from "./styles"

export function Title({title}) {
  return(
    <C.Container>
      <h1>
      <span>&lsaquo;</span>
        {title}
      <span>/&rsaquo;</span>
      </h1>   
    </C.Container>
  )
}