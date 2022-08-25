import * as C from "./styles"

export function PinkButton({title}) {
  return (
    <C.Container className="title">
    	<span>&lsaquo;</span>{title}<span>/&rsaquo;</span>
    </C.Container>
  )
}