import { Children, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CursorOverlay from './CursorOverlay'

import { ASPECT_RATIOS, RADII } from '../../styles/constants'

const Carousel = ({ bgColor, bgImage, children }) => {
  const childrenCount = Children.toArray(children).length

  const containerEl = useRef(null)
  const [width, setWidth] = useState()
  const getWidth = () => {
    const newWidth = containerEl.current.offsetWidth
    setWidth(newWidth)
  }
  useEffect(() => {
    getWidth()
  }, [containerEl])
  useEffect(() => {
    window.addEventListener('resize', getWidth)
  }, [])

  const [translate, setTranslate] = useState(0)
  const [transition, setTransition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    if (activeIndex === childrenCount - 1) {
      setActiveIndex(0)
      setTranslate(0)
    } else {
      setActiveIndex(activeIndex + 1)
      setTranslate((activeIndex + 1) * width)
    }
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(childrenCount - 1)
      setTranslate((childrenCount - 1) * width)
    } else {
      setActiveIndex(activeIndex - 1)
      setTranslate((activeIndex - 1) * width)
    }
  }

  return (
    <Container $bgColor={bgColor} $bgImage={bgImage} ref={containerEl}>
      <CursorOverlay
        width={width}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <Inner>
        {childrenCount === 1 && <>{children}</>}
        {childrenCount > 1 && (
          <CarouselContent
            translate={translate}
            transition={transition}
            containerWidth={width * childrenCount}
          >
            {children}
          </CarouselContent>
        )}
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
  overflow: hidden;
`

const CarouselContent = styled.div`
  transform: translateX(-${(p) => p.translate}px);
  transition: transform ease-out ${(p) => p.transition}s;
  height: 100%;
  width: ${(p) => p.containerWidth}px;
  display: flex;
`
