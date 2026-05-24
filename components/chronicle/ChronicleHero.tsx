import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'

export default function ChronicleHero() {
  return (
    <section style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.frostPinnacle} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.55) brightness(.92) contrast(.95)' }}/>
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,22,40,.18) 0%, rgba(10,22,40,0) 25%, rgba(10,22,40,.35) 100%), linear-gradient(90deg, rgba(243,241,234,.5) 0%, rgba(243,241,234,0) 45%)' }}/>
      <TopNav active="CHRONICLE"/>
      <div style={{ position: 'absolute', left: 56, top: 130, color: '#0a1628', maxWidth: 540 }}>
        <h1 style={{ margin: 0, fontSize: 56, letterSpacing: '.04em', fontWeight: 500, lineHeight: 1,
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>CHRONICLE</h1>
        <div style={{ marginTop: 14, fontSize: 18, color: '#16263f',
          fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>登攀記録アーカイブ</div>
        <div style={{ marginTop: 28, fontSize: 12.5, color: '#3d5070', lineHeight: 1.95, maxWidth: 460 }}>
          JCCの会員たちが、時代ごとに残してきた登攀記録のアーカイブです。<br/>
          山と向き合い、迷い、挑み、退却し、そして得たもの。<br/>
          その一つひとつの記録が、次の登攀へとつながっています。
        </div>
      </div>
    </section>
  )
}
