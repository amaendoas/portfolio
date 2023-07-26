import styled from "styled-components";

export const Container = styled.button`
  height: 3rem;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
  padding: 0 17px 0 8px;
  cursor: pointer;
  background-color: ${({ theme, btnColor }) => btnColor === 'pink' ? theme.COLORS.PINK_S : theme.COLORS.BLUE_S};
  color: ${({ theme }) => theme.TITLE === 'light' ? theme.COLORS.TEXT : theme.COLORS.NEUTRAL_700};

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
    animation: buttonD 400ms forwards;
    background-color: ${({ theme, btnColor }) => btnColor === 'pink' ? theme.COLORS.PINK_P : theme.COLORS.BLUE_P};
  }

  :disabled {
    animation: none;
    background-color: ${({ theme, btnColor }) => btnColor === 'pink' ? theme.COLORS.PINK_P : theme.COLORS.BLUE_P};
    cursor: wait;
  }

  p {
    padding: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
`