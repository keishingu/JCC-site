export const dynamic = 'force-dynamic'

import PageShell from '@/components/layout/PageShell'
import ChronicleHero from '@/components/chronicle/ChronicleHero'
import ChronicleGrid from '@/components/chronicle/ChronicleGrid'
import { getReports } from '@/lib/microcms'

export default async function ReportsPage() {
  const { contents: reports } = await getReports()

  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'REPORTS — 01' }}>
      <ChronicleHero/>
      <ChronicleGrid records={reports}/>
    </PageShell>
  )
}
