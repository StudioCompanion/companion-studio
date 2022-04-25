import groq from 'groq'

import { IMAGE } from './image'
import { MUX_VIDEO } from './muxVideo'

export const MEDIA = groq`
    "_type": assetType,
    (assetType == 'image') => {
        ...image {
            ${IMAGE}
        },
    },
    (assetType == 'video') => {
        ...video {
            ${MUX_VIDEO}
        },
    },
`
