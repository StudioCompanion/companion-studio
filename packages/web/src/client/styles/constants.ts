export const DESKTOP = 'desktop'
export const MOBILE = 'mobile'

export enum CAROUSEL_LAYOUTS {
  FULL = 'full',
  HALF = 'half',
  TWO_THIRDS = '2/3',
}

export enum CARD_LAYOUTS {
  STUDIO = 'studio',
  CASE_STUDY = 'case',
}

export type LAYOUTS = CAROUSEL_LAYOUTS | CARD_LAYOUTS

export const ASPECT_RATIOS = {
  video: {
    widescreen: '56.25%',
  },
  carousel: {
    full: {
      desktop: '56.25%',
      mobile: '69%',
    },
    half: {
      desktop: '114%',
      mobile: '103%',
    },
    two_thirds: {
      desktop: '85%',
      mobile: '69%',
    },
  },
  card: {
    caseStudy: {
      desktop: '107%',
      mobile: '124%',
    },
    studio: {
      desktop: '71%',
      mobile: '80%',
    },
  },
}

export const WIDTHS = {
  centeredP: 653,
}

export const RADII = {
  wrapper: 8,
  wrapper_lg: 12,
  wrapper_mobile: 4,
  video_desktop: 4,
  video_mobile: 2,
}

export const PADDING = {
  xs: 12,
  s: 16,
  m: 20,
  l: 24,
  xl: 40,
  xxl: 60,
}

export enum COLORS {
  white = '#FFFFFF',
  lightgrey = '#F1F1F4',
  lightgrey_2 = '#E5E5EB',
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

const LIGHT = 'light'
const DARK = 'dark'
const GREY = 'grey'

export const THEME_TYPES = {
  LIGHT,
  DARK,
  GREY,
}

export const THEMES = {
  [LIGHT]: {
    background: COLORS.white,
    color: COLORS.darkblue,
    hover_background: COLORS.lightgrey_2,
    hover_color: COLORS.darkblue,
  },
  [DARK]: {
    background: COLORS.darkblue,
    color: COLORS.white,
    hover_background: COLORS.darkblue_light,
    hover_color: COLORS.white,
  },
  [GREY]: {
    background: COLORS.lightgrey_2,
    color: COLORS.darkblue,
  },
}

export const COLOR = 'color'
export const HOVER_COLOR = 'hover_color'
export const BACKGROUND = 'background'
export const HOVER_BACKGROUND = 'hover_background'