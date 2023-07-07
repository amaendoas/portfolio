import { Container } from "./styles";
import starRate from "../../assets/star-rate.svg"


export function StarRating({value = 0, ...rest}) {
  return (
    <Container>
      {[...Array(value)].map(() => {
        return(
          <img src={starRate} alt="" className="star" />
        )
      }
      )}
    </Container>
  )
}
