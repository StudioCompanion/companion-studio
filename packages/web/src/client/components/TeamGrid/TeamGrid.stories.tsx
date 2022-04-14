import { TeamGrid } from './TeamGrid'
import { Story, Meta } from '@storybook/react'

const Template: Story = (args) => <TeamGrid {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Team Grid',
  component: TeamGrid,
} as Meta
