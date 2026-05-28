export const revalidate = 60

import PageShell from '@/components/layout/PageShell'
import JournalHero from '@/components/journal/JournalHero'
import JournalGrid from '@/components/journal/JournalGrid'
import JournalLatest from '@/components/journal/JournalLatest'
import { getJournalIssues } from '@/lib/microcms'

export default async function JournalPage() {
  const { contents: issues } = await getJournalIssues()
  const latestIssue = issues[0] ?? null

  return (
    <PageShell sidebarProps={{ variant: 'full', activeNav: 'JOURNAL', decoration: 'social' }}>
      <JournalHero/>
      <JournalLatest latestIssue={latestIssue}/>
      <JournalGrid issues={issues}/>
    </PageShell>
  )
}
