import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import { WIDTHS, PADDING } from '../../styles/constants'

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
const Text = styled.div`
  font-size: 3.2rem;
  margin-bottom: ${PADDING[2]}px;
`
const ByLine = styled.div`
  font-size: 2rem;
`
