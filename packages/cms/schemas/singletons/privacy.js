import { Lock } from 'phosphor-react'

export default {
  name: 'privacy',
  title: 'Privacy',
  type: 'document',
  icon: Lock,
  fields: [
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          name: 'q_a',
          title: 'Q & A',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      name: 'meta',
      title: 'Page meta',
      type: 'meta',
    },
    {
      name: 'card',
      title: 'Page Card',
      type: 'pageCard',
    },
  ],
}
