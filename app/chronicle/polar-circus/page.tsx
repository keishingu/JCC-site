import PageShell from '@/components/layout/PageShell'
import ArticleContent from '@/components/chronicle/ArticleContent'

export default function PolarCircusPage() {
  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'CHRONICLE — 2025 / 01', pageNum: '2025' }}>
      <ArticleContent/>
    </PageShell>
  )
}
