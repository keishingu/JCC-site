import Link from 'next/link'
import { newsItems } from '@/lib/data/news'

const announcementTags = ['お知らせ', '会報', '募集'] as const
const items = newsItems
  .filter((n) => (announcementTags as readonly string[]).includes(n.tag))
  .map((n) => ({
    tag: n.tag,
    date: n.date,
    title: n.title,
    href: n.href ?? null,
  }))

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default function NewsAnnouncements() {
  return (
    <section style={{ background: '#f3f1ea', padding: '40px 56px 36px', borderTop: '1px solid rgba(10,22,40,0.08)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: 14, fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, ...enSt }}>
            <span style={{ display: 'inline-block', width: 1, height: 12, background: '#16263f', verticalAlign: 'middle', marginRight: 8 }}/>
            ANNOUNCEMENTS
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.5, color: '#0a1628', ...jpSt }}>お知らせ</div>
          <div style={{ marginTop: 8, fontSize: 11, color: '#3d5070', lineHeight: 1.85 }}>
            会から会員・読者へ向けた<br/>公式の更新情報。
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(10,22,40,0.08)' }}>
          {items.map((n, i) =>
            n.href ? (
              <Link key={i} href={n.href} style={{
                display: 'grid', gridTemplateColumns: '110px 80px 1fr 20px', alignItems: 'center', gap: 18,
                padding: '14px 4px', borderBottom: '1px solid rgba(10,22,40,0.08)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <span style={{ fontSize: 11, letterSpacing: '.06em', color: '#3d5070', ...enSt }}>{n.date}</span>
                <span style={{
                  fontSize: 10.5, letterSpacing: '.04em',
                  color: n.tag === '募集' ? '#16263f' : '#0a1628',
                  border: '1px solid currentColor', padding: '3px 8px',
                  justifySelf: 'start', opacity: .8, ...jpSt,
                }}>{n.tag}</span>
                <span style={{ fontSize: 14, color: '#0a1628', ...jpSt }}>{n.title}</span>
                <span style={{ fontSize: 12, color: '#6a7d97', textAlign: 'right', ...enSt }}>→</span>
              </Link>
            ) : (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '110px 80px 1fr 20px', alignItems: 'center', gap: 18,
                padding: '14px 4px', borderBottom: '1px solid rgba(10,22,40,0.08)',
              }}>
                <span style={{ fontSize: 11, letterSpacing: '.06em', color: '#3d5070', ...enSt }}>{n.date}</span>
                <span style={{
                  fontSize: 10.5, letterSpacing: '.04em', color: '#0a1628',
                  border: '1px solid currentColor', padding: '3px 8px',
                  justifySelf: 'start', opacity: .8, ...jpSt,
                }}>{n.tag}</span>
                <span style={{ fontSize: 14, color: '#0a1628', ...jpSt }}>{n.title}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
