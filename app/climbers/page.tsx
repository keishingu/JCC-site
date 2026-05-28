import PageShell from '@/components/layout/PageShell'
import ClimbersHero from '@/components/climbers/ClimbersHero'
import ClimbersGrid from '@/components/climbers/ClimbersGrid'
import ClimbersBottom from '@/components/climbers/ClimbersBottom'
import { getClimbers } from '@/lib/microcms'

export default async function ClimbersPage() {
  const { contents: members } = await getClimbers()

  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'CLIMBERS', pageNum: '04' }}>
      <ClimbersHero/>
      <ClimbersGrid members={members}/>
      <ClimbersBottom/>
    </PageShell>
  )
}
