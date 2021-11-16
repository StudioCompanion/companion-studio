import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { COLORS, RADII, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_32_400,
} from 'styles/fonts'

const StickyParagraph = ({ text, image }) => {
  return (
    <StickyParagraphContainer>
      <StickyContainer>
        <StickyText>{text}</StickyText>
      </StickyContainer>
      <ImageContainer>
        <Image src={image.src} width={image.width} height={image.height} />
      </ImageContainer>
    </StickyParagraphContainer>
  )
}

StickyParagraph.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object,
}

export default StickyParagraph

const StickyParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 653px;
  height: 770px;
`
const StickyContainer = styled.div`
  flex-grow: 1;
  position: relative;
`
const StickyText = styled.p`
  text-align: center;
  padding-top: ${PADDING.xl}px;
  position: sticky;
  top: 0;
  ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
`
const ImageContainer = styled.div`
  padding-top: ${PADDING.xl}px;
  min-height: 400px;
  display: flex;
  align-items: center;
`
