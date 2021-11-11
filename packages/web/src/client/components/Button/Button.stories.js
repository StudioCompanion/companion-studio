import Button from './Button'
import { LIGHT, DARK } from '../../styles/constants'

const Template = (args) => <Button {...args} />

export default {
  title: 'Components/Button',
  component: Button,
}

export const LightTheme = Template.bind({})

LightTheme.args = { text: 'Message us' }

export const DarkTheme = Template.bind({})
DarkTheme.args = { text: 'Message us', theme: DARK }

export const WithLink = Template.bind({})

WithLink.args = { text: 'Message us', link: '#' }
