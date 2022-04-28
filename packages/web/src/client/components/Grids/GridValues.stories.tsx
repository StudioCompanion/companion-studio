import { ValuesGrid } from './GridValues'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <ValuesGrid {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Values Grid',
  component: ValuesGrid,
} as Meta
