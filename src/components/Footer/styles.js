import styled from "styled-components";

export const Container = styled.div`
  font-family: 'VT323', monospace;
  grid-area: footer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.TEXT};
    transition: 0.3s;

    svg {
      font-size: 1.5rem;
      opacity: 0;
    }
  }
  
  a:hover {
    color: ${({ theme }) => theme.COLORS.PINK_P};
    
    svg {
      opacity: 1;
    }
  }
`
