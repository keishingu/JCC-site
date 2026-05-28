import { createClient } from 'microcms-js-sdk'
import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
})

export type Report = MicroCMSListContent & {
  title: string
  slug: string
  year: number
  titleEn?: string
  climbers?: string
  area?: string
  period?: string
  style?: string
  grade?: string
  category?: string
  heroImage?: MicroCMSImage
  lead?: string
  body?: string
  topoImage?: MicroCMSImage
  photos?: { image: MicroCMSImage; caption?: string }[]
  activityLog?: { date: string; day: string; record: string; temp?: string; note?: string }[]
  featured?: boolean
}

export type NewsItem = MicroCMSListContent & {
  title: string
  slug: string
  tag: string
  author?: string
  heroImage?: MicroCMSImage
  excerpt?: string
  body?: string
  featured?: boolean
}

export type JournalIssue = MicroCMSListContent & {
  issueNumber: number
  season: string
  feature?: string
  coverImage?: MicroCMSImage
  heroImage?: MicroCMSImage
  pdfFile?: { url: string }
  pageCount?: number
  toc?: { page: string; title: string; author?: string }[]
  photos?: { image: MicroCMSImage; caption?: string }[]
}

export type Climber = MicroCMSListContent & {
  name: string
  nameEn?: string
  role?: string
  birthYear?: number
  location?: string
  climbingStyle?: string
  photo?: MicroCMSImage
  instagram?: string
  facebook?: string
  climbingHistory?: { year: string; route: string }[]
  active?: boolean
  order?: number
}

const isConfigured = !!(process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY)

export async function getReports() {
  if (!isConfigured) return { contents: [] as Report[], totalCount: 0 }
  return client.getList<Report>({ endpoint: 'reports', queries: { limit: 100, orders: '-year' } })
}

export async function getNewsList() {
  if (!isConfigured) return { contents: [] as NewsItem[], totalCount: 0 }
  return client.getList<NewsItem>({ endpoint: 'news', queries: { limit: 100, orders: '-publishedAt' } })
}

export async function getJournalIssues() {
  if (!isConfigured) return { contents: [] as JournalIssue[], totalCount: 0 }
  return client.getList<JournalIssue>({ endpoint: 'journal-issues', queries: { limit: 100, orders: '-issueNumber' } })
}

export async function getClimbers() {
  if (!isConfigured) return { contents: [] as Climber[], totalCount: 0 }
  return client.getList<Climber>({
    endpoint: 'climbers',
    queries: { limit: 100, filters: 'active[equals]true', orders: 'order' },
  })
}
