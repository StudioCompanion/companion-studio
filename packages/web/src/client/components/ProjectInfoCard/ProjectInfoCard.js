import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, RADII, PADDING } from '../../styles/constants'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'
import { getFontStyles } from '../../styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_12_400,
} from '../../styles/fonts'

const ProjectInfoCard = ({ deliverables, collaborators, team, duration }) => {
  return (
    <Container>
      <Heading>Deliverables:</Heading>
      <Field>{deliverables}</Field>
      <Heading>Collaborators:</Heading>
      <Field>{collaborators}</Field>
      <Heading>Team:</Heading>
      <Field>{team}</Field>
      <Heading>Duration:</Heading>
      <Field>{duration}</Field>
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

const Container = styled.div`
  width: 100%;
  background-color: ${COLORS.greys[0]};
  border-radius: 12px;
  padding: ${PADDING[1]}px;
  color: ${COLORS.darkblue};
  overflow-wrap: break-word;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 540px;
  }
`

const Heading = styled.h6`
  ${getFontStyles(FONT_STYLE_RECKLESS_12_400)}
`

const Field = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}

  &:not(:last-child) {
    margin-bottom: ${PADDING[2]}px;
  }
`
