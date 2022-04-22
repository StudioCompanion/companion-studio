import { House } from 'phosphor-react'

export default {
  name: 'homepage',
  title: 'Home page',
  type: 'document',
  icon: House,
  groups: [
    {
      name: 'content',
      title: 'Page Content',
    },
    {
      name: 'meta',
      title: 'Page meta',
    },
  ],
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      initialValue: `/`,
      hidden: true,
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
      group: 'meta',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Home page`,
      }
    },
  },
}
