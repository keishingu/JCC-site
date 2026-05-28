import PageShell from '@/components/layout/PageShell'
import ChronicleHero from '@/components/chronicle/ChronicleHero'
import ChronicleGrid from '@/components/chronicle/ChronicleGrid'
import ChronicleDetail from '@/components/chronicle/ChronicleDetail'
import { getChronicles } from '@/lib/microcms'

export default async function ChroniclePage() {
  const { contents: chronicles } = await getChronicles()

  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'CHRONICLE — 01' }}>
      <ChronicleHero/>
      <ChronicleGrid records={chronicles}/>
      <ChronicleDetail/>
    </PageShell>
  )
}
