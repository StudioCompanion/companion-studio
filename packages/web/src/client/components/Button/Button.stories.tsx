import { Button } from './Button'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'
import { ThemeTypes } from 'styles/constants'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Dark: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.dark} />
)

export const Light: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.light} />
)

export const OutlinedDark: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.outlinedDark} />
)

export const OutlinedLight: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.outlinedLight} />
)

export const External: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.external} />
)

export const Internal: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.internal} />
)

const fixtures: StoryFixtures<typeof Button> = {
  dark: {
    text: `Click Me!`,
    theme: ThemeTypes.DARK,
  },
  light: {
    text: `Click Me!`,
    theme: ThemeTypes.LIGHT,
  },
  outlinedDark: {
    text: `Click Me!`,
    theme: ThemeTypes.DARK,
    isOutlined: true,
  },
  outlinedLight: {
    text: `Click Me!`,
    isOutlined: true,
  },
  external: {
    text: `Click Me!`,
    isExternal: true,
    label: `Companion Studio`,
    url: `https://companion.studio/`,
  },
  internal: {
    text: `Click Me!`,
    isExternal: false,
    label: `Approach`,
    url: `/approach`,
  },
}
