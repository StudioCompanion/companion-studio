import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { CARD } from '../objects/card'

import { META } from '../objects/meta'

export const HOMEPAGE = groq`
    standfirst[] {
        ${RICH_TEXT}
    },
    meta {
        ${META}
    },
    cards[]{
        (_type == "reference") => @-> {
            "_key": _id,
            ...card {
                ${CARD}
            },
            meta {
                ${META}
            },
            status,
            "type": _type,
            "slug": slug.current
        },
        (_type == 'externalCard') => {
            "slug": linkExternal,
            "type": _type,
            ${CARD}
        }
    },
`
