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
        <OpeningText>{standfirst}</OpeningText>
      </RightContainer>
      <CardsContainer>
        {Array.isArray(cards)
          ? cards.map((item) => (
              <HomeCardFade tag="div" key={item._key}>
                <CardHome {...item} />
              </HomeCardFade>
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

  '@largeDesktopUp': {
    gap: '$m',
    flexDirection: 'row',
  },
})

const CardsContainer = styled('div', {
  width: '100%',
  position: 'relative',
})

const RightContainer = styled(FadeIn, {
  width: '100%',

  '@largeDesktopUp': {
    order: 1,
  },
})

const HomeCardFade = styled(FadeIn, {
  '& + &': {
    mt: '$s',
  },

  '@largeDesktopUp': {
    '& + &': {
      mt: '$m',
    },
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
    notFound: !sanityResult.document._id,
    props: {
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME,
  }
}
