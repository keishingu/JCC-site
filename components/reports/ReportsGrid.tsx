import Link from 'next/link'
import type { Report } from '@/lib/microcms'

function TopoSketch() {
  return (
    <svg viewBox="0 0 200 270" style={{ width: '100%', height: '100%', background: '#ebe5d4' }}>
      <g stroke="#3a3528" fill="none" strokeWidth=".7" opacity=".85">
        <path d="M30 250 Q60 180 80 150 T120 80 L130 40"/>
        <path d="M30 250 Q70 200 100 170 T150 90 L160 60"/>
        <path d="M50 250 Q80 210 110 180 T160 110"/>
        <path d="M120 80 L135 70 L145 60 M140 60 L150 50 L156 45"/>
        <text x="14" y="20" fontSize="6" fill="#3a3528" fontFamily="serif" stroke="none">Mt. Harinoki  1963</text>
        <circle cx="155" cy="48" r="2" fill="#3a3528" stroke="none"/>
      </g>
    </svg>
  )
}

export default function ReportsGrid({ records }: { records: Report[] }) {
  return (
    <section style={{ background: 'var(--color-cream)', padding: '40px 56px 60px' }}>
      {/* Filter bar */}
      <div style={{ background: '#1d2f4a', color: '#fff', padding: '14px 0', marginBottom: 32,
        display: 'flex', gap: 26, alignItems: 'center', marginLeft: -56, marginRight: -56,
        paddingLeft: 56, paddingRight: 56 }}>
        {[['年代', 'すべて'], ['エリア', 'すべて'], ['スタイル', 'すべて']].map(([label, val]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
            <span style={{ fontSize: 13, color: '#fff', fontFamily: 'var(--font-jp)', flex: '0 0 auto' }}>{label}</span>
            <div style={{ flex: 1, height: 32, border: '1px solid rgba(255,255,255,.18)', background: 'rgba(255,255,255,.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px',
              fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
              <span>{val}</span>
              <svg width="9" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2"/></svg>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1.2 }}>
          <span style={{ fontSize: 13, color: '#fff', fontFamily: 'var(--font-jp)' }}>キーワード</span>
          <div style={{ flex: 1, height: 32, border: '1px solid rgba(255,255,255,.18)', background: 'rgba(255,255,255,.05)',
            display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
            フリーワード
          </div>
        </div>
      </div>

      {/* Count + view toggle */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ fontSize: 15, color: 'var(--color-ink)', fontFamily: 'var(--font-jp)' }}>
          全 <span style={{ fontSize: 22, fontWeight: 500, margin: '0 4px', fontFamily: 'var(--font-en-serif)' }}>{records.length}</span> 件
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontSize: 11, color: 'var(--color-slate)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-ink)', fontWeight: 500,
            fontFamily: 'var(--font-en-serif)' }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="1" width="6" height="6"/><rect x="9" y="1" width="6" height="6"/><rect x="1" y="9" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/></svg>
            GRID
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-en-serif)' }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="14" height="2"/><rect x="1" y="7" width="14" height="2"/><rect x="1" y="12" width="14" height="2"/></svg>
            LIST
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
        {records.map((r) => (
          <Link key={r.id} href={`/reports/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '1/1', background: '#222', overflow: 'hidden', position: 'relative' }}>
              {r.heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'saturate(.6) contrast(.95)' }}/>
              ) : (
                <TopoSketch/>
              )}
            </div>
            <div style={{ marginTop: 12, fontSize: 16, fontWeight: 500, color: 'var(--color-ink)',
              fontFamily: 'var(--font-en-serif)' }}>{r.year}</div>
            <div style={{ marginTop: 5, fontSize: 13.5, lineHeight: 1.4, color: 'var(--color-ink)',
              fontFamily: 'var(--font-jp)' }}>{r.title}</div>
            <div style={{ marginTop: 4, fontSize: 10.5, color: 'var(--color-slate)',
              fontFamily: 'var(--font-en-serif)' }}>{r.climbers?.map(c => c.name).join('・')}</div>
            <div style={{ marginTop: 1, fontSize: 10, color: '#6a7d97',
              fontFamily: 'var(--font-en-serif)' }}>{r.titleEn}</div>
            {r.category && (
              <div style={{ marginTop: 8, display: 'inline-block', fontSize: 10, padding: '3px 8px',
                border: '1px solid rgba(10,22,40,0.08)', color: 'var(--color-slate)', background: 'rgba(255,255,255,.5)' }}>{r.category}</div>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
