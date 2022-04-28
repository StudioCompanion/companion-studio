import { GetStaticProps } from 'next'
import styled from 'styled-components'

import { PADDING } from 'styles/constants'

import { StickyParagraph } from 'components/StickyElements/StickyParagraph'
import { FadeUp } from 'components/Transitions/FadeUp'
import { SiteSeo } from 'components/Site/SiteSeo'
import { StickMedia } from 'components/StickyElements/StickyMedia'

import { fetchDocument } from 'src/data/fetchDocument'
import { APPROACH_PAGE } from 'src/data/queries/singletons/approach'

import { REVALIDATE_TIME } from 'references/constants'

import { NonNullSkipArray, Sanity } from 'src/types'

interface ApproachProps extends Sanity.DefaultLayoutProps {
  document: Sanity.ApproachPage
}

const Approach = ({ defaultMeta, document }: ApproachProps) => {
  const { sections, meta } = document

  return (
    <>
      <SiteSeo defaultSeo={defaultMeta} meta={meta} />
      <ApproachContainer>
        {Array.isArray(sections) &&
          sections.map((props) => (
            <FadeUp key={props._key}>
              <ApproachRenderer {...props} />
            </FadeUp>
          ))}
      </ApproachContainer>
    </>
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
      document: {},
      defaultMeta: {},
      ...sanityResult,
      preview: !!preview,
    },
    revalidate: REVALIDATE_TIME, // seconds
  }
}

const ApproachContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${PADDING.xxl}px;

  & > * {
    width: 100%;
  }
`
