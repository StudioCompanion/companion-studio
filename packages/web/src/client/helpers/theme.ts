import { THEMES, ThemeTypes } from '../styles/constants'

export const getThemeValue = <TTheme extends ThemeTypes = ThemeTypes.LIGHT>(
  value: keyof typeof THEMES[TTheme],
  theme?: TTheme
) => (theme ? THEMES[theme][value] : '')
