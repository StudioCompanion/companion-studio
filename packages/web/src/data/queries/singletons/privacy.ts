import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'

import { META } from '../objects/meta'

export const PRIVACY_PAGE = groq`
    _id,
    content[] {
        ${RICH_TEXT}
    },
    meta {
        ${META}
    }
`
