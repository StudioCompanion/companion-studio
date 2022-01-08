import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PADDING } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import {
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_20_400,
} from '../../styles/fonts'

import { Wrapper } from 'components/Carousel/Carousel'
import FadeUp from 'components/Transitions/FadeUp'

const TextSection = ({ children }) => {
  return (
    <Container>
      <FadeUp>
        <BodyContainer>{children}</BodyContainer>
      </FadeUp>
    </Container>
  )
}

TextSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextSection

const Container = styled.div`
  margin: 0 0;
  h3 {
    ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
    margin-bottom: ${PADDING.s}px;
  }

  .hero + & {
    margin-top: ${PADDING.xxl}px;
  }
`
const BodyContainer = styled.div`
  h1 {
    margin-bottom: ${PADDING.s}px;
  }
`
