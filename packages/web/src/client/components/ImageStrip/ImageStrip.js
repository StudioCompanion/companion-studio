import { useState, useEffect } from 'react'
import useMeasure from 'react-use-measure'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Ticker from 'react-ticker'

import { RADII, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

const SMALL = 'small'
const MEDIUM = 'meidum'
const LARGE = 'large'

const ImageStripImage = ({ size, rotation, src, alt, width, height }) => {
  const [imageRef, bounds] = useMeasure()

  function toRadians(angle) {
    return angle * (Math.PI / 180)
  }
  const calcNewDimensions = (w, h, rotation) => {
    if (!rotation || rotation === 0) {
      return { x: w, y: h }
    } else
      return {
        x:
          Math.abs(w * Math.cos(toRadians(90 - rotation))) +
          Math.abs(h * Math.cos(toRadians(rotation))),
        y:
          Math.abs(w * Math.sin(toRadians(rotation))) +
          Math.abs(h * Math.sin(toRadians(90 - rotation))),
      }
  }
  const w = bounds.width
  const h = bounds.height
  const newWidth = calcNewDimensions(w, h, rotation).x
  const newHeight = calcNewDimensions(w, h, rotation).y
  const paddingX = (newWidth - w) / 2
  const paddingY = (newHeight - h) / 2

  return (
    <ImageContainer $paddingX={paddingX} $paddingY={paddingY}>
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
      <Ticker offset={300}>
        {() => (
          <ImageStripWrapper>
            {images.map(
              ({ src, alt, width, height, size, rotation }, index) => (
                <ImageStripImage
                  key={index}
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  size={size}
                  rotation={rotation}
                />
              )
            )}
          </ImageStripWrapper>
        )}
      </Ticker>
    </ImageStripContainer>
  )
}

ImageStrip.propTypes = {}

export default ImageStrip

const ImageWrapper = styled.div`
  max-width: ${({ $size }) => {
    switch ($size) {
      case LARGE:
        return '275px'
      case MEDIUM:
        return '200px'
      case SMALL:
        return `150px`
    }
  }};
  border-radius: ${RADII.wrapper_lg}px;
  overflow: hidden;
  transform: ${({ $rotation }) =>
    $rotation ? `rotate(${$rotation}deg)` : 'none'};
  ${MEDIA_QUERIES.tabletUp} {
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
  }
`

const ImageContainer = styled.div`
  margin: 0 ${PADDING.m / 2}px;
  padding: ${({ $paddingX, $paddingY }) => `${$paddingX}px ${$paddingY}px`};
  flex-shrink: 0;
`

const ImageStripContainer = styled.div``

const ImageStripWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
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
