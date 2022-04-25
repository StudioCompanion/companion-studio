import groq from 'groq'
import { IMAGE } from './image'

export const TEAM_MEMBER = groq`
    "_key": _id,
    name,
    job,
    image {
        ${IMAGE}
    },
`
