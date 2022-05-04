import { GetStaticProps } from 'next'

import { styled } from 'styles/stitches.config'

import { StickyParagraph } from 'components/StickyElements/StickyParagraph'
import { FadeUp } from 'components/Transitions/FadeUp'
import { StickMedia } from 'components/StickyElements/StickyMedia'
import { Layout } from 'components/Site/SiteLayout'

import { fetchDocument } from 'src/data/fetchDocument'
import { APPROACH_PAGE } from 'src/data/queries/singletons/approach'

import { REVALIDATE_TIME } from 'references/constants'

import { NonNullSkipArray, Sanity } from '@types'

interface ApproachProps extends Sanity.DefaultLayoutProps {
  document: Sanity.ApproachPage
}

const Approach = ({ document, ...siteProps }: ApproachProps) => {
  const { sections, meta } = document

  return (
    <Layout documentMeta={meta} {...siteProps}>
      <ApproachContainer>
        {Array.isArray(sections) &&
          sections.map((props) => (
            <FadeUp key={props._key}>
              <ApproachRenderer {...props} />
            </FadeUp>
          ))}
      </ApproachContainer>
    </Layout>
  )
}

const ApproachRenderer = (
  props: NonNullSkipArray<Sanity.ApproachPage['sections']>
) => {
  const { _type } = props
  switch (_type) {
    case 'textSection':
      return <StickyParagraph {...props} />
    case 'image':
    case 'video':
      return <StickMedia {...props} />
    default:
      return null
  }
}

export default Approach

export const getStaticProps: GetStaticProps<ApproachProps> = async ({
  preview,
}) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'approachpage'`,
    preview,
    projection: APPROACH_PAGE,
  })

  return {
    notFound: !sanityResult,
    props: {
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME, // seconds
  }
}

const ApproachContainer = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pb: '$xxl',

  '& > *': {
    width: '100%',
  },
})
