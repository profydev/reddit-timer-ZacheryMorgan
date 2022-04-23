import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'BitterVariable';
    max-width: 1440px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
