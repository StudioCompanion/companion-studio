import groq from 'groq'
import { LINK } from '../objects/link'
import { MEDIA } from '../objects/media'

import { META } from '../objects/meta'

export const LINKTREE_PAGE = groq`
    links[]{
        _key,
        link {
            ${LINK}
        },
        media {
            ${MEDIA}
        },
        meta {
            ${META}
        }
    }   
`
