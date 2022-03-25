import { THEMES, THEME_TYPES } from '../styles/constants'

export const getThemeValue = (theme: string, value: THEME_TYPES) => {
  switch (theme) {
    case THEME_TYPES.LIGHT:
      return THEMES[value]
    case THEME_TYPES.DARK:
      return THEMES[value]
    case THEME_TYPES.GREY:
      return THEMES[value]
  }
}
