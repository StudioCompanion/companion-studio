
import { THEMES, THEME_TYPES } from '../styles/constants'
export const getThemeValue = (theme, value) => {
  switch (theme) {
    case THEME_TYPES.LIGHT:
      return THEMES.light[value]
    case THEME_TYPES.DARK:
      return THEMES.dark[value]
    case THEME_TYPES.GREY:
      return THEMES.grey[value]
  }
}
