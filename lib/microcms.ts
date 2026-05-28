import { createClient } from 'microcms-js-sdk'
import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

const isConfigured = !!(process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY)

export const client = isConfigured
  ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    })
  : ({} as ReturnType<typeof createClient>)

export type Climber = MicroCMSListContent & {
  name: string
  nameEn?: string
  photo?: MicroCMSImage
  birthYear?: number
  location?: string
  climbingHistory?: { fieldId: string; year: string; route: string; targetReport?: { id: string; slug?: string; title?: string } | null }[]
  instagram?: string
  facebook?: string
  active?: boolean
  order?: number
}

export type Report = MicroCMSListContent & {
  title: string
  slug: string
  year: number
  titleEn?: string
  climbers?: Climber[]
  area?: string
  period?: string
  style?: string
  grade?: string
  category?: string
  heroImage?: MicroCMSImage
  lead?: string
  body?: string
  topoImage?: MicroCMSImage
  courseTime?: string
  gear?: string
  photos?: { image: MicroCMSImage; caption?: string }[] | null
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

export type SiteSettings = {
  topImage?: MicroCMSImage
  topImageCaption?: string
  delegateText?: string
  delegateMessage?: string
  dekegeteImage?: MicroCMSImage  // microCMS側のキー名（typo）
}

export async function getReport(slug: string): Promise<Report | null> {
  if (!isConfigured) return null
  const res = await client.getList<Report>({
    endpoint: 'reports',
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  })
  return res.contents[0] ?? null
}

export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  if (!isConfigured) return null
  const res = await client.getList<NewsItem>({
    endpoint: 'news',
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  })
  return res.contents[0] ?? null
}

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

export async function getSettings(): Promise<SiteSettings> {
  if (!isConfigured) return {}
  return client.getObject<SiteSettings>({ endpoint: 'settings' })
}

export async function getClimbers() {
  if (!isConfigured) return { contents: [] as Climber[], totalCount: 0 }
  return client.getList<Climber>({
    endpoint: 'climbers',
    queries: { limit: 100, filters: 'active[equals]true', orders: 'order' },
  })
}
