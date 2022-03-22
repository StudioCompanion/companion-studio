import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

import { RADII, PADDING } from 'styles/constants'
import { WIDTHS } from '../../styles/dimensions'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import FadeUp from 'components/Transitions/FadeUp'

const SMALL = 'small'
const MEDIUM = 'medium'
const LARGE = 'large'

interface ImageStripImageProps {
  size: string
  rotation?: number
  src: StaticImageData
  alt: string
  width: number
  height: number
  tabletUp: boolean
}

const ImageStripImage = ({
  size,
  rotation,
  src,
  alt,
  width,
  height,
  tabletUp,
}: ImageStripImageProps) => {
  function toRadians(angle: number) {
    return angle * (Math.PI / 180)
  }
  const calcNewDimensions = (
    resizedWidth: number,
    resizedHeight: number,
    rotation?: number
  ) => {
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
  const getMaxWidth = (): number => {
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
      default:
        return 200
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
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder="blur"
        />
      </ImageWrapper>
    </ImageContainer>
  )
}

export const ImageStrip = ({}) => {
  const [pageIsVisible, setPageIsVisible] = useState<boolean>(true)
  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible)
  }

  const [isTabletUp, setIsTabletUp] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const isNowTabletUp: boolean | null = window.innerWidth >= WIDTHS.tablet
      if (isNowTabletUp !== isTabletUp) {
        setIsTabletUp(isNowTabletUp)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isTabletUp])

  return (
    <FadeUp>
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
    </FadeUp>
  )
}

const ImageWrapper = styled.div<{
  $size: string
  $rotation?: number
}>`
  border-radius: ${RADII.wrapper_lg}px;
  overflow: hidden;
  transform: ${({ $rotation }) =>
    $rotation ? `rotate(${$rotation}deg)` : 'none'};

  & img {
    transition: 0.4s ease-out;
  }
`

const ImageContainer = styled.div`
  margin: 0 ${PADDING.m / 2}px;
  flex-shrink: 0;
`

const ImageStripContainer = styled.div`
  position: relative;
  width: 100%;
  margin: ${PADDING.xl}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.l} 0;
  }
`

const ImageStripWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: max-content;
`

import largeImage from '../../../../public/images/image-strip/large-image.jpg'
import scooby from '../../../../public/images/image-strip/scooby.jpg'
import mediumImage from '../../../../public/images/image-strip/medium-image.jpg'
import smallImage from '../../../../public/images/image-strip/small-image.jpg'

const images = [
  {
    src: largeImage,
    alt: 'Large Image',
    width: 531,
    height: 549,
    size: LARGE,
    rotation: 10,
  },
  {
    src: scooby,
    alt: 'Scooby',
    width: 3024,
    height: 4032,
    size: SMALL,
  },
  {
    src: mediumImage,
    alt: 'Medium Image',
    width: 333,
    height: 444,
    size: MEDIUM,
    rotation: -5,
  },
  {
    src: smallImage,
    alt: 'Small Image',
    width: 294,
    height: 256,
    size: SMALL,
  },
]
