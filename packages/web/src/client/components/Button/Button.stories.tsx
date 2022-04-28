import { Button, ButtonProps } from './Button'
import { Story, Meta } from '@storybook/react'

import { ThemeTypes } from '../../styles/constants'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// button variations - light, dark, linked
export const LightTheme = Template.bind({})

LightTheme.args = { text: 'Message us' }

export const DarkTheme = Template.bind({})

DarkTheme.args = { text: 'Message us', theme: ThemeTypes.DARK }

export const WithLink = Template.bind({})

WithLink.args = { text: 'Message us', link: '#' }

export default {
  title: 'Components/Button',
  component: Button,
} as Meta
