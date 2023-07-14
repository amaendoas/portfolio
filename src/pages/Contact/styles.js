import styled from "styled-components";
import bgImg from "../../assets/bg-conffeti.svg"

export const Container = styled.div`
  grid-area: content;
  background-image: url(${bgImg});
  background-repeat: repeat;
`

export const Content = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img.clouds {
    position: absolute;
    top: -3rem;
    right: -3rem;
    width: 12rem;
    height: 7rem;
  }

  img.balloon {
    display: none;
  }

  .content {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.PINK_S};
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_P};
  }

  button.sending {
    background-color: ${({ theme }) => theme.COLORS.PINK_P};

    p {
      margin-left: 5px;
    }

    :hover {
      
    }
  }

  @media (min-width: 800px) {
    img.balloon{
      display: block;
      position: absolute;
      bottom: -6rem;
      left: -7rem;
    }

    img.clouds {
    top: -5rem;
    right: -5rem;
    width: 14rem;
    height: 9rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`