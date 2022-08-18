import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.PINK_S};
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`