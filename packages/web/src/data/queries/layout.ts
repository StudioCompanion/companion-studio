import groq from 'groq'
import { LINK } from './objects/link'
import { MEDIA } from './objects/media'
import { META } from './objects/meta'

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
            links[]{
                ${LINK}
            },
        },
        navigation[]{
            ${LINK}
        },
    },
`
