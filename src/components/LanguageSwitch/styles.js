import styled from "styled-components";

export const DropDown = styled.div`
  position: relative;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};

  border: 1px solid ${({theme}) => theme.COLORS.TEXT};
  padding: 1rem;
`

export const LanguageBtn = styled.button`
  border: none;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.5rem;
`

export const Wrapper = styled.div`
  gap: 1rem;
  margin-top: 0.5rem;
  padding: 1rem;
`