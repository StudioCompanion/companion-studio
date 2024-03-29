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
import { FadeIn } from 'components/Transitions/FadeIn'
import { Button } from 'components/Button/Button'
import { ThemeTypes } from 'styles/constants'

interface TeamProps extends Sanity.DefaultLayoutProps {
  document: Sanity.TeamPage
}

const Team = ({ document, ...siteProps }: TeamProps) => {
  const { team, textBlockOne, textBlockTwo, qualities, slideshow, cta, meta } =
    document

  return (
    <Layout documentMeta={meta} {...siteProps}>
      <NextSeo title="Team" />
      <TeamImageStrip slideshow={slideshow} />
      <PaddingContainer>
        <FadeIn>
          {textBlockOne ? (
            <TeamTextBlock
              blocks={textBlockOne}
              css={{
                maxWidth: '55.5rem',
              }}
            />
          ) : null}
        </FadeIn>
        <TeamGrid team={team} />
        <FadeIn>
          {textBlockTwo ? <TeamTextBlock inline blocks={textBlockTwo} /> : null}
          {cta ? <Button {...cta} theme={ThemeTypes.DARK} /> : null}
        </FadeIn>
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

const TeamImageStrip = styled(ImageStrip, {
  mb: '$xxl',

  '@tabletUp': {
    mb: '11.6rem',
  },
})

const TeamTextBlock = styled(RendererRichText, {
  maxWidth: '$centeredParagraph',
  mb: '$xs',

  variants: {
    inline: {
      true: {
        mt: '$xxl',
        '@tabletUp': {
          mt: '11.6rem',
        },
      },
    },
  },
})

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'teampage'`,
    preview,
    projection: TEAMPAGE,
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
