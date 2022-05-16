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
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'info',
      options: {
        layout: 'dropdown',
        list: [
          {
            value: 'comingSoon',
            title: 'Coming Soon',
          },
          {
            value: 'live',
            title: 'Live',
          },
        ],
      },
      initialValue: 'comingSoon',
    },
    {
      group: 'info',
      name: 'team',
      title: 'Team',
      type: 'array',
      validation: (rule) =>
        rule.custom((value, { parent }) => {
          if (parent.status === 'live' && value.length < 1) {
            return 'You must add at least one team member'
          }

          return true
        }),
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
      validation: (rule) =>
        rule.custom((value, { parent }) => {
          if (parent.status === 'live' && value.length < 1) {
            return 'You must add at least one page block'
          }

          return true
        }),
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
