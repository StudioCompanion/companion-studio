import groq from 'groq'

import { RICH_TEXT } from '../objects/richText'
import { TEAM_MEMBER } from '../objects/teamMember'

import { META } from '../objects/meta'

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
`