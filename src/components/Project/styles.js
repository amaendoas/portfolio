import styled from "styled-components";

export const Container = styled.div`
  width: 34rem;
  height: fit-content;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 1.3rem 2rem;
  border: 1px solid ${({theme}) => theme.COLORS.TEXT};
  box-shadow: 4px 4px 0px ${({theme}) => theme.COLORS.TEXT};
  border-radius: 10px;

  p {
    width: 100%;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.4rem;
    text-align: justify;
  }
  .content.inactive {
    display: none;
  }
`

export const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.7rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    height: 2.3rem;
    border-width: 0px 0px 2px 2px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.TEXT};
    background-color: ${({theme}) => theme.COLORS.PINK_P};
  }

  h2 {
    width: 80%;
    font-weight: 800;
    letter-spacing: -0.05em;
    font-size: 2rem;
  }

  button {
    border: none;
    svg {
      font-size: 3rem;
      color: ${({theme}) => theme.COLORS.PINK_P};
    }
  }
`

export const Content = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
  
      img {
        margin-top: 1rem;
        object-fit: cover;
        width: 100%;
        height: 12rem;
        background: ${({theme}) => theme.COLORS.NEUTRAL_700};
        box-shadow: inset 0px 0px 20px 3px rgba(0, 0, 0, 0.20);
        border: 1px solid ${({theme}) => theme.COLORS.TEXT};
      }                         
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;

  svg {
    color: ${({theme}) => theme.COLORS.PINK_P};
  }
`