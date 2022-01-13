import Nav from './Nav'

const Template = (args) => <Nav {...args} />

export default {
  title: 'Components/Nav',
  component: Nav,
}

export const WorkPage = Template.bind({})

WorkPage.args = {
  currentPath: '/projects/del-core',
}

export const ApproachPage = Template.bind({})

ApproachPage.args = {
  currentPath: '/approach',
}

export const TeamPage = Template.bind({})

TeamPage.args = {
  currentPath: '/team',
}

export const HomePage = Template.bind({})

HomePage.args = {
  currentPath: '/',
}
