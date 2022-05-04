import { Widths } from 'styles/stitches.config'

import { findLastNonNullValue } from './arrays'

export type SizesArray = [
  largeMobile: string | null,
  tablet?: string | null,
  smallDesktop?: string | null,
  largeDesktop?: string | null
]

export const generateSrcSetSizes = (sizes?: string | SizesArray) => {
  if (!sizes) {
    return undefined
  }

  if (typeof sizes === 'string') {
    return sizes
  }

  if (sizes.length === 1 && sizes[0] !== null) {
    return sizes[0]
  }

  return sizes
    .map((val, i) => {
      if (i === sizes.length - 1) {
        return sizes[i]
      }

      let current = val
      if (val === null) {
        current = findLastNonNullValue(sizes, i)
      }

      return `(max-width: ${Object.values(Widths).slice(4, 8)[i]}px) ${current}`
    })
    .join(', ')
}
