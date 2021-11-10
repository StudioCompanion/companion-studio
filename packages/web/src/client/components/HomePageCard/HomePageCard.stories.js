import HomePageCard from './HomePageCard'

import testStudioCard from '../../../../public/teststudio_card.png'
import testStudioCard_mobile from '../../../../public/teststudio_card_m.png'

const Template = (args) => <HomePageCard {...args} />

export default {
  title: 'Components/Home Page Card',
  component: HomePageCard,
}

export const Primary = Template.bind({})

Primary.args = {
  image: { desktop: testStudioCard, mobile: testStudioCard_mobile },
  heading: 'Our Approach',
  subheading: 'How and why we work the way we do',
  link: '/approach',
}
