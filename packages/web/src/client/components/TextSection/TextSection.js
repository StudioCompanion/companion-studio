import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PADDING } from '../../styles/constants'

const TextSection = ({ heading, children }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Body>{children}</Body>
    </Container>
  )
}

TextSection.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
}

export default TextSection

const Container = styled.div`
  width: 50%;
`
const Heading = styled.h6`
  font-size: 1.2rem;
  margin-bottom: ${PADDING[0]}px;
`
const Body = styled.div`
  font-size: 2rem;
`
