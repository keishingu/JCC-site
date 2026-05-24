import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Chronicles: CollectionConfig = {
  slug: 'chronicles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'climbers', 'area', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: '記録タイトル',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'スラッグ',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'year',
      type: 'number',
      label: '年',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'titleEn',
      type: 'text',
      label: '英語タイトル',
    },
    {
      name: 'climbers',
      type: 'text',
      label: '登攀者',
    },
    {
      name: 'area',
      type: 'text',
      label: 'エリア',
    },
    {
      name: 'period',
      type: 'text',
      label: '期間',
    },
    {
      name: 'style',
      type: 'text',
      label: 'スタイル',
    },
    {
      name: 'grade',
      type: 'text',
      label: 'グレード',
    },
    {
      name: 'category',
      type: 'text',
      label: 'カテゴリ',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'ヒーロー画像',
    },
    {
      name: 'lead',
      type: 'richText',
      label: 'リード文',
      editor: lexicalEditor(),
    },
    {
      name: 'body',
      type: 'richText',
      label: '本文',
      editor: lexicalEditor(),
    },
    {
      name: 'topoImage',
      type: 'upload',
      relationTo: 'media',
      label: 'トポ図',
    },
    {
      name: 'photos',
      type: 'array',
      label: '記録写真',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'キャプション',
        },
      ],
    },
    {
      name: 'activityLog',
      type: 'array',
      label: '行動記録',
      fields: [
        { name: 'date',   type: 'text', label: '日付' },
        { name: 'day',    type: 'text', label: '日数' },
        { name: 'record', type: 'text', label: '記録' },
        { name: 'temp',   type: 'text', label: '気温' },
        { name: 'note',   type: 'text', label: '備考' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: '注目記録',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      label: 'ステータス',
      options: [
        { label: '公開', value: 'published' },
        { label: '下書き', value: 'draft' },
      ],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
  ],
}
