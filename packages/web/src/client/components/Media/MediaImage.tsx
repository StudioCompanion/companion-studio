import NextImage from 'next/image'

import { useSanityImage } from '../../hooks/useSanityImage'

import { generateSrcSetSizes } from '../../helpers/media'

import { Sanity } from '@types'

type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive'

export type SizesArray = [
  largeMobile: string | null,
  tablet?: string | null,
  smallDesktop?: string | null,
  largeDesktop?: string | null
]

export type Props = {
  image: Sanity.Image
  layout?: ImageLayout
  objectFit?: 'cover' | 'contain'
  sizes?: string | SizesArray
}

export const MediaImage = ({
  image,
  layout = 'intrinsic',
  objectFit = 'cover',
  sizes = '100vw',
  ...restProps
}: Props) => {
  const imageProps = useSanityImage(image)

  if (!imageProps || imageProps.src === '') {
    console.warn('Missing source from image')
    return null
  }

  const filteredImageProps = {
    ...imageProps,
  }
  if (layout === 'fill') {
    delete filteredImageProps.width
    delete filteredImageProps.height
  }

  return (
    <NextImage
      {...filteredImageProps}
      layout={layout}
      objectFit={objectFit}
      sizes={generateSrcSetSizes(sizes)}
      draggable={false}
      {...restProps}
    />
  )
}
