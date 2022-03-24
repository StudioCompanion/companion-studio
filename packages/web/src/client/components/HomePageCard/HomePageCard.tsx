import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import {
  PADDING,
  DESKTOP,
  MOBILE,
  THEME_TYPES,
  COLOR,
  BACKGROUND,
  HOVER_BACKGROUND,
  CARD_LAYOUTS,
  LAYOUTS,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS } from '../../styles/dimensions'
import { getAspectRatio } from 'helpers/media'
import { getThemeValue } from 'helpers/theme'

import { Button, ButtonContainer } from 'components/Button/Button'
import { FadeUp } from 'components/Transitions/FadeUp'
import { CardVideo, Video } from './CardVideo'

export interface Image {
  desktop: {
    src: string
    height: number
    width: number
  }
  mobile: {
    src: string
    height: number
    width: number
  }
}

interface Aspect {
  desktop: string | number
  mobile: string | number
}

export interface HomePageCardProps {
  image: Image
  video?: Video
  heading: string
  subheading: string
  button?: string
  link: string
  type: LAYOUTS
  aspect?: Aspect
  theme: string
  key?: number
}

export const HomePageCard = ({
  type,
  aspect,
  image,
  video,
  heading,
  subheading,
  button,
  link,
  theme = THEME_TYPES.GREY,
}: HomePageCardProps) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })

  return (
    <FadeUp>
      <Link href={link} passHref>
        <CardWrapper $theme={THEME_TYPES.LIGHT}>
          <CardContainer $theme={theme} $type={type} $aspect={aspect}>
            <CardInner>
              <ImageContainer>
                <ImageWrapper>
                  {!video && (
                    <Image
                      src={tabletUp ? image.desktop : image.mobile}
                      layout="fill"
                      alt={heading}
                      placeholder="blur"
                    />
                  )}
                  {video && (
                    <CardVideo
                      tabletUp={tabletUp}
                      video={video}
                      image={image}
                    />
                  )}
                </ImageWrapper>
              </ImageContainer>
              <CardText $theme={theme}>
                <div>
                  <h2>{heading}</h2>
                  <h3>{subheading}</h3>
                </div>
                <Button
                  text={
                    (button && button) ||
                    (type == CARD_LAYOUTS.STUDIO && 'View') ||
                    'Read'
                  }
                  theme={THEME_TYPES.LIGHT}
                />
              </CardText>
            </CardInner>
          </CardContainer>
        </CardWrapper>
      </Link>
    </FadeUp>
  )
}

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: all 350ms cubic-bezier(0.76, 0, 0.24, 1);
  overflow: hidden;
`

const CardWrapper = styled.a<{ $theme: string }>`
  display: block;
  position: relative;
  margin: ${PADDING.s}px 0;
  ${MEDIA_QUERIES.tabletUp} {
    margin: ${PADDING.m}px 0;
  }
  color: inherit;

  &:hover {
    & ${ImageContainer} {
      transform: scale(0.85, 0.85) translateY(-4%);
      transition: all 350ms cubic-bezier(0.76, 0, 0.24, 1);
      overflow: hidden;
    }
    & ${ButtonContainer} {
      background-color: ${(p) => getThemeValue(p.$theme, HOVER_BACKGROUND)};
    }
  }
`
const CardContainer = styled.div<{
  $theme: string
  $type: LAYOUTS
  $aspect?: Aspect
}>`
  background-color: ${(p) => getThemeValue(p.$theme, BACKGROUND)};
  padding-top: ${({ $type, $aspect }) =>
    getAspectRatio($type, MOBILE, $aspect)};
  border-radius: 12px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: ${({ $type, $aspect }) =>
      getAspectRatio($type, DESKTOP, $aspect)};
  }
`
const CardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`

const CardText = styled.div<{ $theme: string }>`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
  color: ${(p) => getThemeValue(p.$theme, COLOR)};
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;

  & img {
    transition: 0.4s ease-out;
  }
`
