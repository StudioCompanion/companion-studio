import { Nav, NavProps } from './Nav'
import { Story, Meta } from '@storybook/react'

const Template: Story<NavProps> = (args) => <Nav {...args} />

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

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta
