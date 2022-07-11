import { Splash } from './Splash'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Site/Splash',
  component: Splash,
} as ComponentMeta<typeof Splash>

export const Default: ComponentStory<typeof Splash> = () => <Splash />
