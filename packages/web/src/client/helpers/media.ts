import {
  ASPECT_RATIOS,
  CARD_LAYOUTS,
  CAROUSEL_LAYOUTS,
  LAYOUTS,
} from 'styles/constants'

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
    case CAROUSEL_LAYOUTS.FULL:
      return ASPECT_RATIOS.carousel.full[size]
    case CAROUSEL_LAYOUTS.HALF:
      return ASPECT_RATIOS.carousel.half[size]
    case CAROUSEL_LAYOUTS.TWO_THIRDS:
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
