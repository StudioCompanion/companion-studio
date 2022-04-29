import { GetStaticProps } from 'next'
import styled from 'styled-components'

// import { NextSeo } from 'next-seo'

import { Layout } from 'components/Site/SiteLayout'
import { PrivacyWrapper, PrivacyContainer } from 'components/Privacy'

import { fetchDocument } from 'src/data/fetchDocument'
import { REVALIDATE_TIME } from 'references/constants'
import { PRIVACY_PAGE } from 'src/data/queries/singletons/privacy'

import { Sanity } from 'src/types'
import { RendererRichText } from 'components/Renderer/RendererRichText'

interface PrivacyProps extends Sanity.DefaultLayoutProps {
  document: Sanity.PrivacyPage
}
const Privacy = ({ document, ...siteProps }: PrivacyProps) => {
  const { faq, meta } = document

  //   log
  console.log('🟢 FAQ is: ', faq)

  return (
    <Layout documentMeta={meta} {...siteProps}>
      <PrivacyWrapper>
        <PrivacyContainer>
          {faq?.map((item, idx) => (
            <>
              <Question key={idx}>{item.question}</Question>
              <Answer blocks={item.answer}></Answer>
            </>
          ))}
        </PrivacyContainer>
      </PrivacyWrapper>
    </Layout>
  )
}

export default Privacy

const Question = styled.h2`
  color: olivedrab;
`

const Answer = styled(RendererRichText)`
  color: burlywood;
`

export const getStaticProps: GetStaticProps<PrivacyProps> = async ({
  preview,
}) => {
  const sanityResult = await fetchDocument({
    filter: `_type == 'privacy'`,
    preview,
    projection: PRIVACY_PAGE,
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
