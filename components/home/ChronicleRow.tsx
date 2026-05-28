import Link from 'next/link'
import ArrowLink from '../layout/ArrowLink'
import type { Report } from '@/lib/microcms'

function TopoSketch() {
  return (
    <svg viewBox="0 0 200 270" style={{ width: '100%', height: '100%', background: '#ebe5d4' }}>
      <g stroke="#3a3528" fill="none" strokeWidth=".7" opacity=".85">
        <path d="M30 250 Q60 180 80 150 T120 80 L130 40"/>
        <path d="M30 250 Q70 200 100 170 T150 90 L160 60"/>
        <path d="M50 250 Q80 210 110 180 T160 110"/>
        <path d="M120 80 L135 70 L145 60 M140 60 L150 50 L156 45"/>
        <circle cx="155" cy="48" r="2" fill="#3a3528" stroke="none"/>
      </g>
    </svg>
  )
}

export default function HomeChronicleRow({ reports }: { reports: Report[] }) {
  return (
    <section style={{
      background: 'var(--color-cream)', padding: '70px 56px 80px',
      borderTop: '1px solid rgba(10,22,40,0.08)', borderBottom: '1px solid rgba(10,22,40,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: 'var(--color-ink)',
            fontFamily: 'var(--font-en-sans)' }}>REPORTS</h2>
          <span style={{ fontSize: 13, color: 'var(--color-slate)', letterSpacing: '.08em' }}>登攀記録アーカイブ</span>
        </div>
        <ArrowLink href="/reports">すべての記録を見る</ArrowLink>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
        {reports.map((r) => (
          <Link key={r.id} href={`/reports/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '1/1', background: '#222', overflow: 'hidden', position: 'relative' }}>
              {r.heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'saturate(.65) contrast(.95)' }}/>
              ) : (
                <TopoSketch/>
              )}
            </div>
            <div style={{ marginTop: 14, fontSize: 18, letterSpacing: '.04em', fontWeight: 500, color: 'var(--color-ink)',
              fontFamily: 'var(--font-en-serif)' }}>{r.year}</div>
            <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.45, color: 'var(--color-ink)',
              fontFamily: 'var(--font-jp)' }}>{r.title}</div>
            <div style={{ marginTop: 6, fontSize: 11, color: 'var(--color-slate)', letterSpacing: '.06em',
              fontFamily: 'var(--font-en-serif)' }}>{r.climbers?.map(c => c.name).join('・')}</div>
            <div style={{ marginTop: 2, fontSize: 10.5, color: '#6a7d97', letterSpacing: '.06em',
              fontFamily: 'var(--font-en-serif)' }}>{r.titleEn}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
