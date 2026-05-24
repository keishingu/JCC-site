import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: '氏名',
      required: true,
    },
    {
      name: 'nameEn',
      type: 'text',
      label: '氏名（英語表記）',
    },
    {
      name: 'role',
      type: 'text',
      label: '役職',
    },
    {
      name: 'birthYear',
      type: 'number',
      label: '生年',
    },
    {
      name: 'location',
      type: 'text',
      label: '在住',
    },
    {
      name: 'climbingStyle',
      type: 'text',
      label: 'クライミングスタイル',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: '写真',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram URL',
    },
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook URL',
    },
    {
      name: 'climbingHistory',
      type: 'array',
      label: '主な登攀歴',
      fields: [
        { name: 'year',  type: 'text', label: '年', required: true },
        { name: 'route', type: 'text', label: 'ルート名', required: true },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: '現役会員',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: '表示順',
      admin: { position: 'sidebar' },
    },
  ],
}
