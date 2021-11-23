import { ASPECT_RATIOS, LAYOUTS } from 'styles/constants'

const { carousel, card } = LAYOUTS

export const getAspectRatio = (layout, size, suppliedVal) => {
  if (suppliedVal) {
    return evalAspect(suppliedVal[size])
  }
  switch (layout) {
    case carousel.FULL:
      return ASPECT_RATIOS.carousel.full[size]
    case carousel.HALF:
      return ASPECT_RATIOS.carousel.half[size]
    case carousel.TWO_THIRDS:
      return ASPECT_RATIOS.carousel.two_thirds[size]
    case card.STUDIO:
      return ASPECT_RATIOS.card.studio[size]
    case card.CASE_STUDY:
      return ASPECT_RATIOS.card.caseStudy[size]
  }
}

const evalAspect = (aspect) => {
  if (typeof aspect === 'string') {
    if (aspect.includes('/')) {
      const x = aspect.split('/')
      return `${(x[1] / x[0]) * 100}%`
    }
    if (aspect.includes('%')) {
      return aspect
    }
    return
  }
  if (typeof aspect === 'number') {
    return `${(1 / aspect) * 100}%`
  }
}
