import Footer from './Footer'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <Footer {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta
