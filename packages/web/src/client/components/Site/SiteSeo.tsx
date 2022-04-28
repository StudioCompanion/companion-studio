import { useSanityImage } from 'hooks/useSanityImage'
import { NextSeo } from 'next-seo'
import { Sanity } from 'src/types'

interface SiteSeoProps {
  defaultSeo?: Sanity.Meta
  meta?: Sanity.Meta
}

export const SiteSeo = ({ defaultSeo, meta }: SiteSeoProps) => {
  const imageProps = useSanityImage(
    meta?.image ? meta.image : defaultSeo?.image
  )

  const seo = {
    ...defaultSeo,
    ...meta,
  }

  return (
    <NextSeo
      title={seo.title}
      description={seo.description}
      openGraph={
        imageProps
          ? {
              images: [
                {
                  url: imageProps.src,
                  alt: seo.title,
                  width: imageProps.width,
                  height: imageProps.height,
                },
              ],
            }
          : undefined
      }
      additionalMetaTags={
        seo.keyword
          ? [
              {
                property: 'keywords',
                content: `${seo.keyword},${(seo.focusWords ?? []).map(
                  (kw) => ` ${kw}`
                )}`,
              },
            ]
          : []
      }
    />
  )
}
