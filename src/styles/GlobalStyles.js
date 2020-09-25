import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    color: var(--white);
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;    
    height: 100%;
    width: 100%;
  }

  *, button, input {
    background: none;
    border: 0; 
  }

  :root {
    --background: #141414;
    --dark-button: #333;
    --hover-white: #B3B3B3;
    --primary: #D81F26;
    --off-white: #D9D9D9;
    --white: white;
    --rating: #46D369;
  }
`;