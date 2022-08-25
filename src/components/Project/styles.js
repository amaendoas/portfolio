import styled from "styled-components";

export const Container = styled.div`
  width: 34rem;
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

  .active {
    height: 22rem;
  }
  .content.inactive {
    display: none;
    height: fit-content;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK_P};
  }

  h2 {
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
  height: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  gap: 1rem;
`

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: start;
`

export const Tags = styled.div`
 display: flex;
 gap: 8px;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 `

export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  a:nth-child(1) {
    margin-right: 8px;
  }
  
  a {
    svg {
     color: ${({theme}) => theme.COLORS.PINK_P};
     transition: 0.3s;
   }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a:hover {
    svg {
      color: ${({theme}) => theme.COLORS.BLUE_P};
      transition: 0.3s;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-weight: 500;
    font-size: 1.3rem;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  svg.time {
    font-size: 1.6rem;
  }
`