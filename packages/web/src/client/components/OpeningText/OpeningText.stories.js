import OpeningText from './OpeningText'

const Template = (args) => <OpeningText {...args} />

export default {
  title: 'Components/Opening Text',
  component: OpeningText,
}

export const Primary = Template.bind({})

Primary.args = {}
