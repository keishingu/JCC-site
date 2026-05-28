import Link from 'next/link'
import type { NewsItem } from '@/lib/microcms'

const tagLabels: Record<string, string> = {
  announcement: 'お知らせ',
  journal: '会報',
  recruit: '募集',
  field: 'FIELD',
  tech: 'TECH.',
  gear: 'GEAR',
  expedition: 'EXPEDITION',
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return iso.slice(0, 10).replace(/-/g, '.')
}

const enSt: React.CSSProperties = { fontFamily: 'var(--font-en-serif)' }
const jpSt: React.CSSProperties = { fontFamily: 'var(--font-jp)' }

export default function NewsAnnouncements({ items }: { items: NewsItem[] }) {
  return (
    <section style={{ background: 'var(--color-paper)', padding: '40px 56px 36px', borderTop: '1px solid rgba(10,22,40,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: 14, fontSize: 12, letterSpacing: '.22em', color: 'var(--color-slate)', fontWeight: 600, ...enSt }}>
            <span style={{ display: 'inline-block', width: 1, height: 12, background: 'var(--color-navy)', verticalAlign: 'middle', marginRight: 8 }}/>
            ANNOUNCEMENTS
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--color-ink)', ...jpSt }}>お知らせ</div>
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--color-slate)', lineHeight: 1.85 }}>
            会から会員・読者へ向けた<br/>公式の更新情報。
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(10,22,40,0.08)' }}>
          {items.map((n) => {
            const label = tagLabels[n.tag] ?? n.tag
            const date = formatDate(n.publishedAt)
            const inner = (
              <>
                <span style={{ fontSize: 11, letterSpacing: '.06em', color: 'var(--color-slate)', ...enSt }}>{date}</span>
                <span style={{
                  fontSize: 10.5, letterSpacing: '.04em',
                  color: n.tag === 'recruit' ? 'var(--color-navy)' : 'var(--color-ink)',
                  border: '1px solid currentColor', padding: '3px 8px',
                  justifySelf: 'start', opacity: .8, ...jpSt,
                }}>{label}</span>
                <span style={{ fontSize: 14, color: 'var(--color-ink)', ...jpSt }}>{n.title}</span>
              </>
            )
            const rowStyle: React.CSSProperties = {
              display: 'grid', gridTemplateColumns: '110px 80px 1fr 20px', alignItems: 'center', gap: 18,
              padding: '14px 4px', borderBottom: '1px solid rgba(10,22,40,0.08)',
            }
            return n.slug ? (
              <Link key={n.id} href={`/news/${n.slug}`} style={{ ...rowStyle, textDecoration: 'none', color: 'inherit' }}>
                {inner}
                <span style={{ fontSize: 12, color: '#6a7d97', textAlign: 'right', ...enSt }}>→</span>
              </Link>
            ) : (
              <div key={n.id} style={rowStyle}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
