import groq from 'groq'

import { MEDIA } from '../objects/media'
import { META } from '../objects/meta'
import { RICH_TEXT } from '../objects/richText'

export const APPROACH_PAGE = groq`
    "slug": slug.current,
    meta {
        ${META}
    },
    sections[]{
        _key,
        text[] {
            ${RICH_TEXT}
        },
        media {
            ${MEDIA}
        }
    }
`
