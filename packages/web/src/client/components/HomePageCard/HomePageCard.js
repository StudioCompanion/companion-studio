import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import {
  PADDING,
  DESKTOP,
  MOBILE,
  LAYOUTS,
  LIGHT,
  GREY,
  COLOR,
  BACKGROUND,
} from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS } from '../../styles/dimensions'
import { getAspectRatio } from 'helpers/media'
import { getThemeValue } from 'helpers/theme'
import Button from 'components/Button/Button'

const { STUDIO } = LAYOUTS.card

const HomePageCard = ({
  type,
  desktopAspect,
  mobileAspect,
  image,
  heading,
  subheading,
  button,
  link,
  theme = GREY,
}) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <Link href={link} passHref>
      <CardWrapper>
        <CardContainer
          $theme={theme}
          $type={type}
          $mobileAspect={mobileAspect}
          $desktopAspect={desktopAspect}
        >
          <CardInner>
            <ImageContainer>
              <ImageWrapper>
                <Image
                  src={tabletUp ? image.desktop : image.mobile}
                  layout="fill"
                  alt={heading}
                />
              </ImageWrapper>
            </ImageContainer>
            <CardText $theme={theme}>
              <div>
                <h2>{heading}</h2>
                <h3>{subheading}</h3>
              </div>
              <Button
                text={
                  (button && button) || (type == STUDIO && 'View') || 'Read'
                }
                theme={LIGHT}
              />
            </CardText>
          </CardInner>
        </CardContainer>
      </CardWrapper>
    </Link>
  )
}

HomePageCard.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  button: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
  desktopAspect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mobileAspect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.string,
}

export default HomePageCard

const CardWrapper = styled.a`
  display: block;
  position: relative;
  margin: ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    width: 50%;
    margin: ${PADDING.m}px;
  }
  color: inherit;
`
const CardContainer = styled.div`
  background-color: ${(p) => getThemeValue(p.$theme, BACKGROUND)};
  padding-top: ${({ $type, $mobileAspect }) =>
    getAspectRatio($type, MOBILE, $mobileAspect)};
  border-radius: 12px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: ${({ $type, $desktopAspect }) =>
      getAspectRatio($type, DESKTOP, $desktopAspect)};
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
`

const CardText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
  color: ${(p) => getThemeValue(p.$theme, COLOR)};
`
const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`
