import { ASPECT_RATIOS, LAYOUTS } from 'styles/constants'

const [FULL, HALF, TWO_THIRDS] = LAYOUTS

export const getAspectRatio = (layout, size, suppliedVal) => {
  if (suppliedVal) {
    return evalAspect(suppliedVal)
  }
  switch (layout) {
    case FULL:
      return ASPECT_RATIOS.full[size]
    case HALF:
      return ASPECT_RATIOS.half[size]
    case TWO_THIRDS:
      return ASPECT_RATIOS.two_thirds[size]
  }
}

const evalAspect = (aspect) => {
  if (typeof aspect === 'string') {
    const x = aspect.split('/')
    return `${(x[1] / x[0]) * 100}%`
  }
  if (typeof aspect === 'number') {
    return `${(1 / aspect) * 100}%`
  }
}
