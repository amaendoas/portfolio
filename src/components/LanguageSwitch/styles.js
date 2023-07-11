import styled from "styled-components";

export const PopUpBtn = styled.div`
`

export const LanguageBtn = styled.button`
  border: 1px solid ${({theme}) => theme.COLORS.NEUTRAL_700};
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  :hover {
    border: 1px solid ${({theme}) => theme.COLORS.TEXT};
    transition: 0.3s;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;
  height: 100%;
  width: 100%;
  background-color: #1B1B1BAA;
  `