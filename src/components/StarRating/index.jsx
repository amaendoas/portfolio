import { MdStar } from "react-icons/md";
import { Container } from "./styles";
import starRate from "../../assets/star-rate.svg"


export function StarRating({value = 0, ...rest}) {
  return (
    <Container>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return(
        <MdStar
        key={String(i)}
        className="star"
        color={ratingValue <= (value) ? "#E7C63C" : "#6F6B5F"}
        />
        )
      }
      )}
    </Container>
  )
}
