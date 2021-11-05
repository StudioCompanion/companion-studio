import { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'

import Slide from './Slide'

import { ASPECT_RATIOS, RADII, DOTS, PADDING } from '../../styles/constants'
import Video from './Video'

const RIGHT = 'right'
const LEFT = 'left'

const Carousel = ({ bgColor, bgImage, items }) => {
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
      direction !== RIGHT
    ) {
      setDirection(RIGHT)
    }
    if (
      itemCount > 1 &&
      !video &&
      x < Math.round(width / 2) &&
      direction !== LEFT
    ) {
      setDirection(LEFT)
    }
  }

  const handleClick = () => {
    if (direction === LEFT) {
      prevSlide()
    }
    if (direction === RIGHT) {
      nextSlide()
    }
  }

  return (
    <Wrapper>
      <Container
        $bgColor={bgColor}
        $bgImage={bgImage}
        ref={containerEl}
        onMouseMove={handleMouseMove}
        $direction={direction}
        onClick={handleClick}
      >
        <Inner>
          {video && <Video url={video.url} />}
          {!video && itemCount === 1 && (
            <Slide url={item[0].url} alt={item[0].alt} />
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
        {!video && (
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
  children: PropTypes.node,
  items: PropTypes.array,
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
  cursor: ${(p) => {
    if (p.$direction === RIGHT) {
      return 'e-resize'
    } else if (p.$direction === LEFT) {
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
const Wrapper = styled.div``

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
