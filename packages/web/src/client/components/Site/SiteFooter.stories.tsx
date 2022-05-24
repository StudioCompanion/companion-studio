import { Footer } from './SiteFooter'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <Footer {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Site/Footer',
  component: Footer,
} as Meta
