import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import Button from 'components/Button/Button'

import { COLORS, RADII, PADDING, DARK } from 'styles/constants'
import { WIDTHS } from '../../styles/dimensions'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

const Callout = () => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <CalloutContainer href="mailto:hello@companion.studio">
      <div>
        <CalloutText>
          Have a project you’d like to work on with us? Interested in joining
          the team? Need a shoulder to cry on?
        </CalloutText>
        <Button text={'Message us'} theme={DARK} />
      </div>
      {tabletUp && (
        <CalloutImageWrapper>
          <Image src={'/callout_image.png'} width={176} height={174} />
        </CalloutImageWrapper>
      )}
    </CalloutContainer>
  )
}

Callout.propTypes = {}

export default Callout

const CalloutContainer = styled.a`
  display: block;
  background-color: ${COLORS.lightgrey_3};
  border-radius: ${RADII.wrapper_lg}px;
  padding: ${PADDING.s}px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  ${MEDIA_QUERIES.tabletUp} {
    padding: ${PADDING.m}px;
  }
`

const CalloutText = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
  margin-bottom: 30px;
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 530px;
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  }
`

const CalloutImageWrapper = styled.div``
