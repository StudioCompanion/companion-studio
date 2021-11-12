import Callout from './Callout'

const Template = (args) => <Callout {...args} />

export default {
  title: 'Components/Callout',
  component: Callout,
}

export const Primary = Template.bind({})

Primary.args = {}
