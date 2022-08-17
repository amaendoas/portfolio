import * as C from "./styles"

export function PinkButton({title, path}) {
  return (
    <C.Container path={path}>
    	<span>&lsaquo;</span>{title}<span>/&rsaquo;</span>
    </C.Container>
  )
}