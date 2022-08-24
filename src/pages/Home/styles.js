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

export const Content = styled.div`
` 

export const PopUp = styled.div`

  strong {
    font-weight: 800;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    text-align: center;
    line-height: 3.2rem;
    padding-top: 2rem;
  }

   p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 2rem 0;
    text-align: justify;
   }

   .heart1, .heart2, .stars, .star3, .star11 {
    position: absolute;
   }

   .heart1, .heart2 {
    width: 3.5rem;
    animation: blink 1s 300ms steps(5, start) infinite;
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
    width: 7rem;
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

  @media (max-width: 1050px) {
    margin: 0 3rem;
  }

  @media (min-width: 800px) {
    width: 40rem;

    h1 {
    font-size: 3.5rem;
    line-height: 3.7rem;
    padding-top: 3rem;
   }

   .heart1, .heart2 {
    width: 4.8rem;
   }

   .stars, .star3, .star11 {
    width: 8rem;
   }

   p {
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding: 3rem 3rem 2rem;
   }
  }
`

export const Background = styled.div`
  position: relative;
  display: flex;
  animation: downtop 1s backwards;

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

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
  
  @-webkit-keyframes blink {
    to {
      visibility: hidden;
    }
  }

`