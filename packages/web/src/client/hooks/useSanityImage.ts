import { useMemo, useState } from 'react'
import { ImageLoaderProps } from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

import { createSanityClientRead } from '../../data/createSanityClientRead'
import { Sanity } from '@types'

export const useSanityImage = (image?: Sanity.Image) => {
  const [client] = useState(createSanityClientRead())

  const imageProps = useMemo(() => {
    if (!image?.asset) {
      return null
    }

    const builder = imageUrlBuilder(client)
    const urlFor = builder.image(image)

    const loader = ({ quality, width }: ImageLoaderProps) => {
      return (
        urlFor
          .width(width)
          .auto('format')
          .quality(quality || 75)
          .toString() || ''
      )
    }

    return {
      blurDataURL:
        urlFor //
          .auto('format')
          .blur(50)
          .quality(30)
          .width(64)
          .toString() || '',
      height: image.dimensions?.height || undefined,
      width: image.dimensions?.width || undefined,
      alt: image.altText ?? '',
      loader,
      placeholder: 'blur' as const,
      src:
        urlFor //
          .auto('format')
          .quality(20)
          .width(800)
          .toString() || '',
    }
  }, [image])

  return imageProps
}
