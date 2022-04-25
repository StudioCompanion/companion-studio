import groq from 'groq'

export const IMAGE = groq`
    ...,
    "altText": asset->altText,
    'dimensions': asset->metadata.dimensions,
    'mimeType': asset->mimeType,
`
