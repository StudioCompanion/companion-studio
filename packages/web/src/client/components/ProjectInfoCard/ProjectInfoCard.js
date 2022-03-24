import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, RADII, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_12_400,
} from 'styles/fonts'
import { FadeUp } from 'components/Transitions/FadeUp'

const ProjectInfoCard = ({ deliverables, collaborators, team, duration }) => {
  return (
    <Container>
      <FadeUp>
        <Wrapper>
          <Heading>Deliverables:</Heading>
          <Field>{deliverables}</Field>
          <Heading>Collaborators:</Heading>
          <Field>{collaborators}</Field>
          <Heading>Team:</Heading>
          <Field>{team}</Field>
          <Heading>Duration:</Heading>
          <Field>{duration}</Field>
        </Wrapper>
      </FadeUp>
    </Container>
  )
}

ProjectInfoCard.propTypes = {
  deliverables: PropTypes.string,
  collaborators: PropTypes.string,
  team: PropTypes.string,
  duration: PropTypes.string,
}

export default ProjectInfoCard

const Wrapper = styled.dl`
  background-color: ${COLORS.lightgrey};
  border-radius: ${RADII.wrapper_lg}px;
  padding: 16px;
  overflow-wrap: break-word;
`
const Container = styled.div`
  margin: 0 0 ${PADDING.xl}px;
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    width: 40%;
    max-width: 540px;
    margin: ${PADDING.l}px 0;
  }
`

const Heading = styled.dt`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
`

const Field = styled.dd`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`
