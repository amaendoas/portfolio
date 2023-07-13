import * as C from "./styles"
import close from "../../assets/x.svg"

export function Alert({children, title, onClick}) {
  return (
    <C.Container>
      <C.Header>
        <p>{title}</p>
        <C.CloseBtn onClick={onClick}>
          <img src={close} alt="close button" />
        </C.CloseBtn>
      </C.Header>
      {children}
    </C.Container>
  )
}