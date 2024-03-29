import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { TEAM_MEMBER } from '../objects/teamMember'
import { LINK } from '../objects/link'
import { MEDIA } from '../objects/media'
import { META } from '../objects/meta'

export const TEAMPAGE = groq`
    _id,
    team[]->{
        ...{
            ${TEAM_MEMBER}
        }
    },
    textBlockOne[] {
        ${RICH_TEXT}
    },
    textBlockTwo[] {
        ${RICH_TEXT}
    },
    qualities[] {
        _key,
        text[] {
            ${RICH_TEXT}
        },
        media {
            ${MEDIA}
        }
        
    },
    slideshow[] {
        media {
            ${MEDIA}
        },
        rotation,
    },
    cta {
        ${LINK}
    },
    meta {
        ${META}
    }
`
