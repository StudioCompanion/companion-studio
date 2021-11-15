import { useRef } from 'react'
import useMeasure from 'react-use-measure'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { COLORS, RADII, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'

const SMALL = 'small'
const MEDIUM = 'meidum'
const LARGE = 'large'

const ImageStripImage = ({ size, rotation, src, alt, width, height }) => {
  const [imageRef, bounds] = useMeasure()

  function toRadians(angle) {
    return angle * (Math.PI / 180)
  }

  const w = bounds.width
  const h = bounds.height
  const newWidth =
    w * Math.cos(toRadians(90 - rotation)) + h * Math.cos(toRadians(rotation))

  const paddingX = (newWidth - w) / 2

  return (
    <ImageContainer $paddingX={paddingX}>
      <ImageWrapper ref={imageRef} $size={size} $rotation={rotation}>
        <Image src={src} alt={alt} width={width} height={height} />
      </ImageWrapper>
    </ImageContainer>
  )
}

ImageStripImage.propTypes = {
  size: PropTypes.string,
  rotation: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

const ImageStrip = ({}) => {
  return (
    <ImageStripContainer>
      <Marquee gradient={false} style={{ padding: `50px` }}>
        {images.map(({ src, alt, width, height, size, rotation }, index) => (
          <ImageStripImage
            key={index}
            src={src}
            alt={alt}
            width={width}
            height={height}
            size={size}
            rotation={rotation}
          />
        ))}
      </Marquee>
    </ImageStripContainer>
  )
}

ImageStrip.propTypes = {}

export default ImageStrip

const ImageStripContainer = styled.div``

const ImageWrapper = styled.div`
  max-width: ${({ $size }) => {
    switch ($size) {
      case LARGE:
        return '550px'
      case MEDIUM:
        return '400px'
      case SMALL:
        return `300px`
    }
  }};
  border-radius: ${RADII.wrapper_lg}px;
  overflow: hidden;
  transform: ${({ $rotation }) =>
    $rotation ? `rotate(${$rotation}deg)` : 'none'};
`

const ImageContainer = styled.div`
  margin: ${PADDING.m}px;
  padding: ${({ $paddingX }) => `0 ${$paddingX}px`};
`

const images = [
  {
    src: '/images/image-strip/large-image.jpg',
    alt: 'Large Image',
    width: 531,
    height: 549,
    size: LARGE,
    rotation: 10,
  },
  {
    src: '/images/image-strip/scooby.jpg',
    alt: 'Scooby',
    width: 3024,
    height: 4032,
    size: SMALL,
  },
  {
    src: '/images/image-strip/medium-image.jpg',
    alt: 'Medium Image',
    width: 333,
    height: 444,
    size: MEDIUM,
    rotation: -5,
  },
  {
    src: '/images/image-strip/small-image.jpg',
    alt: 'Small Image',
    width: 294,
    height: 256,
    size: SMALL,
  },
]
