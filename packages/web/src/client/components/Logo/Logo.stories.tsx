import { Logo } from './Logo'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = () => <Logo />
