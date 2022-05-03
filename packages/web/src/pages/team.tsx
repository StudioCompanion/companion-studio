import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { PADDING } from 'styles/constants'

import { TeamGrid } from 'components/Grids/GridTeam'
import { ValuesGrid } from 'components/Grids/GridValues'
import { CenteredParagraph } from 'components/CenteredParagraph/CenteredParagraph'
import { ImageStrip } from 'components/ImageStrip/ImageStrip'

import { fetchDocument } from 'src/data/fetchDocument'
import { GetStaticProps } from 'next'
import { REVALIDATE_TIME } from 'references/constants'

import { Layout } from 'components/Site/SiteLayout'
import { TEAMPAGE } from 'src/data/queries/singletons/teamPage'
import { Sanity } from '@types'

interface TeamProps extends Sanity.DefaultLayoutProps {
  document: Sanity.TeamPage
}

const Team = ({ document, ...siteProps }: TeamProps) => {
  const { team, textBlockOne, textBlockTwo, qualities, slideshow, cta, meta } =
    document

  return (
    <Layout documentMeta={meta} {...siteProps}>
      <NextSeo title="Team" />
      <ImageStrip slideshow={slideshow} />
      <PaddingContainer>
        <CenteredParagraph text={textBlockOne} />
        <TeamGrid team={team} />
        <CenteredParagraph text={textBlockTwo} />
        <ValuesGrid qualities={qualities} cta={cta} />
      </PaddingContainer>
    </Layout>
  )
}

export default Team

const PaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${PADDING.s}px;
  max-width: 1200px;
  margin: auto;
  ${MEDIA_QUERIES.tabletUp} {
    padding: 0 ${PADDING.m}px;
  }
`

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
