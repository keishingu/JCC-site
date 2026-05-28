import Link from 'next/link'
import type { Climber } from '@/lib/microcms'

function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M14 7h3V3h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1z"/>
    </svg>
  )
}

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default function ClimbersGrid({ members }: { members: Climber[] }) {
  return (
    <section style={{ background: '#fff', padding: '50px 56px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 22, letterSpacing: '.12em', fontWeight: 500, color: '#0a1628', ...enSt }}>CURRENT CLIMBERS</h2>
          <span style={{ fontSize: 13, color: '#3d5070', ...jpSt }}>現役会員</span>
        </div>
        <div style={{ fontSize: 11, letterSpacing: '.18em', color: '#3d5070', display: 'inline-flex', alignItems: 'baseline', gap: 6, ...enSt }}>
          <span style={{ fontSize: 22, color: '#0a1628', fontWeight: 500 }}>{String(members.length).padStart(2, '0')}</span>
          <span>CLIMBERS</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
        {members.map((m) => (
          <article key={m.id} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#222' }}>
              {m.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05) brightness(.95)' }}/>
              )}
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: 18, color: '#0a1628', letterSpacing: '.02em', ...jpSt }}>{m.name}</h3>
            </div>
            {m.nameEn && <div style={{ marginTop: 3, fontSize: 11, color: '#3d5070', letterSpacing: '.06em', ...enSt }}>{m.nameEn}</div>}
            {(m.birthYear || m.location) && (
              <div style={{ marginTop: 8, fontSize: 11, color: '#3d5070', lineHeight: 1.7 }}>
                {[m.birthYear && `${m.birthYear}年生まれ`, m.location && `${m.location}在住`].filter(Boolean).join('　')}
              </div>
            )}

            {m.climbingHistory && m.climbingHistory.length > 0 && (
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(10,22,40,0.08)' }}>
                <div style={{ fontSize: 9.5, letterSpacing: '.22em', color: '#3d5070', marginBottom: 8, ...enSt }}>主な登攀歴</div>
                {m.climbingHistory.map((h) => (
                  <div key={h.year + h.route} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 8, padding: '6px 0', fontSize: 11, color: '#0a1628', alignItems: 'baseline', borderBottom: '1px solid rgba(10,22,40,0.08)' }}>
                    <span style={{ color: '#3d5070', ...enSt }}>{h.year}</span>
                    {h.targetReport?.slug ? (
                      <Link href={`/reports/${h.targetReport.slug}`} style={{ lineHeight: 1.5, color: '#0a1628', textDecoration: 'none', ...jpSt }}>{h.route}</Link>
                    ) : (
                      <span style={{ lineHeight: 1.5, ...jpSt }}>{h.route}</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              {m.instagram && (
                <a href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(10,22,40,0.08)', color: '#3d5070', background: 'transparent' }}>
                  <IgIcon/>
                </a>
              )}
              {m.facebook && (
                <a href={m.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(10,22,40,0.08)', color: '#3d5070', background: 'transparent' }}>
                  <FbIcon/>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
