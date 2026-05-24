import PageShell from '@/components/layout/PageShell'
import JournalHero from '@/components/journal/JournalHero'
import JournalGrid from '@/components/journal/JournalGrid'
import JournalLatest from '@/components/journal/JournalLatest'

export default function JournalPage() {
  return (
    <PageShell sidebarProps={{ variant: 'full', activeNav: 'JOURNAL', decoration: 'social' }}>
      <JournalHero/>
      <JournalGrid/>
      <JournalLatest/>
    </PageShell>
  )
}
