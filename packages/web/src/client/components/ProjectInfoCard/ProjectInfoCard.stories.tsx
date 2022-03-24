import { ProjectInfoCard, ProjectInfoCardProps } from './ProjectInfoCard'
import { Story, Meta } from '@storybook/react'

const Template: Story<ProjectInfoCardProps> = (args) => (
  <ProjectInfoCard {...args} />
)

const ProjectInfo = {
  deliverables: 'UX, UI, Development',
  collaborators: 'Lane & Associates, Ezekiel Aquino',
  team: 'Myles Palmer, Alexandra Vojktu',
  duration: '10 Weeks',
}

export const Primary = Template.bind({})

Primary.args = ProjectInfo

export default {
  title: 'Components/Project Info Card',
  component: ProjectInfoCard,
} as Meta
