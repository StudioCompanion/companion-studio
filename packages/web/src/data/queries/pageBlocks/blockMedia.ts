import groq from 'groq'
import { IMAGE } from '../objects/image'
import { MEDIA } from '../objects/media'

export const BLOCK_MEDIA = groq`
    _key,
    _type,
    backgroundColor,
    backgroundImage {
        ${IMAGE}
    },
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
