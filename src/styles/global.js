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

  button {
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    background-color: transparent;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`