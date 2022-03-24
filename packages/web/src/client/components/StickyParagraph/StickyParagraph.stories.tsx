import { StickyParagraph, StickyParagraphProps } from './StickyParagraph'
import { Story, Meta } from '@storybook/react'

const Template: Story<StickyParagraphProps> = (args) => (
  <StickyParagraph {...args} />
)

export const Primary = Template.bind({})

const paragraph = {
  text: 'We aim to enhance the lives of everyone around us by designing tools, services and products that inspire, entertain and create a better future for planet and people.',
  image: {
    src: '/images/graphics/approach/approach_create_change.png',
    width: 486,
    height: 279,
  },
}

Primary.args = { ...paragraph }

export default {
  title: 'Components/Sticky Paragraph',
  component: StickyParagraph,
} as Meta
