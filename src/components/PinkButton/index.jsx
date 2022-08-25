import * as C from "./styles"

export function PinkButton({title}) {
  return (
    <C.Container>
    	<span>&lsaquo;</span>{title}<span>/&rsaquo;</span>
    </C.Container>
  )
}