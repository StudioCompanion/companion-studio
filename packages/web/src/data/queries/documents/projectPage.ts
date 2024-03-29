import groq from 'groq'

import { BLOCKS_ARRAY } from '../arrays/blocksArray'

import { META } from '../objects/meta'
import { TEAM_MEMBER } from '../objects/teamMember'

export const PROJECT_PAGE = groq`
    _id,
    title,
    status,
    meta {
        ${META}
    },
    team[] -> {
        ${TEAM_MEMBER}
    },
    blocks[]{
        ${BLOCKS_ARRAY}
    },
`
