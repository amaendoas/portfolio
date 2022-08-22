import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 7px;
  border-radius: 10px;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  animation: downtop 1s backwards;
  
  svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 10px;
    box-shadow: 3px 5px 0px ${({ theme }) => theme.COLORS.TEXT};
  }
  
  a:hover {
    animation: buttonD 400ms forwards;
  }
`