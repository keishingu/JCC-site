import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'

export default function NewsHero() {
  return (
    <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.iceTrees} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) brightness(.96)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(243,241,234,.85) 0%, rgba(243,241,234,.2) 45%, rgba(243,241,234,0) 65%)' }}/>
      <TopNav active="NEWS"/>
      <div style={{ position: 'absolute', left: 56, top: 110, color: 'var(--color-ink)', maxWidth: 540 }}>
        <div style={{ fontSize: 11.5, letterSpacing: '.2em', color: 'var(--color-slate)', fontFamily: 'var(--font-en-sans)', marginBottom: 14 }}>NEWS</div>
        <h1 style={{ margin: 0, fontSize: 56, letterSpacing: '.04em', fontWeight: 500, lineHeight: 1, fontFamily: 'var(--font-en-sans)' }}>お知らせ・記録</h1>
        <div style={{ marginTop: 14, fontSize: 17, color: 'var(--color-navy)', fontFamily: 'var(--font-jp)' }}>News &amp; Field Notes</div>
        <div style={{ marginTop: 24, fontSize: 12.5, color: 'var(--color-slate)', lineHeight: 1.95, maxWidth: 380, fontFamily: 'var(--font-jp)' }}>
          会からのお知らせ、会報の発行情報、新入会員募集など。<br/>
          メンバーによる山行記録、技術メモ、コンディション、装備レビュー。<br/>
          会の「今」を伝える窓口です。
        </div>
      </div>
    </section>
  )
}
