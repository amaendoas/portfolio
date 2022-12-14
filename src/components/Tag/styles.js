import styled from "styled-components";

export const Container = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 2.4rem;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  padding: 0 1.1rem;
  border: 1px solid #1B1B1B;
  box-shadow: 3px 3px 0px ${({theme}) => theme.COLORS.PINK_P};
  border-radius: 10px;
`