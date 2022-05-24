import groq from 'groq'
import { IMAGE } from '../objects/image'
import { MEDIA } from '../objects/media'
import { RICH_TEXT } from '../objects/richText'

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
        caption[] {
            ${RICH_TEXT}
        },
        mobile {
            ${MEDIA}
        },
        desktop {
            ${MEDIA}
        },
    },
`
