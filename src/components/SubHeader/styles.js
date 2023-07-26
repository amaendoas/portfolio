import styled from "styled-components";

export const Container = styled.div`
  grid-area: subHeader;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 52px;
  right: 0;
  padding: 5px;
  margin: 1rem;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({theme}) => theme.COLORS.TEXT};
  
  @media (min-width: 800px) {
    margin: 1rem 3rem;
  }
`