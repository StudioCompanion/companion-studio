import { GetStaticProps } from 'next'

import { styled } from 'styles/stitches.config'

import { Layout } from 'components/Site/SiteLayout'

import { fetchDocument } from 'src/data/fetchDocument'
import { APPROACH_PAGE } from 'src/data/queries/singletons/approach'

import { REVALIDATE_TIME } from 'references/constants'

import { Sanity } from '@types'
import { BlockApproach } from 'components/Blocks/BlockApproach'

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
            <ApproachSection key={props._key} {...props} />
          ))}
      </ApproachContainer>
    </Layout>
  )
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
  mb: '$xxl',

  '@tabletUp': {
    mb: 0,
  },
})

const ApproachSection = styled(BlockApproach, {
  '& + &': {
    mt: '$xl',
  },

  '@tabletUp': {
    '& + &': {
      mt: '$l',
    },
  },
})
