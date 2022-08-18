import styled from "styled-components";

export const Container = styled.div`
  width: 32rem;
  height: fit-content;
  border: 2px solid ${({theme}) => theme.COLORS.TEXT};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: downtop 1s backwards;

  .line {
    height: 2px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TEXT};
    margin-top: 8px;
   }

   @media (min-width: 900px) {
    width: 40rem;
   }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;

  .dot {
    width: 13px;
    height: 13px;
    border: 4px solid ${({theme}) => theme.COLORS.TEXT};
    border-radius: 50%;
    margin-left: 3px;
   }
`

export const Content = styled.div`

`