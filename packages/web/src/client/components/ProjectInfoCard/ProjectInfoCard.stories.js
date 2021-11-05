import ProjectInfoCard from './ProjectInfoCard'

const Template = (args) => <ProjectInfoCard {...args} />

const ProjectInfo = {
  deliverables: 'UX, UI, Development',
  collaborators: 'Lane & Associates, Ezekiel Aquino',
  team: 'Myles Palmer, Alexandra Vojktu',
  duration: '10 Weeks',
}

export default {
  title: 'Project Info Card',
  component: ProjectInfoCard,
}

export const Primary = Template.bind({})

Primary.args = ProjectInfo
