import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/**
 * Documents
 */
import teamMember from './documents/teamMember'
import project from './documents/project'

/**
 * Singletons
 */
import approach from './singletons/approach'
import homepage from './singletons/homepage'
import settings from './singletons/settings'
import teampage from './singletons/teampage'

/**
 * Objects
 */
import media from './objects/media'
import { basicRichText, squiggleRichText } from './objects/richText'
import meta from './objects/meta'
import redirects from './objects/redirects'
import pageCard from './objects/pageCard'
import link from './objects/link'

/**
 * Blocks
 */
import blockMedia from './blocks/blockMedia'
import blockText from './blocks/blockText'
import blockTestimonial from './blocks/blockTestimonial'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /**
     * Documents
     */
    project,
    teamMember,
    /**
     * Singletons
     */
    approach,
    homepage,
    settings,
    teampage,
    /**
     * Objects
     */
    media,
    basicRichText,
    squiggleRichText,
    meta,
    redirects,
    pageCard,
    link,
    /**
     * Blocks
     */
    blockMedia,
    blockText,
    blockTestimonial,
  ]),
})
