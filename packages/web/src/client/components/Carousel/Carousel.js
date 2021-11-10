import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'

import { RADII, LAYOUTS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'
import { getFontStyles } from 'styles/getFontStyles'

import { getAspectRatio } from 'helpers/media'

import Slide from './Slide'
import Video from './Video'
import { InfiniteSlider } from './InfiniteCarousel'

const FORWARD = 'forward'
const BACKWARD = 'backward'

const [FULL, HALF, TWO_THIRDS] = LAYOUTS

const regex = new RegExp(/^.*.(mp4|MP4|webm|WEBM)$/)

const Carousel = ({
  bgColor,
  bgImage,
  items,
  layout = FULL,
  desktopAspect,
  mobileAspect,
}) => {
  const itemCount = items.length
  const video = items.find((item) => regex.test(item.url))
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

  return (
    <Wrapper layout={layout}>
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
            <Video url={video.url} />
          ) : (
            <InfiniteSlider ref={sliderApi} items={items}>
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
}

export default Carousel

const Wrapper = styled.div`
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
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
  }
`

const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ layout, $mobileAspect }) =>
    getAspectRatio(layout, $mobileAspect)};
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
      getAspectRatio(layout, $desktopAspect)};
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
  margin-top: 12px;
`

const CaptionText = styled.span`
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
`
