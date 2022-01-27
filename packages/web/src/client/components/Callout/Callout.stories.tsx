import { Callout } from './Callout'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <Callout {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Callout',
  component: Callout,
} as Meta
