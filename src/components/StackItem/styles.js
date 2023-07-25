import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem;
  width: 22rem;
  height: 25rem;
  background-color: ${({theme}) => theme.COLORS.GREEN_S};
  border: 1px solid ${({theme}) => theme.TITLE === 'light' ? theme.COLORS.TEXT : theme.COLORS.NEUTRAL_700};
  box-shadow: 4px 4px 0px ${({theme}) => theme.COLORS.TEXT};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.1rem;
`

export const Item = styled.div`
  width: 20rem;
  height: 15rem;
  gap: 1.3rem;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  box-shadow: inset 0px 0px 20px 3px ${({theme}) => theme.TITLE === 'light' ? `rgba(0, 0, 0, 0.20)` : `rgba(195, 195, 195, 0.20)`};
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 20rem;
  height: 4rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`