import styled from 'styled-components'
import HomePageCard from './HomePageCard'

import testStudioCard from '../../../../public/teststudio_card.png'
import testStudioCard_mobile from '../../../../public/teststudio_card_m.png'
import testCaseStudyCard from '../../../../public/testcasestudy_card.png'
import testCaseStudyCard_mobile from '../../../../public/testcasestudy_card_m.png'
import testVideoCaseStudyCard from '../../../../public/testvid.mp4'
import testVideoCaseStudyPoster from '../../../../public/testvid_placeholder.png'

import { CARD_LAYOUTS, THEME_TYPES } from '../../styles/constants'

const Template = (args) => (
  <Half>
    <HomePageCard {...args} />
  </Half>
)
export default {
  title: 'Components/Home Page Card',
  component: HomePageCard,
}

export const StudioCard = Template.bind({})

StudioCard.args = {
  type: CARD_LAYOUTS.STUDIO,
  image: { desktop: testStudioCard, mobile: testStudioCard_mobile },
  heading: 'Our Approach',
  subheading: 'How and why we work the way we do',
  link: '/approach',
  theme: THEME_TYPES.GREY,
}

export const CaseStudyCard = Template.bind({})

CaseStudyCard.args = {
  type: CARD_LAYOUTS.CASE_STUDY,
  image: { desktop: testCaseStudyCard, mobile: testCaseStudyCard_mobile },
  heading: 'The DO Lectures',
  subheading: 'A new look for the encouragement network',
  link: '#',
  theme: THEME_TYPES.DARK,
}

export const VideoCaseStudyCard = Template.bind({})

VideoCaseStudyCard.args = {
  type: CASE_STUDY,
  video: {
    desktop: testVideoCaseStudyCard,
    mobile: testVideoCaseStudyCard,
  },
  image: {
    desktop: testVideoCaseStudyPoster,
    mobile: testVideoCaseStudyPoster,
  },
  heading: 'The DO Lectures',
  subheading: 'A new look for the encouragement network',
  link: '#',
  theme: THEME_TYPES.DARK,
}

const Half = styled.div`
  width: 50%;
`
