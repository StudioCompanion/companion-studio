import groq from 'groq'
import { MEDIA } from '../objects/media'

export const BLOCK_MEDIA = groq`
    _key,
    _type,
    backgroundColor,
    isHero,
    layout,
    items[]{
        _key,
        hasMobile,
        caption,
        mobile {
            ${MEDIA}
        },
        desktop {
            ${MEDIA}
        },
    },
`
