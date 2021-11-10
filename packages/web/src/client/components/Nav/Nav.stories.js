import Nav from './Nav'
import Logo from '../../../../public/logo_placeholder.png'

const navItems = [
  { title: 'Work', url: '/work' },
  { title: 'Approach', url: '/approach' },
  { title: 'Team', url: '/team' },
]

const Template = (args) => <Nav {...args} />

export default {
  title: 'Components/Nav',
  component: Nav,
}

export const Primary = Template.bind({})

Primary.args = { navItems: navItems, logo: Logo }
