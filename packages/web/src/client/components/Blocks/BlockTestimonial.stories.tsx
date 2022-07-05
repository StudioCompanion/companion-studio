import { Testimonial } from './BlockTestimonial'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryFixtures } from '@types'

export default {
  title: 'Blocks/Testimonial',
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>

export const NoQuote: ComponentStory<typeof Testimonial> = () => (
  <Testimonial {...fixtures.noQuote} />
)

export const WithQuote: ComponentStory<typeof Testimonial> = () => (
  <Testimonial {...fixtures.withQuote} />
)

const fixtures: StoryFixtures<typeof Testimonial> = {
  noQuote: { _type: 'blockTestimonial', _key: '2801400c4888' },
  withQuote: {
    _key: '2801400c4888',
    _type: 'blockTestimonial',
    author: 'Cameron Lamb, Alexander CEO',
    quote: [
      {
        _key: 'af18bbb59a9d',
        _type: 'block',
        children: [
          {
            _key: '87f00a1158060',
            _type: 'span',
            marks: [],
            text: '"Companion does the detailed exploration and learning of your company and its vision, to then go above and beyond with design and delivery of technology that connects with your audiences and propels the company vision."',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
  },
}
