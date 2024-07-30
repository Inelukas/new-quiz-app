import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FFE9D0;
    --secondary-color: #FFFED3;
    --tertiary-color: #BBE9FF;
    --side-color: #B1AFFF;
    --text-color: #000000;
    --text-color-2: #F5E7B2;
    --hover-color: lightblue;
    --icon-color: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    color: var(--text-color)
  }

  .dark-mode {
    --primary-color: #000000;
    --secondary-color: #333333;
    --tertiary-color: #444444;
    --side-color: #555555;
    --text-color: #F5E7B2;
    --text-color-2: #000000;
    --icon-color: #555555;
  }

`;
