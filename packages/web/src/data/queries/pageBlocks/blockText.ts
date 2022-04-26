import groq from 'groq'
import { RICH_TEXT } from '../objects/richText'

export const BLOCK_TEXT = groq`
    _key,
    _type,
    richText[] {
        ${RICH_TEXT}
    },
`
