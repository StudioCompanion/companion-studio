import TeamGrid from './TeamGrid'

const Template = (args) => <TeamGrid {...args} />

export default {
  title: 'Components/Team Grid',
  component: TeamGrid,
}

export const Primary = Template.bind({})

Primary.args = {}
