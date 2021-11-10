import Nav from './Nav'

const Template = (args) => <Nav {...args} />

export default {
  title: 'Components/Nav',
  component: Nav,
}

export const WorkPage = Template.bind({})

WorkPage.parameters = {
  nextRouter: {
    pathname: '/work',
  },
}

export const ApproachPage = Template.bind({})

ApproachPage.parameters = {
  nextRouter: {
    pathname: '/approach',
  },
}

export const TeamPage = Template.bind({})

TeamPage.parameters = {
  nextRouter: {
    pathname: '/team',
  },
}

export const HomePage = Template.bind({})

HomePage.parameters = {
  nextRouter: {
    pathname: '/',
  },
}
