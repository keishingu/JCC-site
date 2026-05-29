import Link from 'next/link'
import type { Climber } from '@/lib/microcms'

const enSt: React.CSSProperties = { fontFamily: 'var(--font-en-serif)' }
const jpSt: React.CSSProperties = { fontFamily: 'var(--font-jp)' }

export default function PastClimbersGrid({ members }: { members: Climber[] }) {
  return (
    <section id="past" style={{ background: 'var(--color-navy)', padding: '50px 56px 70px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 22, letterSpacing: '.12em', fontWeight: 500, color: '#fff', ...enSt }}>PAST CLIMBERS</h2>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', ...jpSt }}>OB 会員</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: '.18em', color: 'rgba(255,255,255,.5)', display: 'inline-flex', alignItems: 'baseline', gap: 6, ...enSt }}>
          <span style={{ fontSize: 22, color: '#fff', fontWeight: 500 }}>{String(members.length).padStart(2, '0')}</span>
          <span>CLIMBERS</span>
        </div>
      </div>

      {members.length === 0 ? (
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', ...jpSt }}>データがありません</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
          {members.map((m) => (
            <article key={m.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#111' }}>
                {m.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.1) brightness(.75)' }}/>
                )}
              </div>
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <h3 style={{ margin: 0, fontSize: 18, color: '#fff', letterSpacing: '.02em', ...jpSt }}>{m.name}</h3>
              </div>
              {m.nameEn && <div style={{ marginTop: 3, fontSize: 11, color: 'rgba(255,255,255,.5)', letterSpacing: '.06em', ...enSt }}>{m.nameEn}</div>}
              {(m.birthYear || m.location) && (
                <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
                  {[m.birthYear && `${m.birthYear}年生まれ`, m.location && `${m.location}在住`].filter(Boolean).join('　')}
                </div>
              )}

              {m.climbingHistory && m.climbingHistory.length > 0 && (
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,.1)' }}>
                  <div style={{ fontSize: 9.5, letterSpacing: '.22em', color: 'rgba(255,255,255,.4)', marginBottom: 8, ...enSt }}>主な登攀歴</div>
                  {m.climbingHistory.map((h) => (
                    <div key={h.year + h.route} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 8, padding: '6px 0', fontSize: 11, color: 'rgba(255,255,255,.85)', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                      <span style={{ color: 'rgba(255,255,255,.45)', ...enSt }}>{h.year}</span>
                      {h.targetReport?.slug ? (
                        <Link href={`/reports/${h.targetReport.slug}`} style={{ lineHeight: 1.5, color: 'rgba(255,255,255,.85)', textDecoration: 'none', ...jpSt }}>{h.route}</Link>
                      ) : (
                        <span style={{ lineHeight: 1.5, ...jpSt }}>{h.route}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
