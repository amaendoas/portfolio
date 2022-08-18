import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 55px auto 60px;
  grid-template-areas:
  "header"
  "content"
  "footer";

  @media (min-width: 1001px) {
    grid-template-rows: 70px auto 60px;
  }

  @keyframes downtop {
    0% {
      transform: translateY(15px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes topdown {
    0% {
      transform: translateY(-500px);
    }

    100% {
      transform: translateY(0);
    }
  }

`