import { EarthGlobeIcon } from '@sanity/icons'

import { PREVIEWABLE_DOCUMENT_TYPES } from '../constants'

export default (props) => {
  const { draft, published, type } = props

  if (!PREVIEWABLE_DOCUMENT_TYPES.includes(type)) {
    return null
  }

  return {
    label: 'Open Preview',
    icon: EarthGlobeIcon,
    onHandle: async () => {
      const siteUrl = process.env.SANITY_STUDIO_BASE_URL
      const secret = process.env.SANITY_STUDIO_SANITY_SECRET

      if (!siteUrl || !secret) {
        console.warn(
          'Missing either SANITY_STUDIO_SANITY_SECRET or SANITY_STUDIO_BASE_URL, unable to open a preview.'
        )
        return
      }

      const previewUrl = `${siteUrl}/api/preview?secret=${secret}`
      const document = draft || published

      let slug = `/${document?.slug?.current}`

      switch (type) {
        case 'genericPage':
          slug = `/pages${slug}`
          break
        case 'innovMaterial':
          slug = `/innovations${slug}`
          break
        default:
          break
      }

      window.open(`${previewUrl}&documentType=${type}&slug=${siteUrl}${slug}`)
    },
    shortcut: 'cmd+shift+o',
  }
}
