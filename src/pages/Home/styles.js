import styled from "styled-components";
import cloudsImg from "../../assets/clouds.svg"
import bgImg from "../../assets/bg.svg"

export const Container = styled.div`
  background-image: url(${bgImg});
  background-repeat: repeat;
  background-position: center;
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  @media (max-width: 1000px) {
    gap: 3rem;
  }

`

export const PopUp = styled.div`
  width: 32rem;
  height: fit-content;
  border: 2px solid ${({theme}) => theme.COLORS.PURPLE_P};
  border-radius: 10px;
  box-shadow: -10px 10px 0px ${({ theme }) => theme.COLORS.PURPLE_P};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    text-align: center;
    line-height: 3.2rem;
    padding-top: 2rem;
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PURPLE_P};
    margin-top: 8px;
   }

   p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 2rem 3rem 0;
    text-align: justify;
   }

   .heart1, .heart2, .stars, .star3, .star11 {
    position: absolute;
   }

   .heart1, .heart2 {
    width: 3.5rem;
    animation: blink 1s steps(5, start) infinite;
   }
   
   .heart1 {
    left: 2rem;
    top: 7rem;
   }

   .heart2 {
    right: 2rem;
    top: 7rem;
   }

   .stars {
    right: -2rem;
    top: -2.5rem;
    width: 6rem;
    height: 6rem;
   }

   .star3 {
    left: -1rem;
    bottom: -4rem;
    width: 7rem;
   }

   .star11 {
    right: -2rem;
    bottom: -3rem;
    width: 7rem;
   }

   @media (max-width: 950px) {
    margin: 0 3rem;
  }

`

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  .dot {
    width: 13px;
    height: 13px;
    border: 4px solid ${({theme}) => theme.COLORS.PURPLE_P};
    border-radius: 50%;
    margin-left: 3px;
   }

   @keyframes blink {
    to {
      visibility: hidden;
    }
   }
`

export const Background = styled.div`
  position: relative;
  display: flex;

  div {
    flex: 1;
    width: 52.4rem;
    height: 48.8rem;
    background: url(${cloudsImg}) no-repeat;
    background-size: clamp(35rem, 35rem + 10vw, 45rem);
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    img.gif {
      width: clamp(30rem, 30rem + 10vw, 45rem);
      height: clamp(30rem, 30rem + 10vw, 45rem);
    }
    
    img.smile {
      position: absolute;
      right: 20px;
      top: 35px;
      width: clamp(12rem, 12rem + 10vw, 16rem);
      height: clamp(12rem, 12rem + 10vw, 16rem);
    }
  }

  @media (max-width: 930px) {
    display: none;
  }

`