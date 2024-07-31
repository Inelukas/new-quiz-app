import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #D1E8E2;
    --secondary-color: #D9B08C;
    --tertiary-color: #FFCB9A;
    --side-color: #116466;
    --text-color: #000000;
    --text-color-2: #2C3531;
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
    color: var(--text-color);
    font-family: "Literata", serif;
    font-weight: 400;
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
