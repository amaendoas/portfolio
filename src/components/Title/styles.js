import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 0.5rem 2rem;
  box-shadow: 3px 5px 0px ${({ theme }) => theme.COLORS.YELLOW_P};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  margin-left: 2rem;
  margin-top: 3rem;
  animation: downtop 1s backwards;

  h1 {
    font-size: 2.7rem;
    letter-spacing: -0.05em;
  }

  @media (min-width: 800px) {
    margin-left: 4rem;
  }

  @media (min-width: 1080px) {
    margin-left: 6rem;
  }
`