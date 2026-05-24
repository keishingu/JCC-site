import Link from 'next/link'
import { photos } from '@/lib/photos'

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

function JournalCoverLarge({ no, date, cover }: { no: string; date: string; cover: string }) {
  return (
    <div style={{ aspectRatio: '3/4', background: '#ddd', position: 'relative', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6) contrast(.95) brightness(.95)' }}/>
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
      }}>No.{no}<br/>{date}</div>
    </div>
  )
}

const toc = [
  ['004', 'グリーンランドの氷壁へ',           '笹木 克彦', '/chronicle/polar-circus'],
  ['014', 'Polar Circus 登攀記（前編）',       '笹木 克彦', '/chronicle/polar-circus'],
  ['042', 'Polar Circus 登攀記（後編）',       '笹木 克彦', '/chronicle/polar-circus'],
  ['072', '氷壁の世界と技術',                  '佐藤 翔',   null],
  ['096', '会員近況・山行報告',                '',          null],
  ['112', 'Book Review・装備レポート',         '',          null],
  ['124', 'JCCニュース・編集後記',             '',          null],
]

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default function JournalLatest() {
  return (
    <>
      {/* Latest issue detail */}
      <section style={{
        background: '#f3f1ea', padding: '50px 56px 50px',
        display: 'grid', gridTemplateColumns: '260px 1.2fr 1fr 200px', gap: 28, alignItems: 'flex-start',
        borderTop: '1px solid rgba(10,22,40,0.08)',
      }}>
        <div>
          <JournalCoverLarge no="312" date="2025 Spring" cover={photos.frostPinnacle}/>
        </div>
        <div>
          <div style={{ display: 'inline-block', padding: '5px 12px', background: '#16263f', color: '#fff', fontSize: 11, letterSpacing: '.18em', ...enSt }}>最新号</div>
          <div style={{ marginTop: 14, fontSize: 50, fontWeight: 500, letterSpacing: '.02em', lineHeight: 1, color: '#0a1628', ...enSt }}>No.312</div>
          <div style={{ marginTop: 8, fontSize: 22, color: '#0a1628', ...jpSt }}>2025 春号</div>
          <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, fontSize: 12, color: '#3d5070' }}>
            <div>
              <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>発行日</div>
              <div style={enSt}>2025年4月15日</div>
            </div>
            <div>
              <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>ページ数</div>
              <div style={enSt}>128ページ</div>
            </div>
          </div>
          <div style={{ marginTop: 18, fontSize: 12, color: '#3d5070' }}>
            <div style={{ color: '#0a1628', marginBottom: 4, ...jpSt }}>特集</div>
            ポーラーサーカス登攀記
          </div>
          <div style={{ marginTop: 26, display: 'flex', gap: 10 }}>
            <button style={{
              background: '#16263f', color: '#fff', border: 'none',
              padding: '12px 18px', fontSize: 12, letterSpacing: '.08em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 1h7l3 3v11H2z"/><path d="M9 1v3h3"/>
              </svg>
              PDFで読む (28MB)
            </button>
            <button style={{
              background: 'transparent', color: '#0a1628', border: '1px solid rgba(10,22,40,0.08)',
              padding: '12px 18px', fontSize: 12, letterSpacing: '.08em', cursor: 'pointer',
            }}>目次を見る</button>
          </div>
        </div>

        {/* TOC */}
        <div>
          <div style={{ fontSize: 13, color: '#0a1628', ...jpSt }}>特集：ポーラーサーカス登攀記</div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
            {toc.map(([pg, title, by, href]) => (
              href ? (
                <Link key={pg} href={href} style={{
                  display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 12,
                  padding: '9px 0', borderBottom: '1px solid rgba(10,22,40,0.08)',
                  fontSize: 12, color: '#0a1628', alignItems: 'baseline', textDecoration: 'none',
                }}>
                  <span style={{ color: '#3d5070', ...enSt }}>{pg}</span>
                  <span style={jpSt}>{title}</span>
                  <span style={{ fontSize: 11, color: '#3d5070' }}>{by}</span>
                </Link>
              ) : (
                <div key={pg} style={{
                  display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 12,
                  padding: '9px 0', borderBottom: '1px solid rgba(10,22,40,0.08)',
                  fontSize: 12, color: '#0a1628', alignItems: 'baseline',
                }}>
                  <span style={{ color: '#3d5070', ...enSt }}>{pg}</span>
                  <span style={jpSt}>{title}</span>
                  <span style={{ fontSize: 11, color: '#3d5070' }}>{by}</span>
                </div>
              )
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/chronicle/polar-circus" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14, color: '#0a1628', textDecoration: 'none',
              fontWeight: 500, fontSize: 12, letterSpacing: '.14em', ...enSt,
            }}>
              <span style={{ width: 26, height: 1, background: '#0a1628', opacity: .7 }}/>
              この号の全目次を見る
            </Link>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.icefallWall} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6)' }}/>
          </div>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.snowRidge} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6)' }}/>
          </div>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#e8e2d0' }}>
            <TopoSketch/>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.snowRidge} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.4) brightness(.65) contrast(1.05)' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,.35)' }}/>
        <div style={{ position: 'absolute', left: 56, top: 70, color: '#fff', maxWidth: 700 }}>
          <div style={{ fontSize: 26, lineHeight: 1.7, letterSpacing: '.04em', ...jpSt }}>
            「山は、登るためだけにあるのではない。<br/>
            そこに立つことで、何かが見えてくる。」
          </div>
          <div style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,.78)', letterSpacing: '.08em', ...enSt }}>
            —— JCC会誌 No.182（1978年）より
          </div>
        </div>
      </section>
    </>
  )
}
