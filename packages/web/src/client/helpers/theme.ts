import { THEMES, THEME_TYPES } from '../styles/constants'

export const getThemeValue = <TTheme extends THEME_TYPES = THEME_TYPES.LIGHT>(
  theme: TTheme,
  value: keyof typeof THEMES[TTheme]
) => THEMES[theme][value]
