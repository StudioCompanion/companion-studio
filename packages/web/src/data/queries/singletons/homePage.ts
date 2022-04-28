import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { CARD } from '../objects/card'

import { META } from '../objects/meta'

export const HOMEPAGE = groq`
    standfirst[] {
        ${RICH_TEXT}
    },
    cards[]->{
        ...card {
            ${CARD}
        },
        "meta": meta.seo,
        "slug": slug.current
    },
    meta {
        ${META}
    }
`
