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
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: justify;
    margin-top: 1rem;
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
`

export const Footer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
`

export const Tags = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
`

export const Links = styled.div`
  display: flex;
   svg {
    color: ${({theme}) => theme.COLORS.PINK_P};
    transition: 0.3s;
  }

  a:nth-child(1) {
    margin-right: 8px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a:hover {
    span {
      color: ${({theme}) => theme.COLORS.PURPLE_P};
      transition: 0.3s;
    }
    svg {
      color: ${({theme}) => theme.COLORS.PURPLE_P};
      transition: 0.3s;
    }
  }

  span {
    color: ${({theme}) => theme.COLORS.PINK_P};
    transition: 0.3s;
    font-weight: 500;
    font-size: 1.1rem;
  }
`