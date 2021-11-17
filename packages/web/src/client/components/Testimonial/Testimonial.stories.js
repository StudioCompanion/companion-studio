import Testimonial from './Testimonial'

const Template = (args) => (
  <Testimonial {...args}>
    Companion Studio have been our go to digital partner for over a year. They
    work to a consistently high standard, both creatively and strategically.
    Myles and his team are also just really nice people and a pleasure to deal
    with.
  </Testimonial>
)

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
}

export const Primary = Template.bind({})

Primary.args = {
  byLine: 'David Lane, Creative Director of Lane & Associates',
}
