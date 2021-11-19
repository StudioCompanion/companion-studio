import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'

import { RADII, LAYOUTS, DESKTOP, MOBILE, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'

import { getAspectRatio } from 'helpers/media'

import Slide from './Slide'
import Video from './Video'
import { InfiniteSlider } from './InfiniteCarousel'

const FORWARD = 'forward'
const BACKWARD = 'backward'

const { FULL, HALF, TWO_THIRDS } = LAYOUTS.carousel

const regex = new RegExp(/^.*.(mp4|MP4|webm|WEBM)$/)

const Carousel = ({
  bgColor,
  bgImage,
  items,
  layout = FULL,
  desktopAspect,
  mobileAspect,
  hero,
}) => {
  const itemCount = items.length

  const video = items.find(
    (item) => regex.test(item.url.desktop) || regex.test(item.url.desktop)
  )

  const [activeIndex, setActiveIndex] = useState(0)

  const [containerEl, { width, left }] = useMeasure()

  const [direction, setDirection] = useState(null)

  const handleMouseMove = ({ clientX }) => {
    const x = clientX - left
    if (itemCount > 1 && !video) {
      if (x >= Math.round(width / 2) && direction !== FORWARD) {
        setDirection(FORWARD)
      }
      if (x < Math.round(width / 2) && direction !== BACKWARD) {
        setDirection(BACKWARD)
      }
    }
  }

  const sliderApi = useRef(null)

  const handleClick = () => {
    if (direction === BACKWARD && sliderApi.current.prev) {
      const newInd = sliderApi.current.prev(-1)
      setActiveIndex(newInd)
    }
    if (direction === FORWARD && sliderApi.current.next) {
      const newInd = sliderApi.current.next(1)
      setActiveIndex(newInd)
    }
  }

  const handleDragEnd = (index) => {
    setActiveIndex(index)
  }

  return (
    <Wrapper $hero={hero} layout={layout}>
      <Container
        ref={containerEl}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        layout={layout}
        $bgColor={bgColor}
        $bgImage={bgImage}
        $direction={direction}
        $desktopAspect={desktopAspect}
        $mobileAspect={mobileAspect}
      >
        <Inner>
          {video ? (
            <Video video={video} />
          ) : (
            <InfiniteSlider
              ref={sliderApi}
              items={items}
              onDragEnd={handleDragEnd}
            >
              {(item) => <Slide key={item.url} url={item.url} alt={item.alt} />}
            </InfiniteSlider>
          )}
        </Inner>
      </Container>
      <Caption>
        {items[activeIndex].caption ? (
          <CaptionText>{items[activeIndex].caption}</CaptionText>
        ) : null}
        {!video && itemCount > 1 && (
          <Dots>
            {items.map((_, index) => (
              <Dot
                key={index}
                style={{ opacity: activeIndex === index ? 1 : 0.2 }}
              />
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
  desktopAspect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mobileAspect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hero: PropTypes.bool,
}

export default Carousel

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: ${(p) => (p.$hero ? `${PADDING.xl}px` : `${PADDING.s}px`)};

  ${MEDIA_QUERIES.tabletUp} {
    margin-bottom: ${(p) => (p.$hero ? `${PADDING.xxl}px` : `${PADDING.m}px`)};
    width: ${({ layout }) => {
      switch (layout) {
        case FULL:
          return '100%'
        case HALF:
          return `calc(50% - ${PADDING.m / 2}px)`
        case TWO_THIRDS:
          return `${(2 / 3) * 100}%`
      }
    }};
  }
`

const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ layout, $mobileAspect }) =>
    getAspectRatio(layout, MOBILE, $mobileAspect)};
  background-color: ${(p) => (p.$bgColor ? p.$bgColor : 'transparent')};
  background-image: ${(p) => (p.$bgImage ? `url(${p.$bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: ${RADII.wrapper_mobile}px;
  cursor: ${(p) => {
    if (p.$direction === FORWARD) {
      return `url(/icons/cursor_right_arrow.svg), auto;`
    } else if (p.$direction === BACKWARD) {
      return `url(/icons/cursor_left_arrow.svg), auto;`
    } else return 'default'
  }};
  overflow: hidden;

  ${MEDIA_QUERIES.tabletUp} {
    border-radius: ${RADII.wrapper}px;
    padding-top: ${({ layout, $desktopAspect }) =>
      getAspectRatio(layout, DESKTOP, $desktopAspect)};
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Dots = styled.div`
  margin-top: 12px;
  display: flex;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #080b37;
  margin-right: 4px;
`

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
`

const CaptionText = styled.span`
  margin-top: 12px;
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
`
