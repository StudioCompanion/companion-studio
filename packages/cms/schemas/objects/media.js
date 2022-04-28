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
      validation: (rule) =>
        rule.custom((value, ctx) => {
          const { parent, path } = ctx

          const isMobileAsset = path.slice(-2)[0] === 'mobile'

          if (
            parent.assetType === 'video' &&
            value === undefined &&
            path[0] !== 'card' &&
            !isMobileAsset
          ) {
            return 'You must supply an asset'
          } else {
            return true
          }
        }),
    },
    {
      title: 'Image file',
      name: 'image',
      type: 'image',
      hidden: ({ parent }) => parent?.assetType !== 'image',
      validation: (rule) =>
        rule.custom((value, ctx) => {
          const { parent, path } = ctx

          const isMobileAsset = path.slice(-2)[0] === 'mobile'

          if (
            parent.assetType === 'image' &&
            value === undefined &&
            path[0] !== 'card' &&
            !isMobileAsset
          ) {
            return 'You must supply an asset'
          } else {
            return true
          }
        }),
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
