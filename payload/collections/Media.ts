import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: '代替テキスト',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'キャプション',
    },
  ],
  upload: true,
}
