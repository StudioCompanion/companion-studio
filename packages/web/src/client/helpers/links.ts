import { Sanity } from 'src/types'

type BadRef = { _type: string }

export const getHrefSlugFromSanityReference = <TPage extends Sanity.Pages>(
  ref: TPage
) => {
  switch (ref._type) {
    case 'homepage':
      return '/'
    case 'approachpage':
      return '/approach'
    case 'teampage':
      return '/team'
    case 'project':
      return `/projects/${ref.slug}`
    default:
      console.warn(
        `Missing transformSanityDocumentReferencesIntoLinks case for ${
          (ref as BadRef)._type
        }, empty string has been returned`
      )
      return ''
  }
}

export const urlIsReferenceGuard = (
  url: Sanity.Link['url']
): url is Sanity.Pages =>
  Boolean(url && typeof url !== 'string' && Boolean(url._type))
