import OpeningText from './OpeningText'

const Template = (args) => <OpeningText {...args} />

export default {
  title: 'Components/Opening Text',
  component: OpeningText,
}

export const Primary = Template.bind({})

Primary.args = {
  text: 'Companion is a design studio that partners with you to design and build digital products that inspire, disrupt, entertain and create a better future for people and planet.',
}
