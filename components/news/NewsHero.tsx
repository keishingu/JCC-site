import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'

export default function NewsHero() {
  return (
    <section style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.iceTrees} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) brightness(.96)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(243,241,234,.85) 0%, rgba(243,241,234,.2) 45%, rgba(243,241,234,0) 65%)' }}/>
      <TopNav active="NEWS"/>
      <div style={{ position: 'absolute', left: 56, top: 88, color: 'var(--color-ink)' }}>
        <div style={{ fontSize: 11.5, letterSpacing: '.2em', color: 'var(--color-slate)',
          fontFamily: 'var(--font-en-sans)' }}>NEWS</div>
        <h1 style={{ margin: '14px 0 12px', fontSize: 56, lineHeight: 1.1, fontWeight: 500,
          fontFamily: 'var(--font-jp)' }}>お知らせ・記録</h1>
        <div style={{ fontSize: 16, color: 'var(--color-navy)',
          fontFamily: 'var(--font-jp)' }}>News &amp; Field Notes</div>
        <div style={{ marginTop: 22, fontSize: 12, color: 'var(--color-slate)', lineHeight: 1.95, maxWidth: 380 }}>
          会からのお知らせ、会報の発行情報、新入会員募集など。<br/>
          メンバーによる山行記録、技術メモ、コンディション、装備レビュー。<br/>
          会の「今」を伝える窓口です。
        </div>
      </div>
    </section>
  )
}
