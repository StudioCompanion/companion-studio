import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

import { RADII, PADDING } from 'styles/constants'
import { WIDTHS } from '../../styles/dimensions'

const SMALL = 'small'
const MEDIUM = 'meidum'
const LARGE = 'large'

const ImageStripImage = ({
  size,
  rotation,
  src,
  alt,
  width,
  height,
  tabletUp,
}) => {
  function toRadians(angle) {
    return angle * (Math.PI / 180)
  }
  const calcNewDimensions = (resizedWidth, resizedHeight, rotation) => {
    if (!rotation || rotation === 0) {
      return { x: resizedWidth, y: resizedHeight }
    } else
      return {
        x:
          Math.abs(resizedHeight * Math.cos(toRadians(90 - rotation))) +
          Math.abs(resizedWidth * Math.cos(toRadians(rotation))),
        y:
          Math.abs(resizedWidth * Math.sin(toRadians(rotation))) +
          Math.abs(resizedHeight * Math.sin(toRadians(90 - rotation))),
      }
  }
  const getMaxWidth = () => {
    switch (size) {
      case LARGE:
        if (tabletUp) return 550
        else return 275
      case MEDIUM:
        if (tabletUp) return 400
        else return 200
      case SMALL:
        if (tabletUp) return 300
        else return 150
    }
  }

  const maxWidth = getMaxWidth()

  const resizedWidth = Math.min(maxWidth, width)
  const resizedHeight = (height * resizedWidth) / width

  const rotatedWidth = calcNewDimensions(
    resizedWidth,
    resizedHeight,
    rotation
  ).x
  const rotatedHeight = calcNewDimensions(
    resizedWidth,
    resizedHeight,
    rotation
  ).y
  const paddingX = Math.round(rotatedWidth - resizedWidth) / 2
  const paddingY = Math.round(rotatedHeight - resizedHeight) / 2

  return (
    <ImageContainer
      style={{
        width: `${rotatedWidth}px`,
        height: `${rotatedHeight}px`,
        padding: `${paddingY}px ${paddingX}px`,
      }}
    >
      <ImageWrapper $size={size} $rotation={rotation}>
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
  tabletUp: PropTypes.bool,
}

const ImageStrip = ({}) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  const [isTabletUp, setIsTabletUp] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const isNowTabletUp = window.innerWidth >= WIDTHS.tablet
      if (isNowTabletUp !== isTabletUp) {
        setIsTabletUp(breakPoint)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isTabletUp])

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <ImageStripContainer>
        {pageIsVisible && (
          <Ticker>
            {() => (
              <ImageStripWrapper>
                {images.map((image, i) => (
                  <ImageStripImage
                    key={i}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    size={image.size}
                    rotation={image.rotation}
                    tabletUp={isTabletUp}
                  />
                ))}
              </ImageStripWrapper>
            )}
          </Ticker>
        )}
      </ImageStripContainer>
    </PageVisibility>
  )
}

ImageStrip.propTypes = {}

export default ImageStrip

const ImageWrapper = styled.div`
  border-radius: ${RADII.wrapper_lg}px;
  overflow: hidden;
  transform: ${({ $rotation }) =>
    $rotation ? `rotate(${$rotation}deg)` : 'none'};
`

const ImageContainer = styled.div`
  margin: 0 ${PADDING.m / 2}px;
  flex-shrink: 0;
`

const ImageStripContainer = styled.div`
  position: relative;
  width: 100%;
`

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
