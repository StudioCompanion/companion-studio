import groq from 'groq'
import { MEDIA } from './media'

export const CARD = groq`
    layout,
    theme,
    title,
    subtitle,
    media {
        ${MEDIA}
    }
`
