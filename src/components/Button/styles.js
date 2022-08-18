import styled from "styled-components";

export const Container = styled.button`
  height: 3rem;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
  padding: 0 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.BLUE_S};

  @media (min-width: 801px) {
    height: 4rem;
    font-size: 1.6rem;
    margin-top: 15px 0;
    img {
      width: 3.6rem;
      height: 3.6rem;
    }
  }


  :hover {
    animation: buttonB 400ms forwards;
    background-color: ${({ theme }) => theme.COLORS.BLUE_P};
  }

  @keyframes buttonB {
    0% {
      transform: translate(0,0);
    }

    100% {
      box-shadow: 3px 5px 0px ${({ theme }) => theme.COLORS.TEXT};
      transform: translate(-5px, -3px);
    }
  }
`