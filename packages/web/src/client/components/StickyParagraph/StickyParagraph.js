import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { PADDING } from 'styles/constants'

import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_RECKLESS_32_400 } from 'styles/fonts'
import { MEDIA_QUERIES } from 'styles/mediaQueries'

const StickyParagraph = ({ text, image, maxWidth }) => {
  return (
    <StickyParagraphContainer>
      <StickyContainer>
        <StickyText>{text}</StickyText>
      </StickyContainer>
      <ImageContainer $maxWidth={maxWidth}>
        <Image src={image.src} placeholder="blur" />
      </ImageContainer>
    </StickyParagraphContainer>
  )
}

StickyParagraph.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
  maxWidth: PropTypes.number,
}

export default StickyParagraph

const StickyParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 770px;
  ${MEDIA_QUERIES.tabletUp} {
    height: 1000px;
  }
`
const StickyContainer = styled.div`
  flex-grow: 1;
  position: relative;
  max-width: 825px;
`
const StickyText = styled.p`
  text-align: center;
  padding-top: ${PADDING.xxl}px;
  position: sticky;
  top: calc(40vh - 60px);
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)};
`
const ImageContainer = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  max-width: ${(p) => (p.$maxWidth ? `${p.$maxWidth}px` : '825px')};

  & img {
    transition: 0.4s ease-out;
  }
`
