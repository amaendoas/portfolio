import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  height: 100%;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.PINK_S};
  padding: 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

export const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
export const Social = styled.div`
`