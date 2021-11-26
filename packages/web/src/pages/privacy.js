import styled from 'styled-components'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_17_400 } from 'styles/fonts'

import Privacy from '../client/components/privacy.mdx'
import { NextSeo } from 'next-seo'

const privacy = () => {
  return (
    <>
      <NextSeo title="Privacy" />
      <PrivacyWrapper>
        <PrivacyContainer>
          <Privacy />
        </PrivacyContainer>
      </PrivacyWrapper>
    </>
  )
}

export default privacy

const PrivacyContainer = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 653px;
  }

  a {
    font-size: inherit;
    font-family: inherit;
    text-decoration: inherit;
  }

  margin-bottom: ${PADDING.xxl}px;
  h2 {
    margin-bottom: ${PADDING.m}px;
    font-size: 2rem;
  }

  h3 {
    margin: ${PADDING.m}px 0 ${PADDING.xs}px;
    ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
    text-decoration: underline;
  }

  ul {
    ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
    list-style: unset;
  }

  li {
    margin-left: ${PADDING.l}px;
    line-height: 1.3;
  }

  p + h2,
  ul + h2 {
    margin-top: ${PADDING.xl}px;
    ${MEDIA_QUERIES.tabletUp} {
      margin-top: ${PADDING.xxl}px;
    }
  }

  p {
    ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
    margin: ${PADDING.l}px 0;
  }
  h3 + p {
    margin-top: ${PADDING.xs}px;
  }
`
const PrivacyWrapper = styled.div`
  display: flex;
  justify-content: center;
`
