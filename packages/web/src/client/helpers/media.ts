import {
  ASPECT_RATIOS,
  CARD_LAYOUTS,
  CarouselLayouts,
  LAYOUTS,
} from 'styles/constants'
import { WIDTHS } from 'styles/dimensions'

import { findLastNonNullValue } from './arrays'

export const getAspectRatio = (
  layout: LAYOUTS,
  size: 'desktop' | 'mobile',
  suppliedVal?: {
    desktop: string | number
    mobile: string | number
  }
) => {
  if (suppliedVal) {
    return evalAspect(suppliedVal[size])
  }
  switch (layout) {
    case CarouselLayouts.FULL:
      return ASPECT_RATIOS.carousel.full[size]
    case CarouselLayouts.HALF:
      return ASPECT_RATIOS.carousel.half[size]
    case CarouselLayouts.TWO_THIRDS:
      return ASPECT_RATIOS.carousel.two_thirds[size]
    case CARD_LAYOUTS.STUDIO:
      return ASPECT_RATIOS.card.studio[size]
    case CARD_LAYOUTS.CASE_STUDY:
      return ASPECT_RATIOS.card.caseStudy[size]
  }
}

const evalAspect = (aspect: string | number): string => {
  if (typeof aspect === 'string') {
    if (aspect.includes('/')) {
      const x = aspect.split('/').map((val) => parseInt(val))
      return `${(x[1] / x[0]) * 100}%`
    }
    if (aspect.includes('%')) {
      return aspect
    }
  }
  if (typeof aspect === 'number') {
    return `${(1 / aspect) * 100}%`
  }

  return ''
}

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

      return `(max-width: ${Object.values(WIDTHS).slice(4, 8)[i]}px) ${current}`
    })
    .join(', ')
}
