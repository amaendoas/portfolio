import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({theme}) => theme.COLORS.DARK_600};
  width: 100%;

  span {
    font-size: 1.3rem;
    font-weight: 500;
  }
  
  svg {
    font-size: 13px;
    color: ${({theme, finished}) => finished ? theme.COLORS.GREEN : theme.COLORS.ORANGE}
  }
`