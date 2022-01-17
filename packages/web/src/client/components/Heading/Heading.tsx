// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PADDING } from '../../styles/constants'
import { getFontStyles } from '../../styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_APFEL_12_400,
} from '../../styles/fonts'
// import React from 'react'

import FadeUp from 'components/Transitions/FadeUp'

type HeadingProps = {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <Container>
      <FadeUp>
        <BodyContainer>{children}</BodyContainer>
      </FadeUp>
    </Container>
  )
}

// Heading.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Heading

const Container = styled.div`
  margin: 0 0;

  h3 {
    ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
    margin-bottom: ${PADDING.xs}px;
  }

  p {
    ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  }

  .hero + & {
    margin-top: ${PADDING.xxl}px;
  }
`
const BodyContainer = styled.div`
  h1 {
    margin-bottom: ${PADDING.xs}px;
  }
`
