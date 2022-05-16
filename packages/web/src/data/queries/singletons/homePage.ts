import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { CARD } from '../objects/card'

import { META } from '../objects/meta'

export const HOMEPAGE = groq`
    standfirst[] {
        ${RICH_TEXT}
    },
    cards[]->{
        "_key": _id,
        ...card {
            ${CARD}
        },
        meta {
            ${META}
        },
        "type": _type,
        "slug": slug.current
    },
`
