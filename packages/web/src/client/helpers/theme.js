import { THEMES, LIGHT, DARK, GREY } from '../styles/constants'
export const getThemeValue = (theme, value) => {
  switch (theme) {
    case LIGHT:
      return THEMES.light[value]
    case DARK:
      return THEMES.dark[value]
    case GREY:
      return THEMES.grey[value]
  }
}
