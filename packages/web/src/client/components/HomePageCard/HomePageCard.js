import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

import { COLORS, PADDING } from 'styles/constants'
import { MEDIA_QUERIES } from 'styles/mediaQueries'
import { WIDTHS } from '../../styles/dimensions'
import { getFontStyles } from 'styles/getFontStyles'
import { FONT_STYLE_APFEL_12_400 } from 'styles/fonts'

const HomePageCard = ({
  type,
  image,
  heading,
  subheading,
  button = 'Read',
  link,
}) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <CardWrapper>
      <CardContainer>
        <CardInner>
          <CardText>
            <ImageContainer>
              <ImageWrapper>
                <Image
                  src={tabletUp ? image.desktop : image.mobile}
                  layout="fill"
                />
              </ImageWrapper>
            </ImageContainer>
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
  padding-top: 71%;
  border-radius: 12px;

  ${MEDIA_QUERIES.tabletUp} {
    padding-top: 71%;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-end;
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
`
