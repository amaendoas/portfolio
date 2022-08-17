import * as C from "./styles"

export function Button({title, icon}) {
  return (
    <C.Container>
      <img src={icon}/>{title}
    </C.Container>
  )
}