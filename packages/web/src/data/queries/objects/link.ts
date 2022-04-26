import groq from 'groq'

export const LINK = groq`
    label,
    (linkType == 'internal' && linkInternal != null) => {
        "url": linkInternal->{
            _id,
            _type,
            "slug": slug.current,
        },
    },
    (linkType == 'external' && linkExternal != null) => {
        "url": linkExternal,
        "isExternal": true,
    },
`
