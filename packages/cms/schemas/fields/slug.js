import SlugInput from 'sanity-plugin-better-slug'
import sanityClient from 'part:@sanity/base/client'
import groq from 'groq'

export const slug = ({ path, source = 'title', ...restOpts } = {}) => {
  return {
    ...restOpts,
    name: 'slug',
    type: 'slug',
    title: 'Slug',
    inputComponent: SlugInput,
    options: {
      source,
      basePath: path ? `/${path}` : undefined,
      isUnique,
    },
  }
}

const isUnique = async (slug, options) => {
  const { document } = options

  const id = document._id.replace(/^drafts\./, '')
  const params = {
    documentTypes: [document._type],
    draft: `drafts.${id}`,
    published: id,
    slug,
  }

  const query = groq`!defined(
    *[
      !(_id in [$draft, $published])
      && _type in $documentTypes
      && slug.current == $slug
    ][0]._id)
  `

  const isUnique = await sanityClient.fetch(query, params)

  return isUnique
}
