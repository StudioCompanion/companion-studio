import { useSanityImage } from 'hooks/useSanityImage'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Sanity } from 'src/types'

interface SiteSeoProps {
  defaultSeo?: Sanity.Meta
  meta?: Sanity.Meta
}

export const SiteSeo = ({ defaultSeo, meta }: SiteSeoProps) => {
  const router = useRouter()

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
      openGraph={{
        url: `https://www.companion.studio${router.asPath}`,
        images: imageProps
          ? [
              {
                url: imageProps.src,
                alt: seo.title,
                width: imageProps.width,
                height: imageProps.height,
              },
            ]
          : undefined,
      }}
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
