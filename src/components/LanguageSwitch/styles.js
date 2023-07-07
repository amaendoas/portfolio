import styled from "styled-components";

export const Dropdown = styled.div`
`

export const Button = styled.button`
  border: 1px solid ${({theme}) => theme.COLORS.NEUTRAL_700};
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;

  :hover {
    border: 1px solid ${({theme}) => theme.COLORS.TEXT};
    transition: 0.3s;
  }
`

export const PopUp = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  right: 50%;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  z-index: 200;
`

export const After = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 199;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.TEXT};
`
