import styled from "styled-components";
import myPhoto from "../../assets/photo.jpg"

export const Container = styled.div`
  display: flex;
  grid-area: content;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  animation: downtop 1s backwards;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK_S} ${({theme}) => theme.COLORS.NEUTRAL_700} !important;
  scrollbar-width: thin;
  
  ::-webkit-scrollbar {
        width: 11px;
      }
    
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK_S};
    border: 1px solid #5c5c5c;
    box-shadow: inset -3px -3px 2px 1px ${({ theme }) => theme.COLORS.PINK_P};
  }

  @media (min-width: 600px) {
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) {
    gap: 10rem;
  }
`

export const Image = styled.div`
  margin-top: 7rem;
  width: 30rem;
  height: clamp(18rem, 18rem + 10vh, 30rem);
  background-image: url(${myPhoto});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: 650px) {
    margin: 0;
    padding: 0 3rem;
  }

  @media (min-width: 900px) {
  width: 35rem;
   height: 35rem;
  }
`
export const Stickers = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    top: -60px;

    
    div {
    position: relative;
    

    p {
      position: absolute;
      z-index: 1;
      width: 9rem;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 18px;
      text-align: center;
      letter-spacing: -0.05rem;
      color: ${({theme}) => theme.COLORS.BACKGROUND};
      -webkit-text-stroke-width: 0.8px;
      -webkit-text-stroke-color: ${({theme}) => theme.COLORS.TEXT};
      text-shadow: 3px 3px 0px ${({theme}) => theme.COLORS.GREEN_S};
      transform: rotate(9deg);
      bottom: 20px;
      left: 15px;
      }
    }

  .balloon {
    z-index: 1;
    width: 12rem;
    position: absolute;
    left: 2rem;
  }

  .tag {
    svg {
      width: 14rem;
      height: 12rem;
    }
    }
  
  @media (min-width: 900px) {
    top: -95px;
    .balloon {
      width: 20rem;
      top: 10px;
      left: -3rem;
    }

    div {
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
  height: fit-content;
  max-width: 80vw;

  h1 {
    font-size: 2rem;
    text-align: start;
    line-height: 2rem;
    padding: 1rem 1rem 0;

    span {
      color: ${({theme}) => theme.COLORS.PINK_P};
    }
  }

   .description {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    padding: 1rem;
    text-align: justify;

    p {
      margin-bottom: 5px;
    }
   }

   img.balls {
    position: absolute;
    bottom: -60px;
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

  .description {
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 2rem 2rem 5rem;
    
    p {
      margin-bottom: 1rem;
    }
  }
  }
`