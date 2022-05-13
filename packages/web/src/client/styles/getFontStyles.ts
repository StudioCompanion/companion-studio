import { CSS, ScaleValue } from './stitches.config'

type DesktopFontSizeTokens = ScaleValue<'fontSizes'>

export const getFontStyle = (DeskStyle: DesktopFontSizeTokens): CSS => {
  switch (DeskStyle) {
    case 'XXL':
      return {
        fontSize: '$XXL',
        lineHeight: '$XXL',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XXL':
      return {
        fontSize: '$XL',
        lineHeight: '$XL',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XL':
      return {
        fontSize: '$L',
        lineHeight: '$L',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$L':
      return {
        fontSize: '$M',
        lineHeight: '$M',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$M':
      return {
        fontSize: '$S',
        lineHeight: '$S',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$S':
      return {
        fontSize: '$XS',
        lineHeight: '$XS',

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XS':
      return {
        fontSize: DeskStyle,
        lineHeight: DeskStyle,
      }
    case '$XXS':
      return {
        fontSize: DeskStyle,
        lineHeight: DeskStyle,
      }
    default:
      return {}
  }
}
