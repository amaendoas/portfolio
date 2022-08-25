import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT}; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .button-menu {
    border: none;
    z-index: 3;
  }

  .logo {
    box-shadow: 4px 4px 0px ${({ theme }) => theme.COLORS.PINK_P};
  }

  ul li button {
    width: 11rem;
    span {
      opacity: 0;
    }
  }
  
  ul li button:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.PINK_P};
    span {
      transition: 0.5s;
      opacity: 1;
    }

  ul li button.selected {
    span {
      opacity: 1;
    }
  }
  }
  
  .menu.active {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 2;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    width: 100vw;
    height: 100vh;
    animation: topdown 500ms;
    
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
  
  @media (min-width: 800px) {

    .button-menu {
      display: none;
    }

    .menu.inactive {
      display: flex;

      ul {
        display: flex;
        gap: 3rem;
      }
    }
  }

  @keyframes topdown {
    0% {
      transform: translateY(-500px);
    }

    100% {
      transform: translateY(0);
    }
  }

`