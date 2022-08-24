import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  height: 100%;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.PINK_S};
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Credits = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`