import groq from 'groq'
import { MEDIA } from './media'

export const CARD = groq`
    theme,
    title,
    subtitle,
    cardButtonLabel,
    media {
        ${MEDIA}
    },
    theme,
    backgroundColor
`
