import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'

export default function HomeDuo() {
  return (
    <section style={{ padding: '24px 56px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 42 }}>
      {/* HISTORY */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: 'var(--color-ink)',
            fontFamily: 'var(--font-en-sans)' }}>HISTORY</h2>
          <span style={{ fontSize: 13, color: 'var(--color-slate)' }}>JCCの歴史</span>
        </div>
        <div style={{ aspectRatio: '16/7', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.peakBW2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
            filter: 'grayscale(1) contrast(1.05) brightness(.95)' }}/>
        </div>
        <div style={{ marginTop: 14, fontSize: 12, color: 'var(--color-slate)', lineHeight: 1.8 }}>
          1958年の創立から現在までの<br/>歩みを年表とともに紹介します。
        </div>
        <div style={{ marginTop: 14 }}>
          <ArrowLink href="/climbers">詳しく見る</ArrowLink>
        </div>
      </div>

      {/* JOIN US */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: 'var(--color-ink)',
            fontFamily: 'var(--font-en-sans)' }}>JOIN US</h2>
          <span style={{ fontSize: 13, color: 'var(--color-slate)' }}>新入会員募集</span>
        </div>
        <div style={{ aspectRatio: '16/7', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.iceTrees} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
            filter: 'saturate(.7) brightness(.92) contrast(1.0)' }}/>
        </div>
        <div style={{ marginTop: 14, fontSize: 12, color: 'var(--color-slate)', lineHeight: 1.8 }}>
          JCCでは、アルピニズムの精神に共感し、<br/>自立した登攀を志す方を求めています。
        </div>
        <div style={{ marginTop: 14 }}>
          <ArrowLink href="/climbers">募集要項を見る</ArrowLink>
        </div>
      </div>
    </section>
  )
}
