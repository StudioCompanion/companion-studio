import groq from 'groq'
import { LINK } from './link'

export const RICH_TEXT = groq`
    ...,
    "markDefs": markDefs[]{
        (_type == 'link') => {
            _key,
            _type,
            ${LINK}
        },
        (_type != 'overlay' && _type != 'link') => {
            ...,
        },
    },
`
