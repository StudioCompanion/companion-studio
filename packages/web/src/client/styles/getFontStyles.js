import {
  FONT_FAMILIES,
  FONT_STYLE_APFEL_12_400,
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_17_400,
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_58_400,
  FONT_STYLE_RECKLESS_32_400,
} from './fonts'
import { MEDIA_QUERIES } from './mediaQueries'

/**
 *
 * @param {string} type
 * @returns {string}
 */
const getFontData = (type) => {
  const lowerCaseType = type.toLowerCase()
  const arrayType = lowerCaseType.split('_')
  const typeProps = arrayType.splice(2, arrayType.length - 1)

  const data = {}

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
 *
 * @param {string} type
 * @returns {string}
 */
export const getFontStyles = (type) => {
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
    case FONT_STYLE_RECKLESS_58_400:
      fontProps += `
            font-size: 5.8rem;
            line-height: 1.2;
          `
      break
  }

  return fontProps
}
