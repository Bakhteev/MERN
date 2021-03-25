import { createGlobalStyle } from 'styled-components'

export const AppGlobalStyles = createGlobalStyle`
  body {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  input,button {
    border: none;
    outline: none;
  }
  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  a{
    color: inherit;
    display: inline-block;
    text-decoration: none;
  }
`
