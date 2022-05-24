import groq from 'groq'
import { LINK } from './objects/link'
import { MEDIA } from './objects/media'
import { META } from './objects/meta'
import { RICH_TEXT } from './objects/richText'

export const LAYOUT = groq`
    "siteSettings": *[_type == 'settings'][0]{
        "defaultMeta": meta {
            ${META}
        },
        callout {
            link {
                ${LINK}
            },
            media {
                ${MEDIA}
            },
            text,
        },
        footer {
            text[] {
                ${RICH_TEXT}
            },
            links[]{
                ${LINK}
            },
        },
        navigation[]{
            ${LINK}
        },
    },
`
