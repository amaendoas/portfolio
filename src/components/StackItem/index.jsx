import * as C from "./styles"
import { StarRating } from "../StarRating"
import star from "../../assets/star-rate.svg"

export function StackItem({icon: Icon, color, title, value}) {
  
  return (
    <C.Container>
      <C.Item>
        <Icon size={60} color={color}/>
        <h2>{title}</h2>
      </C.Item>
      <C.Footer>
        <StarRating value={value}/>
      </C.Footer>
    </C.Container>
  )
}