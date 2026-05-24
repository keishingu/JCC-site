import type { CollectionConfig } from 'payload'

export const JournalIssues: CollectionConfig = {
  slug: 'journal-issues',
  admin: {
    useAsTitle: 'issueNumber',
    defaultColumns: ['issueNumber', 'season', 'publishedAt', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'issueNumber',
      type: 'number',
      label: '会誌番号',
      required: true,
    },
    {
      name: 'season',
      type: 'text',
      label: '号 (例: 2025 春号)',
      required: true,
    },
    {
      name: 'feature',
      type: 'text',
      label: '特集タイトル',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: '表紙画像',
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      label: 'PDF ファイル',
    },
    {
      name: 'pageCount',
      type: 'number',
      label: 'ページ数',
    },
    {
      name: 'toc',
      type: 'array',
      label: '目次',
      fields: [
        { name: 'page',   type: 'text', label: 'ページ' },
        { name: 'title',  type: 'text', label: 'タイトル' },
        { name: 'author', type: 'text', label: '著者' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: '発行日',
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
