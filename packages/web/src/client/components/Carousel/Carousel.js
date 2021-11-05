import { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'

import Slide from './Slide'

import { ASPECT_RATIOS, RADII, PADDING, LAYOUTS } from '../../styles/constants'
import Video from './Video'

const FORWARD = 'forward'
const BACKWARD = 'backward'
const [FULL, HALF, TWO_THIRDS] = LAYOUTS

const Carousel = ({ bgColor, bgImage, items, layout = FULL }) => {
  const itemCount = items.length

  const regex = new RegExp(/^.*.(mp4|MP4|webm|WEBM)$/)
  const video = items.find((item) => regex.test(item.url) === true)

  const [containerEl, bounds] = useMeasure()
  const { width } = bounds

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const slide = useSpring({
    transform: `translate3d(-${activeIndex * width}px, 0, 0)`,
  })

  const nextSlide = () => {
    if (activeIndex === itemCount - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(itemCount - 1)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleMouseMove = ({ clientX }) => {
    const x = clientX - bounds.left
    if (
      itemCount > 1 &&
      !video &&
      x >= Math.round(width / 2) &&
      direction !== FORWARD
    ) {
      setDirection(FORWARD)
    }
    if (
      itemCount > 1 &&
      !video &&
      x < Math.round(width / 2) &&
      direction !== BACKWARD
    ) {
      setDirection(BACKWARD)
    }
  }

  const handleClick = () => {
    if (direction === BACKWARD) {
      prevSlide()
    }
    if (direction === FORWARD) {
      nextSlide()
    }
  }

  return (
    <Wrapper layout={layout}>
      <Container
        $bgColor={bgColor}
        $bgImage={bgImage}
        ref={containerEl}
        onMouseMove={handleMouseMove}
        $direction={direction}
        onClick={handleClick}
        layout={layout}
      >
        <Inner>
          {video && <Video url={video.url} />}
          {!video && itemCount === 1 && (
            <Slide url={items[0].url} alt={items[0].alt} />
          )}
          {!video && itemCount > 1 && (
            <CarouselContent
              style={{ width: `${width * itemCount}px`, ...slide }}
            >
              {items.map((item, index) => (
                <Slide key={index} url={item.url} alt={item.alt} />
              ))}
            </CarouselContent>
          )}
        </Inner>
      </Container>
      <Caption>
        <CaptionText>{items[activeIndex].caption}</CaptionText>
        {!video && itemCount > 1 && (
          <Dots>
            {items.map((item, index) => (
              <Dot key={index} active={activeIndex === index} />
            ))}
          </Dots>
        )}
      </Caption>
    </Wrapper>
  )
}

Carousel.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  items: PropTypes.array,
  layout: PropTypes.string,
}

export default Carousel

const Wrapper = styled.div`
  width: ${({ layout }) => {
    switch (layout) {
      case FULL:
        return '100%'
      case HALF:
        return '50%'
      case TWO_THIRDS:
        return `${(2 / 3) * 100}%`
    }
  }};
`

const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ layout }) => {
    switch (layout) {
      case FULL:
        return ASPECT_RATIOS.full
      case HALF:
        return ASPECT_RATIOS.half
      case TWO_THIRDS:
        return ASPECT_RATIOS.two_thirds
    }
  }};
  background-color: ${(p) => (p.$bgColor ? p.$bgColor : 'transparent')};
  background-image: ${(p) => (p.$bgImage ? `url(${p.$bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${RADII.wrapper}px;
  cursor: ${(p) => {
    if (p.$direction === FORWARD) {
      return 'e-resize'
    } else if (p.$direction === BACKWARD) {
      return 'w-resize'
    } else return 'pointer'
  }};
  overflow: hidden;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const CarouselContent = styled(animated.div)`
  height: 100%;
  display: flex;
`

const Dots = styled.div`
  display: flex;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #080b37;
  opacity: ${(p) => (p.active ? 1 : 0.2)};
  margin-right: 4px;
`

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${PADDING[0]}px;
`

const CaptionText = styled.span``
