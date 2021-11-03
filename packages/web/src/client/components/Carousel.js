import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ASPECT_RATIOS, RADII } from '../styles/constants'

const Carousel = ({ bgColor, bgImage, children }) => {
  return (
    <Container $bgColor={bgColor} $bgImage={bgImage}>
      <Inner>
        <ImageWrapper>{children}</ImageWrapper>
      </Inner>
    </Container>
  )
}

Carousel.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  children: PropTypes.node,
}

export default Carousel

const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${ASPECT_RATIOS.carousel};
  background-color: ${(p) => (p.$bgColor ? p.$bgColor : 'transparent')};
  background-image: ${(p) => (p.$bgImage ? `url(${p.$bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${RADII.wrapper}px;
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
