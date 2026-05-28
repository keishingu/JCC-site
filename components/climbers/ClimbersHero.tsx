import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'

export default function ClimbersHero() {
  return (
    <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.snowRidge} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.55) contrast(1.0) brightness(1.0)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(243,241,234,.35) 0%, rgba(243,241,234,.05) 50%, rgba(243,241,234,.4) 100%)' }}/>
      <TopNav active="CLIMBERS"/>
      <div style={{ position: 'absolute', left: 56, top: 110, color: 'var(--color-ink)', maxWidth: 580 }}>
        <div style={{ fontSize: 11.5, letterSpacing: '.2em', color: 'var(--color-slate)', fontFamily: 'var(--font-en-sans)', marginBottom: 14 }}>CLIMBERS</div>
        <h1 style={{ margin: 0, fontSize: 56, letterSpacing: '.04em', fontWeight: 500, lineHeight: 1, fontFamily: 'var(--font-en-sans)' }}>会員紹介</h1>
        <div style={{ marginTop: 14, fontSize: 17, color: 'var(--color-navy)', fontFamily: 'var(--font-jp)' }}>Members of Japan Climbers Club</div>
        <div style={{ marginTop: 24, fontSize: 12.5, color: 'var(--color-slate)', lineHeight: 1.95, maxWidth: 520, fontFamily: 'var(--font-jp)' }}>
          日本クライマースクラブは、アルピニズムに真摯に向き合う会員一人ひとりによって支えられています。<br/>
          想いを共有し、互いに刺激しあい、技術と経験を継承しながら、<br/>
          それぞれのスタイルで山と向き合っています。
        </div>
      </div>
    </section>
  )
}
