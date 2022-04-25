import groq from 'groq'

export const MUX_VIDEO = groq`
    asset -> {
        playbackId,
        thumbTime,
    },
    "dimensions": {
        "aspectRatio": asset -> data.aspect_ratio,
        "width": asset -> data.tracks[0].max_width,
        "height": asset -> data.tracks[0].max_height,
    }
`
