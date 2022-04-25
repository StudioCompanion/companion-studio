export default {
  name: 'blockTestimonial',
  title: 'Testimonial Block',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'richText',
      validation: (rule) => rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      author: 'author',
    },
    prepare(selection) {
      const { author = '' } = selection
      return {
        title: `${author}`,
        subtitle: `Testimonial Block`,
      }
    },
  },
}
