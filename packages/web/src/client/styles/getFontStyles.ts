import { CSS, ScaleValue } from './stitches.config'

type DesktopFontSizeTokens = ScaleValue<'fontSizes'>

export const getFontStyle = (DeskStyle: DesktopFontSizeTokens): CSS => {
  switch (DeskStyle) {
    case '$h1':
      return {
        fontSize: '$h2',
        lineHeight: '$h2',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$h2':
      return {
        fontSize: '$h3',
        lineHeight: '$h3',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$h3':
      return {
        fontSize: '$h4',
        lineHeight: '$h4',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$h4':
      return {
        fontSize: '$h5',
        lineHeight: '$h5',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$h5':
      return {
        fontSize: '$h6',
        lineHeight: '$h6',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$h6':
      return {
        fontSize: '$h6',
        lineHeight: '$h6',
      }
    case '$body':
      return {
        fontFamily: '$reckless',
        fontSize: '$h5',
        lineHeight: '$h5',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    default:
      return {}
  }
}
