import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { styled } from 'styles/stitches.config'

import { TeamGrid } from 'components/Grids/GridTeam'
import { ValuesGrid } from 'components/Grids/GridValues'
import { ImageStrip } from 'components/ImageStrip/ImageStrip'
import { Layout } from 'components/Site/SiteLayout'

import { fetchDocument } from 'data/fetchDocument'
import { TEAMPAGE } from 'data/queries/singletons/teamPage'

import { REVALIDATE_TIME } from 'references/constants'

import { Sanity } from '@types'
import { RendererRichText } from 'components/Renderer/RendererRichText'

interface TeamProps extends Sanity.DefaultLayoutProps {
  document: Sanity.TeamPage
}

const Team = ({ document, ...siteProps }: TeamProps) => {
  const { team, textBlockOne, textBlockTwo, qualities, slideshow, meta } =
    document

  return (
    <Layout documentMeta={meta} {...siteProps}>
      <NextSeo title="Team" />
      <ImageStrip slideshow={slideshow} />
      <PaddingContainer>
        {textBlockOne ? (
          <TeamTextBlock
            blocks={textBlockOne}
            css={{
              maxWidth: '55.5rem',
            }}
          />
        ) : null}
        <TeamGrid team={team} />
        {textBlockTwo ? <TeamTextBlock blocks={textBlockTwo} /> : null}
        <ValuesGrid qualities={qualities} />
      </PaddingContainer>
    </Layout>
  )
}

export default Team

const PaddingContainer = styled('article', {
  px: '$s',

  '@tabletUp': {
    px: '$m',
  },
})

const TeamTextBlock = styled(RendererRichText, {
  mt: '$xxl',
  maxWidth: '$centeredParagraph',

  '@tabletUp': {
    mt: '11.6rem',
  },
})

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'teampage'`,
    preview,
    projection: TEAMPAGE,
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
