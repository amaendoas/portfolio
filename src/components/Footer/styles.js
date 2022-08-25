import styled from "styled-components";

export const Container = styled.div`
  font-family: 'VT323', monospace;
  padding: 0 1rem;
  grid-area: footer;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

    a {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 1.9rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
      transition: 0.3s;
  
      span {
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK_P};
        opacity: 0;
        transition: 0.3s;
      }
    }
    
    a:hover {
      span {
        opacity: 1;
      }
    }
`
