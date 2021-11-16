import StickyParagraph from './StickyParagraph'

const Template = (args) => <StickyParagraph {...args} />

export default {
  title: 'Components/Sticky Paragraph',
  component: StickyParagraph,
}

export const Primary = Template.bind({})

Primary.args = {}
