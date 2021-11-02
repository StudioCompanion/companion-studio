import { Button } from './Button'

const Template = (...args) => <Button {...args} />

export const Primary = Template.bind({})

export default {
  title: 'button',
  component: Button,
}
