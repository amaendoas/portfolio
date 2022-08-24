import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  body {
    height: 100vh;
    background: linear-gradient(65.97deg, rgba(242, 139, 157, 0.4) -1.17%, rgba(178, 182, 244, 0.4) 47.65%, rgba(99, 199, 221, 0.4) 96.47%);
    font-family: 'JetBrains Mono', monospace;
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK_S};
    border: 1px solid #5c5c5c;
    box-shadow: inset -3px -3px 2px 1px ${({ theme }) => theme.COLORS.PINK_P};
  }

  button {
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    background-color: transparent;
  }

  input, textarea {
    font-family: 'JetBrains Mono', monospace;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
    border: none;
    border-bottom: 3px solid ${({theme}) => theme.COLORS.TEXT};
    margin-top: 1.2rem;
    padding: 1rem;
  }
  
  input {
    width: 100%;
    height: 4rem;
  }

  textarea {
    resize: none;
    height: 10rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`