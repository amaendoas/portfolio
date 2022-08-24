import * as C from "./styles"
import { BsCircleFill } from "react-icons/bs"

export function Status({status, finished}) {
  return (
    <C.Container finished={finished}>
      <BsCircleFill/>
      <span>{status}</span>
    </C.Container>
  )
}