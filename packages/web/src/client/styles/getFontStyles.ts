import {
  FONT_FAMILIES,
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_APFEL_58_500,
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_26_400,
  FONT_STYLE_RECKLESS_58_400,
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_APFEL_44_400,
  FONT_STYLE_APFEL_32_400,
  FONT_STYLE_APFEL_26_400,
  FONT_STYLE_APFEL_17_400,
  FONT_STYLE_APFEL_58_400,
} from './fonts'
import { MEDIA_QUERIES } from './mediaQueries'
import { CSS, ScaleValue } from './stitches.config'

/**
 *
 * @param {string} type
 * @returns {string}
 */

interface DataType {
  [index: string]: string
}

const getFontData = (type: string) => {
  const lowerCaseType = type.toLowerCase()
  const arrayType = lowerCaseType.split('_')
  const typeProps = arrayType.splice(2, arrayType.length - 1)

  const data: DataType = {}

  typeProps.forEach((prop, i) => {
    switch (i) {
      // FONT-FAMILY
      case 0:
        data['font-family'] = FONT_FAMILIES.filter(
          (fam) => fam.name === prop
        )[0].value
        break
      // FONT-SIZE
      case 1:
        data.size = prop
        break
      // FONT-WEIGHT
      case 2:
        data['font-weight'] = prop
        break
      // TEXT-TRANSFORM
      case 3:
        data['text-transform'] = prop
        break
    }
  })

  return data
}

/**
 * @deprecated
 * Move to use the Stitches styled component
 * @param {string} type
 * @returns {string}
 */
export const getFontStyles = (type: string) => {
  if (!type) {
    console.error('CANNOT RENDER FONT: MISSING TYPE VARIABLE')
    return ''
  }

  let fontProps = ''

  // Get font data based on the type variable
  const fontData = getFontData(type)

  for (const [key, value] of Object.entries(fontData)) {
    // Size is too bespoke on this website depending on application and device that we cannot set it straight away
    if (key === 'size') continue
    fontProps += `${key}: ${value};`
  }

  switch (type) {
    case FONT_STYLE_APFEL_12_400:
      fontProps += `
            font-size: 1.2rem;
            line-height: 1.44rem;
          `
      break

    case FONT_STYLE_APFEL_17_400:
      fontProps += `
      font-size: 1.7rem;
      line-height: 1.3;
      `
      break

    case FONT_STYLE_APFEL_26_400:
      fontProps += `
      font-size: 2rem;
      line-height: 1.3;

      ${MEDIA_QUERIES.tabletUp} {
        font-size: 2.6rem;
      }
      `
      break

    case FONT_STYLE_APFEL_32_400:
      fontProps += `
      font-size: 2.6rem;
      line-height: 1.2;

      ${MEDIA_QUERIES.tabletUp} {
        font-size: 3.2rem;
      }
      `
      break

    case FONT_STYLE_APFEL_44_400:
      fontProps += `
      font-size: 3.2rem;
      line-height: 1.2;

      ${MEDIA_QUERIES.tabletUp} {
        font-size: 4.4rem;
      }
      `
      break

    case FONT_STYLE_APFEL_58_400:
    case FONT_STYLE_APFEL_58_500:
      fontProps += `
        font-size: 4.4rem;
        line-height: 1.2;

      ${MEDIA_QUERIES.tabletUp} {
        font-size: 5.8rem;
        }
            `
      break

    case FONT_STYLE_RECKLESS_17_400:
      fontProps += `
            font-size: 1.7rem;
            line-height: 1.3;
          `
      break
    case FONT_STYLE_RECKLESS_12_400:
      fontProps += `
            font-size: 1.2rem;
            line-height: 1.44rem;
          `
      break
    case FONT_STYLE_RECKLESS_17_400:
      fontProps += `
            font-size: 1.7rem;
            line-height: 1.3;
          `
      break
    case FONT_STYLE_RECKLESS_20_400:
      fontProps += `
            font-size: 1.7rem;
            line-height: 2.21rem;

            ${MEDIA_QUERIES.tabletUp}{
              font-size: 2rem;
              line-height: 2.6rem;
            }
          `
      break
    case FONT_STYLE_RECKLESS_32_400:
      fontProps += `
            font-size: 2rem;
            line-height: 2.6rem;

            ${MEDIA_QUERIES.tabletUp}{
              font-size: 3.2rem;
              line-height: 3.84rem;
            }
          `
      break
    case FONT_STYLE_RECKLESS_26_400:
      fontProps += `
            font-size: 2rem;
            line-height: 1.3;

            ${MEDIA_QUERIES.tabletUp}{
              font-size: 2.6rem;
              line-height: 1.3;
            }
          `
      break
    case FONT_STYLE_RECKLESS_58_400:
      fontProps += `
            font-size: 4.4rem;
            line-height: 1.2;

          ${MEDIA_QUERIES.tabletUp} {
            font-size: 5.8rem;
            }
          `
      break
  }

  return fontProps
}

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
