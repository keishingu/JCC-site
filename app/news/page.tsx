export const dynamic = 'force-dynamic'

import PageShell from '@/components/layout/PageShell'
import NewsHero from '@/components/news/NewsHero'
import NewsAnnouncements from '@/components/news/NewsAnnouncements'
import NewsBody from '@/components/news/NewsBody'
import { getNewsList } from '@/lib/microcms'

export default async function NewsPage() {
  const { contents: news } = await getNewsList()
  const announcements = news.filter((n) => ['announcement', 'journal', 'recruit'].includes(n.tag))

  return (
    <PageShell>
      <NewsHero/>
      <NewsAnnouncements items={announcements}/>
      <NewsBody articles={news}/>
    </PageShell>
  )
}
