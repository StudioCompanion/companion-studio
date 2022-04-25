import groq from 'groq'

import { BLOCKS_ARRAY } from '../arrays/blocksArray'
import { CARD } from '../objects/card'

import { META } from '../objects/meta'
import { TEAM_MEMBER } from '../objects/teamMember'

export const PROJECT_PAGE = groq`
    title,
    subtext,
    meta {
        ${META}
    },
    card {
        ${CARD}
    },
    team[] -> {
        ${TEAM_MEMBER}
    },
    blocks[]{
        ${BLOCKS_ARRAY}
    },
`
