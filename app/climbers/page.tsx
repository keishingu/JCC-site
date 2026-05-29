export const dynamic = 'force-dynamic'

import PageShell from '@/components/layout/PageShell'
import ClimbersHero from '@/components/climbers/ClimbersHero'
import ClimbersGrid from '@/components/climbers/ClimbersGrid'
import PastClimbersGrid from '@/components/climbers/PastClimbersGrid'
import ClimbersBottom from '@/components/climbers/ClimbersBottom'
import { getClimbers, getPastClimbers } from '@/lib/microcms'

export default async function ClimbersPage() {
  const [{ contents: members }, { contents: pastMembers }] = await Promise.all([
    getClimbers(),
    getPastClimbers(),
  ])

  return (
    <PageShell>
      <ClimbersHero/>
      <ClimbersGrid members={members}/>
      <PastClimbersGrid members={pastMembers}/>
      <ClimbersBottom/>
    </PageShell>
  )
}
