import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS, PADDING } from 'styles/constants'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_32_400 } from 'styles/fonts'

const CenteredParagraph = ({ children }) => {
  return (
    <CenteredParagraphContainer>
      <CenteredParagraphBody>{children}</CenteredParagraphBody>
    </CenteredParagraphContainer>
  )
}

CenteredParagraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenteredParagraph

const CenteredParagraphContainer = styled.div`
  margin: ${PADDING.xl}px 0;
  display: flex;
  justify-content: center;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.xxl}px 0;
  }
`
const CenteredParagraphBody = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: ${WIDTHS.centeredP}px;
  }
`
