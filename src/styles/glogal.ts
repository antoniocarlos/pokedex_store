import { createGlobalStyle } from 'styled-components';

// import githubBackground from '../assets/github-background.svg';
// Create a blobal stylesheet
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
