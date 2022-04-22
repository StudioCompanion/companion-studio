import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/**
 * Documents
 */
import teamMember from './documents/teamMember'
/**
 * Singletons
 */
import homepage from './singletons/homepage'
import settings from './singletons/settings'

/**
 * Objects
 */
import media from './objects/media'
import richText from './objects/richText'
import meta from './objects/meta'
import redirects from './objects/redirects'

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
    teamMember,
    /**
     * Singletons
     */
    homepage,
    settings,
    /**
     * Objects
     */
    media,
    richText,
    meta,
    redirects,
  ]),
})
