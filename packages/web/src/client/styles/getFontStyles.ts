import { CSS, ScaleValue } from './stitches.config'

type DesktopFontSizeTokens = ScaleValue<'fontSizes'>

type DesktopFontWeightTokens = ScaleValue<'fontWeights'>

export const getFontStyle = (
  DeskStyle: DesktopFontSizeTokens,
  weight: DesktopFontWeightTokens = '$regular'
): CSS => {
  switch (DeskStyle) {
    case '$XXXL':
      return {
        fontSize: '$XXL',
        lineHeight: '$XXL',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XXL':
      return {
        fontSize: '$XL',
        lineHeight: '$XL',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XL':
      return {
        fontSize: '$L',
        lineHeight: '$L',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$L':
      return {
        fontSize: '$M',
        lineHeight: '$M',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$M':
      return {
        fontSize: '$S',
        lineHeight: '$S',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$S':
      return {
        fontSize: '$XS',
        lineHeight: '$XS',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XS':
      return {
        fontSize: '$XXS',
        lineHeight: '$XXS',
        fontWeight: weight,

        '@tabletUp': {
          fontSize: DeskStyle,
          lineHeight: DeskStyle,
        },
      }
    case '$XXS':
      return {
        fontSize: DeskStyle,
        lineHeight: DeskStyle,
        fontWeight: weight,
      }
    default:
      return {}
  }
}
