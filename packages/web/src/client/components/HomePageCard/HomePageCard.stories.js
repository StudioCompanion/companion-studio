import HomePageCard from './HomePageCard'

import testStudioCard from '../../../../public/teststudio_card.png'
import testStudioCard_mobile from '../../../../public/teststudio_card_m.png'
import testCaseStudyCard from '../../../../public/testcasestudy_card.png'
import testCaseStudyCard_mobile from '../../../../public/testcasestudy_card_m.png'

import { LAYOUTS } from '../../styles/constants'
const { STUDIO, CASE_STUDY } = LAYOUTS.card

const Template = (args) => <HomePageCard {...args} />

export default {
  title: 'Components/Home Page Card',
  component: HomePageCard,
}

export const StudioCard = Template.bind({})

StudioCard.args = {
  type: STUDIO,
  image: { desktop: testStudioCard, mobile: testStudioCard_mobile },
  heading: 'Our Approach',
  subheading: 'How and why we work the way we do',
  link: '/approach',
}

export const CaseStudyCard = Template.bind({})

CaseStudyCard.args = {
  type: CASE_STUDY,
  image: { desktop: testCaseStudyCard, mobile: testCaseStudyCard_mobile },
  heading: 'The DO Lectures',
  subheading: 'A new look for the encouragement network',
  link: '#',
}
