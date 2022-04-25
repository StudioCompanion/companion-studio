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
    },
    slug({ group: 'info', path: 'projects' }),
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      group: 'info',
    },
    {
      group: 'info',
      name: 'team',
      title: 'Team',
      type: 'array',
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
