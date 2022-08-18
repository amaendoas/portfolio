import styled from "styled-components";

export const Container = styled.button`
  font-family: 'VT323', monospace;
  height: 3.2rem;
  width: fit-content;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};
  box-shadow: 3px 5px 0px ${({ theme }) => theme.COLORS.PINK_P};
  font-size: 2rem;
  line-height: 21px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.COLORS.PINK_P};
  }

  :hover {
    animation: buttonD 400ms forwards;
  }

  @keyframes buttonD {
    0% {
      transform: translate(0,0);
    }

    100% {
      box-shadow: none;
      transform: translate(5px, 3px);
    }
  }

`