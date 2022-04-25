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
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      hidden: ({ document, parent }) => {
        /**
         * Only show field if it's in a project
         * and if the field is being used within
         * a Media Block
         */
        return (
          document._type !== 'project' ||
          (document._type === 'project' &&
            (document?.blocks ?? []).findIndex(
              (block) =>
                block?.items &&
                block.items.some((item) => item._key === parent._key)
            ))
        )
      },
    },
  ],
}
