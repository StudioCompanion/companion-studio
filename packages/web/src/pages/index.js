import HomePageCard from 'components/HomePageCard/HomePageCard'
import OpeningText from 'components/OpeningText/OpeningText'
import styled from 'styled-components'

const index = () => {
  return (
    <HomeContainer>
      <OpeningText
        text={
          'Companion is a design studio that partners with you to design and build digital products that inspire, disrupt, entertain and create a better future for people and planet.'
        }
      />
      <Cards>
        <HomePageCard />
      </Cards>
    </HomeContainer>
  )
}

export default index

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Cards = styled.div``
