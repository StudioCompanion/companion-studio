import ValuesGrid from './ValuesGrid'

const Template = (args) => <ValuesGrid {...args} />

export default {
  title: 'Components/Values Grid',
  component: ValuesGrid,
}

export const Primary = Template.bind({})

Primary.args = {}
