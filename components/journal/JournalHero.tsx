import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'

export default function JournalHero() {
  return (
    <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.iceTrees} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.55) brightness(.97)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(243,241,234,.85) 0%, rgba(243,241,234,.2) 50%, rgba(243,241,234,0) 70%)' }}/>
      <TopNav active="JOURNAL"/>
      <div style={{ position: 'absolute', left: 56, top: 110, color: 'var(--color-ink)', maxWidth: 540 }}>
        <div style={{ fontSize: 11.5, letterSpacing: '.2em', color: 'var(--color-slate)', fontFamily: 'var(--font-en-sans)', marginBottom: 14 }}>JOURNAL</div>
        <h1 style={{ margin: 0, fontSize: 56, letterSpacing: '.04em', fontWeight: 500, lineHeight: 1, fontFamily: 'var(--font-en-sans)' }}>会誌・記録・思想</h1>
        <div style={{ marginTop: 14, fontSize: 17, color: 'var(--color-navy)', fontFamily: 'var(--font-jp)' }}>Club Journal Archive since 1958</div>
        <div style={{ marginTop: 24, fontSize: 12.5, color: 'var(--color-slate)', lineHeight: 1.95, maxWidth: 380, fontFamily: 'var(--font-jp)' }}>
          1958年から続く、<br/>
          日本クライマースクラブの会誌アーカイブ。<br/>
          登攀の記録とともに、時代の空気や思想を伝えます。
        </div>
      </div>
    </section>
  )
}
