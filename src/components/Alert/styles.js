import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  animation: topdown 500ms;
`
export const CloseBtn = styled.button`
  border: none;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
  height: 4rem;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({theme}) => theme.COLORS.TEXT};
  padding: 0 1.5rem;
  p {
    font-size: clamp(1rem, 1rem + 5vw, 1.4rem);
    margin-right: 1rem;
  }
  img {
    width: 1rem;
  }
  svg {
    color: ${({theme}) => theme.COLORS.PINK_P};
  }

  @keyframes topdown {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

`