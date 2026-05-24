import { photos } from '@/lib/photos'

function TopoSketch() {
  return (
    <svg viewBox="0 0 200 270" style={{ width: '100%', height: '100%', background: '#ebe5d4' }}>
      <g stroke="#3a3528" fill="none" strokeWidth=".7" opacity=".85">
        <path d="M30 250 Q60 180 80 150 T120 80 L130 40"/>
        <path d="M30 250 Q70 200 100 170 T150 90 L160 60"/>
        <circle cx="155" cy="48" r="2" fill="#3a3528" stroke="none"/>
        <text x="14" y="20" fontSize="6" fill="#3a3528" fontFamily="serif" stroke="none">JCC No.303</text>
      </g>
    </svg>
  )
}

function JournalCoverLarge({ no, date, cover, sepia, mono, topo }: {
  no: string; date: string; cover?: string; sepia?: boolean; mono?: boolean; topo?: boolean
}) {
  return (
    <div style={{ aspectRatio: '3/4', background: '#ddd', position: 'relative', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.06)' }}>
      {topo ? (
        <div style={{ width: '100%', height: '100%', background: '#e8e2d0' }}><TopoSketch/></div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          filter: sepia ? 'sepia(.5) contrast(.95) brightness(.95)'
                : mono  ? 'grayscale(1) contrast(1.05)'
                : 'saturate(.6) contrast(.95) brightness(.95)' }}/>
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
      }}>No.{no}<br/>{date}</div>
    </div>
  )
}

const issues = [
  { no: '312', date: '2025 春号', cover: photos.frostPinnacle },
  { no: '311', date: '2024 冬号', cover: photos.iceMassive },
  { no: '310', date: '2024 秋号', cover: photos.bugaboos, sepia: true },
  { no: '309', date: '2024 夏号', cover: photos.snowRidge, mono: true },
  { no: '308', date: '2023 冬号', cover: photos.cirqueDusk },
  { no: '307', date: '2023 秋号', cover: photos.alpineTraverse },
  { no: '306', date: '2023 夏号', cover: photos.icefallWall },
  { no: '305', date: '2022 冬号', cover: photos.iceSilhouette },
  { no: '304', date: '2022 秋号', cover: photos.peakBW },
  { no: '303', date: '2022 夏号', cover: undefined, topo: true },
]

const tags = ['冬壁','谷川岳','ヒマラヤ','沢登り','アルパイン','遠征','岩場','縦走','クライミング','海外','装備・技術','遭難・雪崩','その他']

export default function JournalGrid() {
  return (
    <section style={{ background: '#f7f5ee', padding: '36px 56px 50px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 36 }}>
      {/* Filter rail */}
      <aside>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, color: '#0a1628' }}>
          <span style={{ fontSize: 13, letterSpacing: '.22em', fontWeight: 500,
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>FILTER</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3 6h18M6 12h12M10 18h4"/>
          </svg>
        </div>
        {['年代', 'エリア', 'スタイル', '執筆者'].map((label) => (
          <div key={label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 10px', borderBottom: '1px solid rgba(10,22,40,0.08)',
            fontSize: 12.5, color: '#0a1628',
            fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif',
          }}>
            {label}
            <svg width="9" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#3d5070" strokeWidth="1.2"/></svg>
          </div>
        ))}
        <div style={{ marginTop: 22, fontSize: 12.5, color: '#0a1628', marginBottom: 10,
          fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>キーワード</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map((t) => (
            <span key={t} style={{
              fontSize: 11, padding: '4px 10px', border: '1px solid rgba(10,22,40,0.08)',
              color: '#3d5070', background: 'rgba(255,255,255,.4)',
            }}>{t}</span>
          ))}
        </div>
        <button style={{
          marginTop: 22, background: 'transparent', border: 'none', cursor: 'pointer',
          fontSize: 11, letterSpacing: '.16em', color: '#3d5070',
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: 0,
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>
          </svg>
          リセット
        </button>
      </aside>

      {/* Covers grid */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ fontSize: 15, color: '#0a1628', fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>
            全 <span style={{ fontSize: 22, fontWeight: 500, margin: '0 4px', fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>68</span> 冊
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#3d5070' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0a1628', fontWeight: 500,
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="1" width="6" height="6"/><rect x="9" y="1" width="6" height="6"/><rect x="1" y="9" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/></svg>
              Grid
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="14" height="2"/><rect x="1" y="7" width="14" height="2"/><rect x="1" y="12" width="14" height="2"/></svg>
              List
            </span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18, rowGap: 26 }}>
          {issues.map((issue) => (
            <div key={issue.no}>
              <JournalCoverLarge {...issue}/>
              <div style={{ marginTop: 10, fontSize: 13, color: '#0a1628', fontWeight: 500,
                fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>No.{issue.no}</div>
              <div style={{ fontSize: 11.5, color: '#3d5070' }}>{issue.date}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <button style={{
            background: 'transparent', border: '1px solid rgba(10,22,40,0.08)',
            padding: '12px 38px', fontSize: 13, color: '#0a1628',
            display: 'inline-flex', alignItems: 'center', gap: 14, cursor: 'pointer',
            fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif',
          }}>
            さらに読み込む
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
