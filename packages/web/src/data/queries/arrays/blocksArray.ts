import groq from 'groq'
import { BLOCK_MEDIA } from '../pageBlocks/blockMedia'
import { BLOCK_TESTIMONIAL } from '../pageBlocks/blockTestimonial'
import { BLOCK_TEXT } from '../pageBlocks/blockText'

export const BLOCKS_ARRAY = groq`
    (_type == "blockText") => {
        ${BLOCK_TEXT}
    },
    (_type == "blockMedia") => {
        ${BLOCK_MEDIA}
    },
    (_type == "blockTestimonial") => {
        ${BLOCK_TESTIMONIAL}
    }
`
