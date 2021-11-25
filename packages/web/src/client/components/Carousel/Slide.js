import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import { WIDTHS } from '../../styles/dimensions'

const Slide = ({ url, alt }) => {
  const tabletUp = useMediaQuery({ query: `(min-width: ${WIDTHS.tablet}px)` })
  return (
    <ImageWrapper>
      {tabletUp ? (
        <Image
          draggable={false}
          src={url.desktop}
          alt={alt}
          layout="fill"
          placeholder="blur"
        />
      ) : (
        <Image
          draggable={false}
          src={url.mobile}
          alt={alt}
          layout="fill"
          placeholder="blur"
        />
      )}
    </ImageWrapper>
  )
}

Slide.propTypes = {
  url: PropTypes.object,
  alt: PropTypes.string,
  hero: PropTypes.bool,
}

export default Slide

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
