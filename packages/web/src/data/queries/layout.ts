import groq from 'groq'
import { META } from './objects/meta'

export const LAYOUT = groq`
    "defaultMeta": *[_type == 'settings'][0].meta{
        ${META}
    },
`
