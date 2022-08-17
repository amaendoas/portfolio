import styled from "styled-components";

export const Container = styled.button`
  height: 3rem;
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  padding: 0 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.BLUE_S};

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