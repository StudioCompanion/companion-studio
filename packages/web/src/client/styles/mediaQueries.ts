import { WIDTHS } from './dimensions'

/**
 * @deprecated
 * Move to use the Stitches styled component
 */
const MEDIA_QUERIES = {
  smallTabletUp: `@media (min-width: ${WIDTHS.smallTablet}px)`,
  tabletUp: `@media (min-width: ${WIDTHS.tablet}px)`,
  desktopUp: `@media (min-width: ${WIDTHS.desktop}px)`,
  largeDesktopUp: `@media (min-width: ${WIDTHS.largeDesktop}px)`,
}

export { MEDIA_QUERIES }
