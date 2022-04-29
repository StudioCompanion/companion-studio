import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { TEAM_MEMBER } from '../objects/teamMember'
import { LINK } from '../objects/link'
import { MEDIA } from '../objects/media'

export const TEAMPAGE = groq`
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
        title[] {
            ${RICH_TEXT}
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
`
