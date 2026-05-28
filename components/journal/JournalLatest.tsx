import Link from 'next/link'
import type { JournalIssue } from '@/lib/microcms'

function TopoSketch() {
  return (
    <svg viewBox="0 0 200 270" style={{ width: '100%', height: '100%', background: '#ebe5d4' }}>
      <g stroke="#3a3528" fill="none" strokeWidth=".7" opacity=".85">
        <path d="M30 250 Q60 180 80 150 T120 80 L130 40"/>
        <path d="M30 250 Q70 200 100 170 T150 90 L160 60"/>
        <circle cx="155" cy="48" r="2" fill="#3a3528" stroke="none"/>
      </g>
    </svg>
  )
}

function JournalCoverLarge({ issue }: { issue: JournalIssue }) {
  return (
    <div style={{ aspectRatio: '3/4', background: '#ddd', position: 'relative', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>
      {issue.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={issue.coverImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6) contrast(.95) brightness(.95)' }}/>
      ) : (
        <TopoSketch/>
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,.20) 0%, rgba(10,22,40,0) 35%)' }}/>
      <div style={{
        position: 'absolute', top: 10, left: 12, color: '#fff', fontWeight: 700, fontSize: 22,
        letterSpacing: '.04em', lineHeight: 1, textShadow: '0 1px 4px rgba(0,0,0,.4)',
        fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
      }}>JCC</div>
      <div style={{
        position: 'absolute', top: 12, right: 11, color: 'rgba(255,255,255,.92)', fontSize: 7,
        letterSpacing: '.12em', textAlign: 'right',
        fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
      }}>No.{issue.issueNumber}<br/>{issue.season}</div>
    </div>
  )
}

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default function JournalLatest({ latestIssue }: { latestIssue: JournalIssue | null }) {
  if (!latestIssue) return null

  const publishedAt = latestIssue.publishedAt
    ? new Date(latestIssue.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <>
      {/* Latest issue detail */}
      <section style={{
        background: '#f3f1ea', padding: '50px 56px 50px',
        display: 'grid', gridTemplateColumns: '260px 1.2fr 1fr 200px', gap: 28, alignItems: 'flex-start',
        borderTop: '1px solid rgba(10,22,40,0.08)',
      }}>
        <div>
          <JournalCoverLarge issue={latestIssue}/>
        </div>
        <div>
          <div style={{ display: 'inline-block', padding: '5px 12px', background: '#16263f', color: '#fff', fontSize: 11, letterSpacing: '.18em', ...enSt }}>最新号</div>
          <div style={{ marginTop: 14, fontSize: 50, fontWeight: 500, letterSpacing: '.02em', lineHeight: 1, color: '#0a1628', ...enSt }}>No.{latestIssue.issueNumber}</div>
          <div style={{ marginTop: 8, fontSize: 22, color: '#0a1628', ...jpSt }}>{latestIssue.season}</div>
          <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 12, color: '#3d5070' }}>
            {publishedAt && (
              <div>
                <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>発行日</div>
                <div style={enSt}>{publishedAt}</div>
              </div>
            )}
            {latestIssue.pageCount && (
              <div>
                <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>ページ数</div>
                <div style={enSt}>{latestIssue.pageCount}ページ</div>
              </div>
            )}
          </div>
          {latestIssue.feature && (
            <div style={{ marginTop: 18, fontSize: 12, color: '#3d5070' }}>
              <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>特集</div>
              {latestIssue.feature}
            </div>
          )}
          <div style={{ marginTop: 26, display: 'flex', gap: 10 }}>
            {latestIssue.pdfFile && (
              <a href={latestIssue.pdfFile.url} target="_blank" rel="noopener noreferrer" style={{
                background: '#16263f', color: '#fff', border: 'none',
                padding: '12px 18px', fontSize: 12, letterSpacing: '.08em', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
              }}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M2 1h7l3 3v11H2z"/><path d="M9 1v3h3"/>
                </svg>
                PDFで読む
              </a>
            )}
            <button style={{
              background: 'transparent', color: '#0a1628', border: '1px solid rgba(10,22,40,0.08)',
              padding: '12px 18px', fontSize: 12, letterSpacing: '.08em', cursor: 'pointer',
            }}>目次を見る</button>
          </div>
        </div>

        {/* TOC */}
        {latestIssue.toc && latestIssue.toc.length > 0 && (
          <div>
            {latestIssue.feature && (
              <div style={{ fontSize: 13, color: '#0a1628', ...jpSt }}>特集：{latestIssue.feature}</div>
            )}
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
              {latestIssue.toc.map((entry, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 12,
                  padding: '9px 0', borderBottom: '1px solid rgba(10,22,40,0.08)',
                  fontSize: 12, color: '#0a1628', alignItems: 'baseline',
                }}>
                  <span style={{ color: '#3d5070', ...enSt }}>{entry.page}</span>
                  <span style={jpSt}>{entry.title}</span>
                  <span style={{ fontSize: 11, color: '#3d5070' }}>{entry.author}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Thumbnails from photos array */}
        {latestIssue.photos && latestIssue.photos.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {latestIssue.photos.slice(0, 3).map((p, i) => (
              <div key={i} style={{ aspectRatio: i === 0 ? '4/5' : '4/3', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image.url} alt={p.caption ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6)' }}/>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Quote band */}
      {latestIssue.heroImage && (
        <section style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={latestIssue.heroImage.url} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.4) brightness(.65) contrast(1.05)' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,.35)' }}/>
        </section>
      )}
    </>
  )
}
