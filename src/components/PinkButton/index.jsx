import * as C from "./styles"

export function PinkButton({title, path}) {
  return (
    <C.Container to="/">
    	<span>&lsaquo;</span>{title}<span>/&rsaquo;</span>
    </C.Container>
  )
}