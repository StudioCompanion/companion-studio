import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Apfel Groteszk',
      src: "url('/fonts/ApfelGrotezk-Regular.wof2f') format('woff2'), url('/fonts/ApfelGrotezk-Regular.woff') format('woff')",
      fontWeight: 400,
    },
    {
      fontFamily: 'Apfel Groteszk',
      src: "url('/fonts/ApfelGrotezk-Fett.woff2') format('woff2'), url('/fonts/ApfelGrotezk-Fett.woff') format('woff')",
      fontWeight: 700,
    },
  ],

  '*, *:before, *:after': {
    boxSizing: 'border-box',
    transition: 'background-color 250ms ease-in-out, opacity 250ms ease-in-out',

    '@motion': {
      transition: 'none',
    },
  },

  'html, body': {
    fontSize: '62.5%',
    fontFamily: '$apfel',
    letterSpacing: '-0.01em',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    m: 0,
    p: 0,
    color: '$darkBlue',
  },

  button: {
    fontFamily: '$apfel',
  },

  'h1, h2, h3, h4, h5, h6, p, dd, dl': {
    margin: 0,
  },

  ul: {
    listStyle: 'none',
    p: 0,
    m: 0,
  },

  strong: {
    fontWeight: '$bold',
  },

  // this is for lottie to stop the background showing
  '.background path': {
    fill: 'none',
  },
})
