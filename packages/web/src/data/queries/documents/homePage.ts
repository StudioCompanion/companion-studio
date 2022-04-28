import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { CARD } from '../objects/card'

import { META } from '../objects/meta'

export const HOMEPAGE = groq`
    standfirst {
        ${RICH_TEXT}
    },
    cards[0]->{
        ${CARD}
    },
    meta {
        ${META}
    }
`
