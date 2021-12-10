import { COLORS } from './constants'
import { getFontStyles } from './getFontStyles'
import {
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_58_400,
} from './fonts'

export const CSS_GLOBAL = `
  @font-face {
    font-family: 'Apfel Groteszk';
    src: url('/fonts/ApfelGrotezk-Regular.woff') format('woff');
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
    color: ${COLORS.darkblue} 
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h1 {
    ${getFontStyles(FONT_STYLE_RECKLESS_58_400)}
  }
  h2 {
    ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  }
  h3 {
    ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
  }
  p {
    ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  }
  p a {
      ${getFontStyles(FONT_STYLE_APFEL_12_400)}
      color: inherit;
    }
  p a:hover {
    opacity: .5;
  }

  // this is for lottie to stop the background showing
  .background path {
    fill: none;
  }
`
