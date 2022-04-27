import { Testimonial, TestimonialProps } from './BlockTestimonial'
import { Story, Meta } from '@storybook/react'

const Template: Story<TestimonialProps> = (args) => (
  <Testimonial {...args}>
    <blockquote>
      Companion Studio have been our go to digital partner for over a year. They
      work to a consistently high standard, both creatively and strategically.
      Myles and his team are also just really nice people and a pleasure to deal
      with.
    </blockquote>
    <h3>David Lane, Creative Director of Lane & Associates</h3>
  </Testimonial>
)

export const Primary = Template.bind({})

Primary.args = {}

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
} as Meta
