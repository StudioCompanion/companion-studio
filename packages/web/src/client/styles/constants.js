export const DESKTOP = 'desktop'
export const MOBILE = 'mobile'

export const LAYOUTS = {
  card: { STUDIO: 'studio', CASE_STUDY: 'case' },
  carousel: { FULL: 'full', HALF: 'half', TWO_THIRDS: '2/3' },
}

export const ASPECT_RATIOS = {
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
  xl: 60,
}

export const COLORS = {
  white: '#FFFFFF',
  lightgrey: '#F6F6F8',
  lightgrey_2: '#E8E8EE',
  darkblue: '#080B37',
  darkblue_light: 'rgba(8, 11, 55, .7)',
  white: '#FFFFFF',
}

export const THEMES = {
  light: {
    background: COLORS.white,
    color: COLORS.darkblue,
    hover_background: COLORS.lightgrey_2,
    hover_color: COLORS.darkblue,
  },
  dark: {
    background: COLORS.darkblue,
    color: COLORS.white,
    hover_background: COLORS.darkblue_light,
    hover_color: COLORS.white,
  },
  grey: {
    background: COLORS.lightgrey_2,
    color: COLORS.darkblue,
  },
}

export const COLOR = 'color'
export const HOVER_COLOR = 'hover_color'
export const BACKGROUND = 'background'
export const HOVER_BACKGROUND = 'hover_background'
export const LIGHT = 'light'
export const DARK = 'dark'
export const GREY = 'grey'
