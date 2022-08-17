import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};

  .button-menu {
    border: none;
    z-index: 2;
  }

  ul li button {
    width: 8.5rem;
    span {
      display: none;
    }
  }

  .menu.active {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    width: 100vw;
    height: 100vh;

    ul {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      align-items: center;
    }

  }

  .menu.inactive {
     display: none;
  }
`