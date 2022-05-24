import { Callout } from './SiteCallout'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <Callout {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Site/Callout',
  component: Callout,
} as Meta
