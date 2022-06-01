import { Button } from './Button'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Blocks/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>

export const ButtonWithText: ComponentStory<typeof Button> = () => (
  <Button text={'Hover here!'} />
)
