import styled from 'styled-components'

import { Button, ButtonContainer } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { LinkBase } from 'components/Links/LinkBase'
import { FadeUp } from 'components/Transitions/FadeUp'

import { getThemeValue } from 'helpers/theme'

import {
  Colors,
  RADII,
  PADDING,
  ThemeTypes,
  HOVER_BACKGROUND,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { getFontStyles } from 'styles/getFontStyles'
import {
  FONT_STYLE_RECKLESS_32_400,
  FONT_STYLE_RECKLESS_17_400,
} from 'styles/fonts'

import { Sanity } from 'src/types'

export const Callout = ({ text, link, media }: Sanity.Callout) => {
  if (!link) {
    return null
  }

  const { label, ...restProps } = link

  return (
    <FadeUp>
      <CalloutContainer $theme={ThemeTypes.DARK} {...restProps}>
        <div>
          <CalloutText>{text}</CalloutText>
          <Button text={label} theme={ThemeTypes.DARK} />
        </div>
        <CalloutImageWrapper>
          {media ? <Media {...media} /> : null}
        </CalloutImageWrapper>
      </CalloutContainer>
    </FadeUp>
  )
}

const CalloutContainer = styled(LinkBase)<{ $theme: ThemeTypes.DARK }>`
  display: block;
  background-color: ${Colors.lightgrey_2};
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
        background-color: ${(p) => getThemeValue(HOVER_BACKGROUND, p.$theme)};
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
  flex: 0 0 17.4rem;

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
