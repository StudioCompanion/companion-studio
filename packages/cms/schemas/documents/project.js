import { File } from 'phosphor-react'
import { BLOCKS_ARRAY } from '../arrays/blocksArray'
import { slug } from '../fields/slug'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: File,
  groups: [
    {
      name: 'info',
      title: 'Page Info',
    },
    {
      name: 'content',
      title: 'Page Content',
    },
    {
      name: 'meta',
      title: 'Page meta',
    },
    {
      name: 'card',
      title: 'Page card',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'info',
      validation: (rule) => rule.required(),
    },
    slug({ group: 'info', path: 'projects' }),
    {
      group: 'info',
      name: 'team',
      title: 'Team',
      type: 'array',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          name: 'member',
          title: 'Team Member',
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
    {
      name: 'blocks',
      title: 'Page blocks',
      type: 'array',
      of: BLOCKS_ARRAY,
      group: 'content',
      validation: (rule) => rule.required().min(1),
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
      group: 'meta',
    },
    {
      name: 'card',
      title: 'Page Card',
      type: 'pageCard',
      group: 'card',
    },
  ],
}
