import Link from 'next/link'
import TopNav from '../layout/TopNav'
import { photos } from '@/lib/photos'
import type { NewsItem, SiteSettings } from '@/lib/microcms'

function formatDate(iso?: string) {
  if (!iso) return ''
  return iso.slice(0, 10).replace(/-/g, '.')
}

const tagLabels: Record<string, string> = {
  announcement: 'お知らせ', journal: '会報', recruit: '募集',
  field: 'FIELD', tech: 'TECH.', gear: 'GEAR', expedition: 'EXPEDITION',
}

export default function HomeHero({ recentNews, settings }: { recentNews: NewsItem[]; settings: SiteSettings }) {
  const heroSrc = settings.topImage?.url ?? photos.heroIce
  const caption = settings.topImageCaption ?? '烏帽子沢奥壁 大氷柱へ向かう谷垣会員'
  return (
    <section style={{ position: 'relative', height: 720, overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={heroSrc} alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '50% 55%',
          filter: 'saturate(.75) contrast(1.02) brightness(.96)',
        }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(220,228,238,.45) 0%, rgba(220,228,238,.0) 38%, rgba(10,22,40,.0) 60%, rgba(10,22,40,.55) 100%)' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(220,228,238,.55) 0%, rgba(220,228,238,.05) 38%, rgba(220,228,238,0) 60%)' }}/>

      <TopNav active="HOME"/>

      {/* Title */}
      <div style={{ position: 'absolute', left: 56, top: 180, color: '#0a1628', maxWidth: 540 }}>
        <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.25, letterSpacing: '.05em', fontWeight: 500,
          fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>
          日本クライマースクラブ
        </h1>
        <div style={{ marginTop: 16, fontSize: 22, letterSpacing: '.18em', fontWeight: 400, color: '#16263f',
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>
          JAPAN CLIMBERS CLUB
        </div>
        <div style={{ marginTop: 10, fontSize: 16, letterSpacing: '.22em', fontWeight: 300, color: '#3d5070',
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>
          Since 1958
        </div>
        <div style={{ marginTop: 60, fontSize: 13.5, letterSpacing: '.22em', color: '#3d5070', lineHeight: 2.0,
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>
          Rock. Snow. Ice.<br/>
          And the spirit to face them.
        </div>
      </div>

      {/* Caption */}
      <div style={{
        position: 'absolute', left: 56, bottom: 28,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,.85)', fontSize: 10.5, letterSpacing: '.04em',
        textShadow: '0 1px 2px rgba(0,0,0,.4)',
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: .85 }}>
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8h.01M11 12h1v5h1"/>
        </svg>
        <span style={{ fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif', fontWeight: 400 }}>
          {caption}
        </span>
      </div>

      {/* NEWS box */}
      {recentNews.length > 0 && (
        <div style={{ position: 'absolute', right: 60, bottom: 58, width: 360 }}>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#fff', marginBottom: 14, opacity: .92,
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif', textTransform: 'uppercase', fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: 18, height: 1, background: '#fff', verticalAlign: 'middle', marginRight: 10, transform: 'translateY(-2px)' }}/>
            NEWS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: '#fff', fontSize: 12.5, lineHeight: 1.55 }}>
            {recentNews.map((n) => (
              <Link key={n.id} href={`/news/${n.slug}`} style={{
                display: 'flex', gap: 18, color: '#fff', textDecoration: 'none',
                paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,.18)',
              }}>
                <span style={{ flex: '0 0 auto', opacity: .82, letterSpacing: '.04em',
                  fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>{formatDate(n.publishedAt)}</span>
                <span style={{ opacity: .98 }}>{n.title}</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <Link href="/news" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, color: '#fff',
              textDecoration: 'none', fontSize: 11.5, letterSpacing: '.18em', fontWeight: 500,
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}>
              <span style={{ width: 22, height: 1, background: '#fff' }}/>VIEW ALL
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
