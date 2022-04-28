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

import { TEAMPAGE } from 'src/data/queries/singletons/teamPage'
import { Teampage } from 'src/types/sanity.generated'

interface TeamProps {
  document: Teampage
}

const Team = ({ document }: TeamProps) => {
  const { team, textBlockOne, textBlockTwo } = document

  // log
  console.log('🟢 BLOCK 2 is: ', textBlockOne)

  return (
    <>
      <NextSeo title="Team" />
      <ImageStrip />
      <PaddingContainer>
        <CenteredParagraph text={textBlockOne} />

        <TeamGrid />
        <CenteredParagraph text={textBlockTwo} />

        <ValuesGrid />
      </PaddingContainer>
    </>
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
