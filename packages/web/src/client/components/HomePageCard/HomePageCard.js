import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import { COLORS, PADDING, DESKTOP, MOBILE, LAYOUTS } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS } from '../../styles/dimensions'
import { getAspectRatio } from 'helpers/media'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

const { STUDIO, CASE_STUDY } = LAYOUTS.card

const HomePageCard = ({
  type,
  desktopAspect,
  mobileAspect,
  image,
  heading,
  subheading,
  button = 'Read',
  link,
}) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <CardWrapper>
      <CardContainer
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
              />
            </ImageWrapper>
          </ImageContainer>
          <CardText $type={type}>
            <CardHeadingWrapper>
              <CardHeading>{heading}</CardHeading>
              <CardSubheading>{subheading}</CardSubheading>
            </CardHeadingWrapper>
            <Link href={link} passHref>
              <CardButton>{button}</CardButton>
            </Link>
          </CardText>
        </CardInner>
      </CardContainer>
    </CardWrapper>
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
}

export default HomePageCard

const CardWrapper = styled.div`
  position: relative;
  margin: ${PADDING.s}px;
  ${MEDIA_QUERIES.tabletUp} {
    width: 50%;
    margin: ${PADDING.m}px;
  }
`
const CardContainer = styled.div`
  background-color: ${COLORS.lightgrey_2};
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
const CardHeadingWrapper = styled.div``
const CardHeading = styled.h2``
const CardSubheading = styled.h3``

const CardText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
  color: ${(p) => (p.$type === CASE_STUDY ? COLORS.white : 'inherit')};
`

const CardButton = styled.a`
  display: block;
  background-color: ${COLORS.white};
  border-radius: 500px;
  padding: 8px;
  color: ${COLORS.darkblue};
  ${getFontStyles(FONT_STYLE_APFEL_12_400)}
  z-index: 1;
  text-decoration: none;
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
