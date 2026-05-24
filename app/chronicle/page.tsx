import PageShell from '@/components/layout/PageShell'
import ChronicleHero from '@/components/chronicle/ChronicleHero'
import ChronicleGrid from '@/components/chronicle/ChronicleGrid'
import ChronicleDetail from '@/components/chronicle/ChronicleDetail'

export default function ChroniclePage() {
  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: 'CHRONICLE — 01' }}>
      <ChronicleHero/>
      <ChronicleGrid/>
      <ChronicleDetail/>
    </PageShell>
  )
}
