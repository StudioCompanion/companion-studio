import groq from 'groq'
import { RICH_TEXT } from '../objects/richText'

export const BLOCK_TESTIMONIAL = groq`
    _key,
    _type,
    author,
    quote[] {
        ${RICH_TEXT}
    },
`
