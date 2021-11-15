import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_32_400,
} from 'styles/fonts'

const OpeningText = ({ text }) => {
  return (
    <OpeningTextContainer>
      <OpeningTextInner>
        <LogoContainer>
          <Image
            src={'/images/graphics/logo_placeholder.png'}
            width={50}
            height={48}
          />
        </LogoContainer>
        <OpeningTextCopy>{text}</OpeningTextCopy>
      </OpeningTextInner>
    </OpeningTextContainer>
  )
}

OpeningText.propTypes = {
  text: PropTypes.string,
}

export default OpeningText

const OpeningTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  ${MEDIA_QUERIES.tabletUp} {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    margin: 0;
  }
`
const OpeningTextInner = styled.div`
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 75%;
  }
`
const LogoContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`
const OpeningTextCopy = styled.h1`
  text-align: center;
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  ${MEDIA_QUERIES.tabletUp} {
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  }
`
