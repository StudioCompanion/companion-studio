import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

import { PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_20_400,
  FONT_STYLE_RECKLESS_32_400,
} from 'styles/fonts'

const OpeningText = ({ text }) => {
  return (
    <OpeningTextContainer>
      <LogoContainer>
        <Image src={'/images/graphics/logo.svg'} width={255} height={115} />
      </LogoContainer>
      <OpeningTextInner>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0 ${PADDING.xl}px 0;
  width: 100%;
  ${MEDIA_QUERIES.tabletUp} {
    position: sticky;
    top: 0;
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
  max-width: 90px;
`
const OpeningTextCopy = styled.h1`
  text-align: center;
  ${getFontStyles(FONT_STYLE_RECKLESS_20_400)}
  ${MEDIA_QUERIES.tabletUp} {
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  }
`
