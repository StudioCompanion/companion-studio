import { THEMES, THEME_TYPES, VALUE_TYPES } from '../styles/constants'

type VALUE_TYPES_GREY = Exclude<
  VALUE_TYPES,
  VALUE_TYPES.BACKGROUND | VALUE_TYPES.HOVER_BACKGROUND
>

export const getThemeValue = (
  theme: string,
  value: VALUE_TYPES | VALUE_TYPES_GREY
) => {
  switch (theme) {
    case THEME_TYPES.LIGHT:
      return THEMES.light[value]
    case THEME_TYPES.DARK:
      return THEMES.dark[value]
    case THEME_TYPES.GREY:
      return THEMES.grey[value]
  }
}
