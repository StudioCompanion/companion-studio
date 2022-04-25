import groq from 'groq'
import { IMAGE } from './image'

export const META = groq`
    "title": seo.seo_title,
    "description": seo.meta_description,
    "keyword": seo.focus_keyword,
    "focusWords": seo.focus_synonyms,
    "image": seo.image {
      ${IMAGE}
    },
`
