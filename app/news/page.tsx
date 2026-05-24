import PageShell from '@/components/layout/PageShell'
import NewsHero from '@/components/news/NewsHero'
import NewsAnnouncements from '@/components/news/NewsAnnouncements'
import NewsBody from '@/components/news/NewsBody'

export default function NewsPage() {
  return (
    <PageShell sidebarProps={{ variant: 'full', activeNav: 'NEWS', decoration: 'mountain' }}>
      <NewsHero/>
      <NewsAnnouncements/>
      <NewsBody/>
    </PageShell>
  )
}
