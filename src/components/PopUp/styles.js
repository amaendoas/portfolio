import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: 50em;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  border: 4px solid ${({theme}) => theme.COLORS.TEXT};
  border-radius: 10px;
  p {
    font-size: clamp(1rem, 1rem + 5vw, 1.5rem)
  }
  padding-bottom: 2rem;
`
export const CloseBtn = styled.button`
  border: none;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid ${({theme}) => theme.COLORS.TEXT};
  font-weight: bold;
  background-color: ${({theme}) => theme.COLORS.PURPLE_S};

  img {
    color: ${({theme}) => theme.COLORS.TEXT};
  }
`

export const Body = styled.div`
  padding: 1rem;
`