import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`



* {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes[3]}px;
    color: ${props => props.theme.colors.primaryDarkText};
    background-color: ${props => props.theme.colors.lightBackgroundBody};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
