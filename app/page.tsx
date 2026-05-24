import PageShell from '@/components/layout/PageShell'
import HomeHero from '@/components/home/Hero'
import HomePhilosophy from '@/components/home/Philosophy'
import HomeChronicleRow from '@/components/home/ChronicleRow'
import HomeTriplet from '@/components/home/Triplet'
import HomeDuo from '@/components/home/Duo'

export default function HomePage() {
  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'SINCE' }}>
      <HomeHero/>
      <HomePhilosophy/>
      <HomeChronicleRow/>
      <HomeTriplet/>
      <HomeDuo/>
    </PageShell>
  )
}
