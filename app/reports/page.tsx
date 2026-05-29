export const dynamic = 'force-dynamic'

import PageShell from '@/components/layout/PageShell'
import ReportsHero from '@/components/reports/ReportsHero'
import ReportsGrid from '@/components/reports/ReportsGrid'
import { getReports } from '@/lib/microcms'

export default async function ReportsPage() {
  const { contents: reports } = await getReports()

  return (
    <PageShell>
      <ReportsHero/>
      <ReportsGrid records={reports}/>
    </PageShell>
  )
}
