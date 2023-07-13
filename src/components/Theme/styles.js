import styled from "styled-components";

export const Container = styled.div `
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 52px min-content auto 38px;
  grid-template-areas:
  "header"
  "subHeader"
  "content"
  "footer";
  overflow-x: hidden;
  overflow-y: hidden;

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

  @keyframes buttonD {
    0% {
      transform: translate(0,0);
    }

    100% {
      box-shadow: 4px 4px 0px ${({ theme }) => theme.COLORS.TEXT};
      transform: translate(-4px, -4px);
    }
  }
`