import { Colors } from './constants'

export const CSS_GLOBAL = /* css */ `
  @font-face {
    font-family: 'Apfel Groteszk';
    src: url('/fonts/ApfelGrotezk-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apfel Groteszk';
    src: url('/fonts/ApfelGrotezk-Fett.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Reckless Neue';
    src: url('/fonts/RecklessNeue-Book.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Reckless Neue';
    src: url('/fonts/RecklessNeue-Regular.woff') format('woff');
    font-weight: 500;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    transition: background-color 250ms ease-in-out, opacity 250ms ease-in-out;
  }

  html {
    font-size: 62.5%;
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${Colors.darkblue}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  dd,
  dl {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  // this is for lottie to stop the background showing
  .background path {
    fill: none;
  }
`
