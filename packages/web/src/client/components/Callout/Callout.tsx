import styled from 'styled-components'
import Image from 'next/image'

import Button, { ButtonContainer } from 'components/Button/Button'
import FadeUp from 'components/Transitions/FadeUp'

import {
  COLORS,
  RADII,
  PADDING,
  THEME_TYPES,
  HOVER_BACKGROUND,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import { getThemeValue } from 'helpers/theme'
import {
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

const Callout = () => {
  return (
    <FadeUp>
      <CalloutContainer
        $theme={THEME_TYPES.DARK}
        href="mailto:hello@companion.studio"
      >
        <div>
          <CalloutText>
            Have a project you’d like to work on with us? Interested in joining
            the team? Need a shoulder to cry on?
          </CalloutText>
          <Button text={'Message us'} theme={THEME_TYPES.DARK} />
        </div>
        <CalloutImageWrapper>
          <Image
            src={'/images/graphics/callout_image.png'}
            width={176}
            height={174}
          />
        </CalloutImageWrapper>
      </CalloutContainer>
    </FadeUp>
  )
}

export default Callout

const CalloutContainer = styled.a<{ $theme: string }>`
  display: block;
  background-color: ${COLORS.lightgrey_2};
  border-radius: ${RADII.wrapper_lg}px;
  padding: ${PADDING.s}px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;

  ${MEDIA_QUERIES.tabletUp} {
    padding: ${PADDING.m}px;
  }

  @media (hover: hover) {
    &:hover {
      ${ButtonContainer} {
        background-color: ${(p) => getThemeValue(p.$theme, HOVER_BACKGROUND)};
      }
    }
  }
`

const CalloutText = styled.p`
  ${getFontStyles(FONT_STYLE_RECKLESS_17_400)}
  margin-bottom: 30px;
  ${MEDIA_QUERIES.smallTabletUp} {
    max-width: 300px;
  }
  ${MEDIA_QUERIES.tabletUp} {
    max-width: 530px;
    ${getFontStyles(FONT_STYLE_RECKLESS_32_400)}
  }
`

const CalloutImageWrapper = styled.div`
  display: none;

  ${MEDIA_QUERIES.smallTabletUp} {
    display: block;
    margin-left: 50px;
    max-width: 125px;
  }

  ${MEDIA_QUERIES.tabletUp} {
    margin-left: 0;
    max-width: none;
  }
`
