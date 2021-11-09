import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PADDING } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import {
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_20_400,
} from '../../styles/fonts'

const TextSection = ({ children }) => {
  return (
    <Container>
      <BodyContainer>{children}</BodyContainer>
    </Container>
  )
}

TextSection.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
}

export default TextSection

const Container = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    width: 50%;
  }
  h3 {
    ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
    margin-bottom: ${PADDING[0]}px;
  }
`
const BodyContainer = styled.div`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  p:not(:last-child) {
    margin-bottom: 40px;
    ${MEDIA_QUERIES.tabletUp} {
      margin-bottom: 46px;
    }
  }
`
