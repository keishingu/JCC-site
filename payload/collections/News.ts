import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'author', 'publishedAt', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'タイトル',
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
      name: 'tag',
      type: 'select',
      label: 'タグ',
      options: [
        { label: 'お知らせ',  value: 'announcement' },
        { label: '会報',      value: 'journal' },
        { label: '募集',      value: 'recruit' },
        { label: 'FIELD',     value: 'field' },
        { label: 'TECH.',     value: 'tech' },
        { label: 'GEAR',      value: 'gear' },
        { label: 'EXPEDITION',value: 'expedition' },
      ],
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: '著者',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'ヒーロー画像',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: '概要',
    },
    {
      name: 'body',
      type: 'richText',
      label: '本文',
      editor: lexicalEditor(),
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: '注目記事',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: '公開日',
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
