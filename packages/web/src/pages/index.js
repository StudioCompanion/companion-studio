import styled from 'styled-components'

import HomePageCard from 'components/HomePageCard/HomePageCard'
import OpeningText from 'components/OpeningText/OpeningText'

import { homePageCardData } from 'src/data/homePageCardData'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

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
const CardsWrapper = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const RightContainer = styled.div`
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    order: 1;
  }
`
