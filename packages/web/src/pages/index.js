import styled from 'styled-components'

import HomePageCard from 'components/HomePageCard/HomePageCard'
import OpeningText from 'components/OpeningText/OpeningText'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { LAYOUTS, THEME_TYPES } from 'styles/constants'

const { STUDIO, CASE_STUDY } = LAYOUTS.card

const index = () => {
  return (
    <HomeContainer>
      <RightContainer>
        <OpeningText
          text={
            'Companion is a design studio that partners with you to design and build digital products that inspire, disrupt, entertain and create a better future for people and planet.'
          }
        />
      </RightContainer>
      <CardsContainer>
        {homePageCardData.map((item, index) => (
          <HomePageCard key={index} {...item} />
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}

export default index

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERIES.tabletUp} {
    flex-direction: row;
  }
`
const CardsContainer = styled.div`
  width: 100%;
  position: relative;
`

const RightContainer = styled.div`
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    order: 1;
  }
`

const homePageCardData = [
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_limna.png',
      mobile: '/home/CASE_limna_m.png',
    },
    heading: 'Limna',
    subheading: 'The AI-powered art advisor in your pocket',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_do_lectures.png',
      mobile: '/home/CASE_do_lectures_m.png',
    },
    heading: 'The DO Lectures',
    subheading: 'A new look for the encouragement network',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: STUDIO,
    image: {
      desktop: '/home/STUDIO_approach.png',
      mobile: '/home/STUDIO_approach_m.png',
    },
    heading: 'Our Approach',
    subheading: 'How and why we work the way we do',
    link: '#',
    theme: THEME_TYPES.GREY,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_alexander.png',
      mobile: '/home/CASE_alexander_m.png',
    },
    heading: 'Alexander',
    subheading: 'Exclusive non-fiction stories, audio and film',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_vanmoof.png',
      mobile: '/home/CASE_vanmoof_m.png',
    },
    heading: 'Vanmoof',
    subheading: 'Bringing thousands of riders data to life in-store',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_del_core.png',
      mobile: '/home/CASE_del_core_m.png',
    },
    heading: 'Del Core',
    subheading: 'Presenting mutant glamour with precision',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: STUDIO,
    image: {
      desktop: '/home/STUDIO_team.png',
      mobile: '/home/STUDIO_team_m.png',
    },
    heading: 'Our team',
    subheading: 'We’re a small passionate group',
    link: '#',
    theme: THEME_TYPES.GREY,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_pair_up.png',
      mobile: '/home/CASE_pair_up_m.png',
    },
    heading: 'Pair Up',
    subheading: 'Making creative advice accessible to all',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_cellular_goods.png',
      mobile: '/home/CASE_cellular_goods_m.png',
    },
    heading: 'Cellular Goods',
    subheading: 'Digital direction for a cannibinoids eCommerce',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CASE_STUDY,
    image: {
      desktop: '/home/CASE_new_futures.png',
      mobile: '/home/CASE_new_futures_m.png',
    },
    heading: 'New Futures',
    subheading: 'Helping the young people of Hackney gain employability skills',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: STUDIO,
    image: {
      desktop: '/home/STUDIO_news.png',
      mobile: '/home/STUDIO_news_m.png',
    },
    heading: 'Latest news',
    subheading: 'See whats been going on inside the studio',
    link: '#',
    theme: THEME_TYPES.GREY,
  },
]
