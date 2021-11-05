import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, RADII, PADDING } from '../../styles/constants'
import { MEDIA_QUERIES } from '../../styles/mediaQueries'

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
  border-radius: ${RADII.wrapper_mobile}px;
  padding: ${PADDING[1]}px;
  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.wrapper}px;
  }
`

const Heading = styled.h6`
  font-size: 1.2rem;
  line-height: 1.44rem;
  font-weight: normal;
`

const Field = styled.p`
  font-size: 2rem;
  line-height: 2.6rem;

  &:not(:last-child) {
    margin-bottom: ${PADDING[2]}px;
  }
`
