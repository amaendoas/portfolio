import * as C from "./styles"

export function Title({title}) {
  return(
    <C.Container className="title">
      <h1>{title}</h1>
    </C.Container>
  )
}