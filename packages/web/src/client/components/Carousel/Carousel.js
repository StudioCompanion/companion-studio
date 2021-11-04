import { useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'

import Slide from './Slide'

import { ASPECT_RATIOS, RADII, DOTS, PADDING } from '../../styles/constants'

const Carousel = ({ bgColor, bgImage, items }) => {
  const itemCount = items.length

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
    if (x >= Math.round(width / 2) && direction !== 'right') {
      setDirection('right')
    }
    if (x < Math.round(width / 2) && direction !== 'left') {
      setDirection('left')
    }
  }

  const handleClick = () => {
    if (direction === 'left') {
      prevSlide()
    }
    if (direction === 'right') {
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
          {itemCount === 1 && <Slide url={item[0].url} alt={item[0].alt} />}
          {itemCount > 1 && (
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
        <Dots>
          {items.map((item, index) => (
            <Dot key={index} active={activeIndex === index} />
          ))}
        </Dots>
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
  cursor: ${(p) => (p.$direction === 'right' ? 'e-resize' : 'w-resize')};
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
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
  background-color: ${DOTS.color};
  opacity: ${(p) => (p.active ? 1 : DOTS.opacity)};
  margin-right: ${DOTS.spacing}px;
`

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${PADDING[0]}px;
`

const CaptionText = styled.span``
