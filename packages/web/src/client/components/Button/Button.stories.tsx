import { Button } from './Button'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoryFixtures } from '@types'
import { ThemeTypes } from 'styles/constants'

export default {
  title: 'Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const ButtonDark: ComponentStory<typeof Button> = () => (
  <Button {...fixtures.buttonDark} />
)

const fixtures: StoryFixtures<typeof Button> = {
  buttonDark: {
    text: `Click Me!`,
    theme: ThemeTypes.DARK,
  },
}
