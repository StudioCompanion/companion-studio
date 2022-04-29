export enum CarouselLayouts {
  FULL = 'full',
  HALF = 'half',
  TWO_THIRDS = '2/3',
}

/**
 * @deprecated
 * Move to use the Stitches styled component
 */
export const WIDTHS = {
  centeredP: 653,
}

/**
 * @deprecated
 * Move to use the Stitches styled component
 */
export const RADII = {
  wrapper: 8,
  wrapper_lg: 12,
  wrapper_mobile: 4,
  video_desktop: 4,
  video_mobile: 2,
}

/**
 * @deprecated
 * Move to use the Stitches styled component
 */
export const PADDING = {
  xs: 12,
  s: 16,
  m: 20,
  l: 24,
  xl: 40,
  xxl: 60,
}

/**
 * @deprecated
 * Move to use the Stitches styled component
 */
export enum Colors {
  white = '#FFFFFF',
  lightgrey = '#F1F1F4',
  lightgrey_2 = '#E5E5EB',
  blue = '#0037B0',
  darkblue = '#1E1C1C',
  darkblue_light = 'rgba(30, 28, 28, .7)',
}

export const HIDDEN = `
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;`

export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  GREY = 'grey',
}

export const THEMES = {
  [ThemeTypes.LIGHT]: {
    background: Colors.white,
    color: Colors.darkblue,
    hover_background: Colors.lightgrey_2,
    hover_color: Colors.darkblue,
  },
  [ThemeTypes.DARK]: {
    background: Colors.darkblue,
    color: Colors.white,
    hover_background: Colors.darkblue_light,
    hover_color: Colors.white,
  },
  [ThemeTypes.GREY]: {
    background: Colors.lightgrey_2,
    color: Colors.darkblue,
    hover_background: Colors.lightgrey_2,
    hover_color: Colors.white,
  },
}

export const COLOR = 'color'
export const HOVER_COLOR = 'hover_color'
export const BACKGROUND = 'background'
export const HOVER_BACKGROUND = 'hover_background'
