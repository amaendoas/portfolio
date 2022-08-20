import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  .title {
    background-color: ${({theme}) => theme.COLORS.BLUE_S};
  }
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  animation: downtop 1s backwards;
`