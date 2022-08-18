import styled from "styled-components";
import myPhoto from "../../assets/photo.jpg"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  animation: downtop 1s backwards;

  @media (min-width: 600px) {
    gap: 3rem;
  }

  @media (min-width: 1000px) {
    gap: 10rem;
  }
`

export const Image = styled.div`
  margin-top: 7rem;
  width: 30rem;
  height: 20rem;
  background-image: url(${myPhoto});
  background-size: cover;
  background-position: center;
  position: relative;

  div {
    position: absolute;
    right: 35px;
    top: -70px;

    img.tag {
      position: relative;
    }

    p {
      position: absolute;
      z-index: 1;
      width: 9.5rem;
      font-weight: 800;
      font-size: 1.7rem;
      line-height: 18px;
      text-align: center;
      letter-spacing: -0.05rem;
      color: ${({theme}) => theme.COLORS.BACKGROUND};
      -webkit-text-stroke-width: 0.8px;
      -webkit-text-stroke-color: ${({theme}) => theme.COLORS.TEXT};
      text-shadow: 3px 3px 0px ${({theme}) => theme.COLORS.GREEN_S};
      transform: rotate(9deg);
      bottom: 20px;
      left: 7px;
    }
  }

  .balloon {
    position: absolute;
    left: 25px;
    top: -70px;
    z-index: 1;
  }

  @media (min-width: 650px) {
    margin: 0;
    padding: 0 3rem;
  }

  @media (min-width: 900px) {
    width: 35rem;
    height: 28rem;

    .balloon {
      width: 20rem;
      top: -110px;
    }

    div {
      top: -130px;
      right: 0;

      p {
        width: 20rem;
        font-size: 2.6rem;
        line-height: 2.6rem;
        left: 0;
        bottom: 30px;
      }
    }

    .tag {
        width: 20rem;
        height: 20rem;

      svg {
        width: 24rem;
        height: 22rem;
      }
    }

  }
`

export const AboutMe = styled.div`
  position: relative;

  h1 {
    font-size: 2.5rem;
    text-align: start;
    line-height: 2rem;
    padding: 1rem 1rem 0;
  }

   p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
    padding: 1rem;
    text-align: justify;
   }

   img.balls {
    position: absolute;
    bottom: -40px;
    left: -25px;
    z-index: -1;
   }

   img.smile {
    position: absolute;
    top: -40px;
    right: -40px;
   }

   @media (min-width: 700px) {
    padding: 0 3rem;

    img.smile {
    right: -15px;
   }
  }

  @media (min-width: 900px) {
    
    img.balls {
      width: 11rem;
      left: 0px;
      bottom: -50px;
   }

   h1 {
    font-size: 2.8rem;
    padding: 2rem 2rem 0;
  }

   p {
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 2rem 2rem 5rem;
   }
  }
`