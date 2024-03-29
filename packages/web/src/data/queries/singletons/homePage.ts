import groq from 'groq'

import { CARD } from '../objects/card'

import { META } from '../objects/meta'

export const HOMEPAGE = groq`
    _id,
    standfirst,
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
            _key,
            "slug": linkExternal,
            "type": _type,
            ${CARD}
        }
    },
`
