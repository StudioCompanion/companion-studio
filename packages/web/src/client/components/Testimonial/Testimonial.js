import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS } from 'styles/constants'
import {
  FONT_STYLE_RECKLESS_12_400,
  FONT_STYLE_RECKLESS_32_400,
} from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'

const ProjectInfoCard = ({ text, byLine }) => {
  return (
    <Container>
      <Wrapper>
        <Text>&quot;{text}&quot;</Text>
        <ByLine>{byLine}</ByLine>
      </Wrapper>
    </Container>
  )
}

ProjectInfoCard.propTypes = {
  text: PropTypes.string,
  byLine: PropTypes.string,
}

export default ProjectInfoCard

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  text-align: center;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: ${WIDTHS.centeredP}px;
  }
`
const Text = styled.h2`
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  margin-bottom: 16px;
`
const ByLine = styled.h3`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
  ${MEDIA_QUERIES.tabletUp} {
    font-size: 2rem;
    line-height: 2.6rem;
  }
`
