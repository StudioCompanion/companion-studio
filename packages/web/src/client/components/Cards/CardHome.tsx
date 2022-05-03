import styled from 'styled-components'
import Link from 'next/link'

import {
  ThemeTypes,
  COLOR,
  BACKGROUND,
  HOVER_BACKGROUND,
} from 'styles/constants'
import { FONT_STYLE_RECKLESS_20_400 } from 'styles/fonts'

import { getThemeValue } from 'helpers/theme'

import { Button, ButtonContainer } from 'components/Button/Button'
import { Media } from 'components/Media/Media'
import { Heading } from 'components/Text/Heading'

import { Sanity } from '@types'

interface CardHomeProps extends Sanity.HomepageCard {
  className?: string
}

export const CardHome = ({
  layout,
  media,
  meta,
  subtitle,
  theme,
  title,
  slug,
  className,
}: CardHomeProps) => {
  const selectedMedia = media?.asset
    ? media
    : meta?.image?.asset
    ? meta.image
    : undefined

  const actualTitle = title ?? meta?.title

  return (
    <Link href={`/projects/${slug}` ?? ''} passHref>
      <CardWrapper className={className} $theme={theme}>
        <ImageContainer>
          {selectedMedia ? <MediaContainer {...selectedMedia} /> : null}
        </ImageContainer>
        <CardText $theme={theme}>
          <div>
            {actualTitle ? (
              <Heading tag="h2" fontStyle={FONT_STYLE_RECKLESS_20_400}>
                {actualTitle}
              </Heading>
            ) : null}
            {subtitle ? <Heading tag="h3">{subtitle}</Heading> : null}
          </div>
          <Button
            text={layout === 'studio' ? 'View' : 'Read'}
            theme={ThemeTypes.LIGHT}
          />
        </CardText>
      </CardWrapper>
    </Link>
  )
}

const ImageContainer = styled.div`
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: all 350ms cubic-bezier(0.76, 0, 0.24, 1);
`

const MediaContainer = styled(Media)`
  border-radius: 12px;
  overflow: hidden;
`

const CardWrapper = styled.a<{ $theme?: ThemeTypes }>`
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(p) => getThemeValue(BACKGROUND, p.$theme)};

  &:hover {
    & ${ImageContainer} {
      transform: scale(0.85, 0.85) translateY(-4%);
      transition: all 350ms cubic-bezier(0.76, 0, 0.24, 1);
    }

    & ${ButtonContainer} {
      background-color: ${(p) =>
        getThemeValue(HOVER_BACKGROUND, ThemeTypes.LIGHT)};
    }
  }
`

const CardText = styled.div<{ $theme?: ThemeTypes }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;

  & h2,
  & h3 {
    color: ${(p) => getThemeValue(COLOR, p.$theme)} !important;
  }
`
