import { THEMES, LIGHT, DARK } from '../styles/constants'
export const getThemeValue = (theme, value) => {
  switch (theme) {
    case LIGHT:
      return THEMES.light[value]
    case DARK:
      return THEMES.dark[value]
  }
}
