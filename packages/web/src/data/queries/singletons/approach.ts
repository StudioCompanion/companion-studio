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
        (_type == "textSection") => {
            ...,
            text[] {
                ${RICH_TEXT}
            }
        },
        (_type == "mediaSection") => {
            _key,
            ${MEDIA}
        }
    }
`
