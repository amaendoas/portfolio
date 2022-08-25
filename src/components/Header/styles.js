import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT}; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .active {
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT}; 
      span {
        opacity: 1;
      }
    }

  .button-menu {
    border: none;
    z-index: 3;
  }

  .logo {
    box-shadow: 4px 4px 0px ${({ theme }) => theme.COLORS.PINK_P};
  }
  
  nav a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'VT323', monospace;
    font-size: 2rem;
    height: 3.2rem;
    width: fit-content;
    padding: 0 5px;
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_700}; 

    span {
      color: ${({ theme }) => theme.COLORS.PINK_P};
      opacity: 0;
    }
  }
  
  nav a:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT}; 
    span {
      opacity: 1;
    }
  }

  .menu.show {
    display: flex;
    flex-direction: column;
    gap: 3rem;
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
    
    nav {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      align-items: center;
    }
    
  }
  
  .menu.hide {
    display: none;
    display: flex;
    gap: 8px;
  }
  
  @media (min-width: 800px) {

    .button-menu {
      display: none;
    }

    .menu.hide {
      display: flex;

      nav {
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