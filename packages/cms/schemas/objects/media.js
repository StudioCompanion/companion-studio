export default {
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    {
      name: 'assetType',
      title: 'Asset type',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
      hidden: ({ parent }) => parent?.assetType !== 'video',
    },
    {
      title: 'Image file',
      name: 'image',
      type: 'image',
      hidden: ({ parent }) => parent?.assetType !== 'image',
    },
  ],
  preview: {
    select: {
      assetType: 'assetType',
      media: 'image',
    },
    prepare: (selection) => ({
      title: selection?.assetType,
      media: selection?.media,
    }),
  },
}
