import Link from 'next/link'
import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'
import type { JournalIssue, NewsItem } from '@/lib/microcms'

const tagLabels: Record<string, string> = {
  announcement: 'お知らせ', journal: '会報', recruit: '募集',
  field: 'FIELD', tech: 'TECH.', gear: 'GEAR', expedition: 'EXPEDITION',
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return iso.slice(0, 10).replace(/-/g, '.')
}

function JournalCover({ issue }: { issue: JournalIssue }) {
  return (
    <div style={{ aspectRatio: '3/4', background: '#ddd', position: 'relative', overflow: 'hidden' }}>
      {issue.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={issue.coverImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          filter: 'saturate(.6) contrast(.95) brightness(.95)' }}/>
      ) : (
        <div style={{ width: '100%', height: '100%', background: '#e8e2d0' }}/>
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,.18) 0%, rgba(10,22,40,0) 40%)' }}/>
      <div style={{
        position: 'absolute', top: 8, left: 9, color: '#fff', fontWeight: 700, fontSize: 14,
        letterSpacing: '.04em', lineHeight: 1, textShadow: '0 1px 4px rgba(0,0,0,.35)',
        fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
      }}>JCC</div>
      <div style={{
        position: 'absolute', top: 8, right: 9, color: '#fff', fontSize: 6, letterSpacing: '.12em', opacity: .85,
        fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
      }}>No.{issue.issueNumber}<br/>{issue.season}</div>
    </div>
  )
}

export default function HomeTriplet({ journals, news }: { journals: JournalIssue[]; news: NewsItem[] }) {
  return (
    <section style={{
      padding: '70px 56px 50px', background: '#f3f1ea',
      display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 42,
    }}>
      {/* JOURNAL */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628',
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>JOURNAL</h2>
          <span style={{ fontSize: 13, color: '#3d5070' }}>会誌・会報</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {journals.slice(0, 4).map((j) => (
            <div key={j.id}>
              <JournalCover issue={j}/>
              <div style={{ marginTop: 10, fontSize: 12, fontWeight: 500, color: '#0a1628',
                fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>No.{j.issueNumber}</div>
              <div style={{ fontSize: 10.5, color: '#3d5070' }}>{j.season}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <ArrowLink href="/journal">すべての会誌を見る</ArrowLink>
        </div>
      </div>

      {/* NEWS */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628',
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>NEWS</h2>
          <span style={{ fontSize: 13, color: '#3d5070' }}>お知らせ・Field Notes</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {news.slice(0, 5).map((n, i) => (
            <Link key={n.id} href={`/news/${n.slug}`} style={{
              display: 'grid', gridTemplateColumns: '76px 56px 1fr', alignItems: 'center', gap: 10,
              padding: '12px 2px', borderBottom: i === 4 ? 'none' : '1px solid rgba(10,22,40,0.08)',
              textDecoration: 'none', color: 'inherit',
            }}>
              <span style={{ fontSize: 10.5, letterSpacing: '.04em', color: '#3d5070',
                fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>{formatDate(n.publishedAt)}</span>
              <span style={{
                fontSize: 9, letterSpacing: '.12em', color: '#16263f',
                border: '1px solid rgba(10,22,40,0.08)', padding: '3px 6px',
                textAlign: 'center', justifySelf: 'start',
                fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
              }}>{tagLabels[n.tag] ?? n.tag}</span>
              <span style={{ fontSize: 12.5, lineHeight: 1.45, color: '#0a1628',
                fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>{n.title}</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <ArrowLink href="/news">すべてのお知らせ・記事を見る</ArrowLink>
        </div>
      </div>

      {/* CLIMBERS */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628',
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>CLIMBERS</h2>
          <span style={{ fontSize: 13, color: '#3d5070' }}>会員紹介</span>
        </div>
        <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.alpineTraverse} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) contrast(.95)' }}/>
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 14, color: '#0a1628', fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>会員紹介</div>
          <div style={{ fontSize: 11.5, color: '#3d5070', lineHeight: 1.7, marginTop: 4 }}>JCCの活動を支える会員たちの紹介です。</div>
        </div>
        <div style={{ marginTop: 16 }}>
          <ArrowLink href="/climbers">詳しく見る</ArrowLink>
        </div>
      </div>
    </section>
  )
}
