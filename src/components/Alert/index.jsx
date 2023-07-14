import * as C from "./styles"
import close from "../../assets/x.svg"
import {RiErrorWarningFill} from "react-icons/ri"
import {GiPartyPopper} from "react-icons/gi"

export function Alert({text, onClick, isSuccess}) {
  return (
    <C.Container>
      <C.Wrapper>
        {
          isSuccess ? <GiPartyPopper size={20}/> : <RiErrorWarningFill size={20}/>
        }
        <p>{text}</p>
        <C.CloseBtn onClick={onClick}>
          <img src={close} alt="close button" />
        </C.CloseBtn>
      </C.Wrapper>
    </C.Container>
  )
}