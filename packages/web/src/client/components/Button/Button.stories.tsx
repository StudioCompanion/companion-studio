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

export const Default: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.span} />
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
  span: {
    text: `Click Me!`,
    theme: ThemeTypes.DARK,
    tag: `span`,
  },
}
