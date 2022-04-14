export default {
  name: 'project',
  title: 'Project List',
  type: 'document',
  fieldsets: [
    {
      name: 'meta',
      title: 'Meta',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldset: 'meta',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Image Description',
      type: 'string',
      fieldset: 'meta',
    },
    {
      name: 'team',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media,
      }
    },
  },
}
