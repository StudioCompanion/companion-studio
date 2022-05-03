import { GetStaticProps } from 'next'
import styled from 'styled-components'

import { CardHome } from 'components/Cards/CardHome'
import { OpeningText } from 'components/OpeningText/OpeningText'

import { MEDIA_QUERIES } from 'styles/mediaQueries'

import { Sanity } from '@types'

import { HOMEPAGE } from 'src/data/queries/singletons/homePage'
import { fetchDocument } from 'src/data/fetchDocument'

import { REVALIDATE_TIME } from 'references/constants'
import { Layout } from 'components/Site/SiteLayout'
import { FadeUp } from 'components/Transitions/FadeUp'

interface IndexProps extends Sanity.DefaultLayoutProps {
  document: Sanity.HomePage
}

const Index = ({ document, ...siteProps }: IndexProps) => {
  const { cards, standfirst } = document

  return (
    <HomeContainer {...siteProps}>
      <RightContainer>
        <OpeningText text={standfirst} />
      </RightContainer>
      <CardsContainer>
        {Array.isArray(cards)
          ? cards.map((item) => (
              <FadeUp key={item._key}>
                <HomepageCard {...item} />
              </FadeUp>
            ))
          : null}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Index

const HomeContainer = styled(Layout)`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  padding-bottom: 0;

  ${MEDIA_QUERIES.tabletUp} {
    gap: 2rem;
    padding: 2rem;
    padding-bottom: 0;
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

const HomepageCard = styled(CardHome)`
  margin-bottom: 1.6rem;

  ${MEDIA_QUERIES.desktopUp} {
    margin-bottom: 2rem;
  }
`

export const getStaticProps: GetStaticProps<IndexProps> = async ({
  preview,
}) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'homepage'`,
    preview,
    projection: HOMEPAGE,
  })

  return {
    notFound: !sanityResult,
    props: {
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME,
  }
}
