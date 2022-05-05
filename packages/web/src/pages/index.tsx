import { GetStaticProps } from 'next'

import { CardHome } from 'components/Cards/CardHome'
import { OpeningText } from 'components/OpeningText/OpeningText'
import { Layout } from 'components/Site/SiteLayout'
import { FadeIn } from 'components/Transitions/FadeIn'

import { styled } from 'styles/stitches.config'

import { Sanity } from '@types'

import { HOMEPAGE } from 'data/queries/singletons/homePage'
import { fetchDocument } from 'data/fetchDocument'

import { REVALIDATE_TIME } from 'references/constants'

interface IndexProps extends Sanity.DefaultLayoutProps {
  document: Sanity.HomePage
}

const Index = ({ document, ...siteProps }: IndexProps) => {
  const { cards, standfirst, meta } = document

  return (
    <HomeContainer documentMeta={meta} {...siteProps}>
      <RightContainer>
        <OpeningText text={standfirst} />
      </RightContainer>
      <CardsContainer>
        {Array.isArray(cards)
          ? cards.map((item) => (
              <FadeIn tag="div" key={item._key}>
                <HomepageCard {...item} />
              </FadeIn>
            ))
          : null}
      </CardsContainer>
    </HomeContainer>
  )
}

export default Index

const HomeContainer = styled(Layout, {
  display: 'flex',
  flexDirection: 'column',
  p: '$s',
  pb: 0,

  '@tabletUp': {
    gap: '$m',
    p: '$m',
    pb: 0,
    flexDirection: 'row',
  },
})

const CardsContainer = styled('div', {
  width: '100%',
  position: 'relative',
})

const RightContainer = styled('div', {
  width: '100%',

  '@tabletUp': {
    order: 1,
  },
})

const HomepageCard = styled(CardHome, {
  mb: '$s',

  '@desktopUp': {
    mb: '$m',
  },
})

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
