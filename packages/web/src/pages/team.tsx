import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import { styled } from 'styles/stitches.config'

import { TeamGrid } from 'components/Grids/GridTeam'
import { ValuesGrid } from 'components/Grids/GridValues'
import { CenteredParagraph } from 'components/CenteredParagraph/CenteredParagraph'
import { ImageStrip } from 'components/ImageStrip/ImageStrip'
import { Layout } from 'components/Site/SiteLayout'

import { fetchDocument } from 'data/fetchDocument'
import { TEAMPAGE } from 'data/queries/singletons/teamPage'

import { REVALIDATE_TIME } from 'references/constants'

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

const PaddingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: '$s',
  maxWidth: '120rem',
  margin: 'auto',

  '@tabletUp': {
    px: '$m',
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
