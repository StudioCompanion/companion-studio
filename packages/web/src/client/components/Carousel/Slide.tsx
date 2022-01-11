import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import { WIDTHS } from 'styles/dimensions'

import type { IImage } from './InfiniteCarousel'

export const Slide = ({ url, alt }: IImage) => {
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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & img {
    transition: 0.4s ease-out;
  }
`
