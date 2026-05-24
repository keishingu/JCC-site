import PageShell from '@/components/layout/PageShell'
import ClimbersHero from '@/components/climbers/ClimbersHero'
import ClimbersGrid from '@/components/climbers/ClimbersGrid'
import ClimbersBottom from '@/components/climbers/ClimbersBottom'

export default function ClimbersPage() {
  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'CLIMBERS', pageNum: '04' }}>
      <ClimbersHero/>
      <ClimbersGrid/>
      <ClimbersBottom/>
    </PageShell>
  )
}
