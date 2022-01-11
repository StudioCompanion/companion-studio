import styled from 'styled-components'

import HomePageCard from 'components/HomePageCard/HomePageCard'
import OpeningText from 'components/OpeningText/OpeningText'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { CARD_LAYOUTS, THEME_TYPES } from 'styles/constants'

import CASE_limna from '../../public/home/CASE_limna.png'
import CASE_limna_m from '../../public/home/CASE_limna_m.png'
import STUDIO_approach from '../../public/home/STUDIO_approach.png'
import STUDIO_approach_m from '../../public/home/STUDIO_approach_m.png'
import CASE_alexander from '../../public/home/CASE_alexander.png'
import CASE_alexander_m from '../../public/home/CASE_alexander_m.png'
import CASE_vanmoof from '../../public/home/CASE_vanmoof.png'
import CASE_vanmoof_m from '../../public/home/CASE_vanmoof_m.png'
import CASE_do_lectures_thumbnail from '../../public/home/CASE_do_lectures_thumbnail.jpg'
import STUDIO_team from '../../public/home/STUDIO_team.png'
import STUDIO_team_m from '../../public/home/STUDIO_team_m.png'
import CASE_pair_up from '../../public/home/CASE_pair_up.png'
import CASE_pair_up_m from '../../public/home/CASE_pair_up_m.png'
import CASE_cellular_goods from '../../public/home/CASE_cellular_goods.png'
import CASE_cellular_goods_m from '../../public/home/CASE_cellular_goods_m.png'
import CASE_new_futures from '../../public/home/CASE_new_futures.png'
import CASE_new_futures_m from '../../public/home/CASE_new_futures_m.png'
import STUDIO_news from '../../public/home/STUDIO_news.png'
import STUDIO_news_m from '../../public/home/STUDIO_news_m.png'

const Index = () => {
  return (
    <HomeContainer>
      <RightContainer>
        <OpeningText
          text={`We're a design studio that partners with you to create digital products that inspire, disrupt, entertain and create a better future for people and planet.`}
        />
      </RightContainer>
      <CardsContainer>
        {HOMEPAGE_DATA.map((item, index) => (
          <HomePageCard key={index} {...item} />
        ))}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Index

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

const HOMEPAGE_DATA = [
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_limna,
      mobile: CASE_limna_m,
    },
    heading: 'Limna',
    subheading: 'The AI-powered art advisor in your pocket',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    video: {
      desktop: '/home/CASE_do_lectures.mp4',
      mobile: '/home/CASE_do_lectures.mp4',
    },
    image: {
      desktop: CASE_do_lectures_thumbnail,
      mobile: CASE_do_lectures_thumbnail,
    },
    heading: 'The DO Lectures',
    subheading: 'A new look for the encouragement network',
    link: '/projects/do-lectures',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.STUDIO,
    image: {
      desktop: STUDIO_approach,
      mobile: STUDIO_approach_m,
    },
    heading: 'Our Approach',
    subheading: 'How and why we work the way we do',
    link: '/approach',
    theme: THEME_TYPES.GREY,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_alexander,
      mobile: CASE_alexander_m,
    },
    heading: 'Alexander',
    subheading: 'Exclusive non-fiction stories, audio and film',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_vanmoof,
      mobile: CASE_vanmoof_m,
    },
    heading: 'Vanmoof',
    subheading: 'Bringing thousands of riders data to life in-store',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    video: {
      desktop: '/testvid.mp4',
      mobile: '/testvid.mp4',
    },
    image: {
      desktop: CASE_do_lectures_thumbnail,
      mobile: CASE_do_lectures_thumbnail,
    },
    heading: 'Del Core',
    subheading: 'Presenting mutant glamour with precision',
    link: '/projects/del-core',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.STUDIO,
    image: {
      desktop: STUDIO_team,
      mobile: STUDIO_team_m,
    },
    heading: 'Our team',
    subheading: 'We’re a small passionate group',
    link: '/team',
    theme: THEME_TYPES.GREY,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_pair_up,
      mobile: CASE_pair_up_m,
    },
    heading: 'Pair Up',
    subheading: 'Making creative advice accessible to all',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_cellular_goods,
      mobile: CASE_cellular_goods_m,
    },
    heading: 'Cellular Goods',
    subheading: 'Digital direction for a cannibinoids eCommerce',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.CASE_STUDY,
    image: {
      desktop: CASE_new_futures,
      mobile: CASE_new_futures_m,
    },
    heading: 'New Futures',
    subheading: 'Helping the young people of Hackney gain employability skills',
    link: '#',
    theme: THEME_TYPES.DARK,
  },
  {
    type: CARD_LAYOUTS.STUDIO,
    image: {
      desktop: STUDIO_news,
      mobile: STUDIO_news_m,
    },
    heading: 'Latest news',
    subheading: 'See whats been going on inside the CARD_LAYOUTS.STUDIO',
    link: '#',
    theme: THEME_TYPES.GREY,
  },
]
