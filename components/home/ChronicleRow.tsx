import Link from 'next/link'
import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'

function TopoSketch() {
  return (
    <svg viewBox="0 0 200 270" style={{ width: '100%', height: '100%', background: '#ebe5d4' }}>
      <g stroke="#3a3528" fill="none" strokeWidth=".7" opacity=".85">
        <path d="M30 250 Q60 180 80 150 T120 80 L130 40"/>
        <path d="M30 250 Q70 200 100 170 T150 90 L160 60"/>
        <path d="M50 250 Q80 210 110 180 T160 110"/>
        <path d="M120 80 L135 70 L145 60 M140 60 L150 50 L156 45"/>
        <path d="M80 150 L70 140 M90 140 L80 130 M100 130 L90 120"/>
        <text x="40" y="245" fontSize="6" fill="#3a3528" fontFamily="serif" stroke="none">approach</text>
        <text x="100" y="170" fontSize="6" fill="#3a3528" fontFamily="serif" stroke="none">crux 5.9</text>
        <text x="130" y="55" fontSize="7" fill="#3a3528" fontFamily="serif" stroke="none" fontStyle="italic">North Face</text>
        <text x="14" y="20" fontSize="6" fill="#3a3528" fontFamily="serif" stroke="none">Mt. Harinoki  1963</text>
        <circle cx="155" cy="48" r="2" fill="#3a3528" stroke="none"/>
        <path d="M150 240 L155 245 L160 240 L155 235 Z" opacity=".5"/>
        <text x="165" y="246" fontSize="5" fill="#3a3528" fontFamily="serif" stroke="none">N</text>
      </g>
    </svg>
  )
}

const records = [
  { yr: '2025', jp: 'ポーラーサーカス登攀記',   author: 'K. Sasaki',   en: 'Polar Circus, Greenland',     img: photos.iceMassive,     href: '/chronicle/polar-circus' },
  { yr: '1991', jp: 'ヒマラヤ・シシャパンマ遠征', author: 'T. Katsube',  en: 'Shishapangma West Face',      img: photos.frostPinnacle,  href: '/chronicle' },
  { yr: '1985', jp: '谷川岳 一ノ倉沢 東壁',      author: 'H. Yokoyama', en: 'Ichinokura, Tanigawa-dake',   img: photos.peakBW,         href: '/chronicle', mono: true },
  { yr: '1977', jp: '剱岳 北壁 冬期単独行',       author: 'J. Furukawa', en: 'Mt. Tsurugi North Face',      img: photos.cirqueDusk,     href: '/chronicle' },
  { yr: '1963', jp: '後立山連峰 針ノ木岳 北壁',   author: 'K. Narita',   en: 'Mt. Harinoki North Face',     img: null,                  href: '/chronicle', topo: true },
]

export default function HomeChronicleRow() {
  return (
    <section style={{
      background: '#f7f5ee', padding: '70px 56px 80px',
      borderTop: '1px solid rgba(10,22,40,0.08)', borderBottom: '1px solid rgba(10,22,40,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628',
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>CHRONICLE</h2>
          <span style={{ fontSize: 13, color: '#3d5070', letterSpacing: '.08em' }}>登攀記録アーカイブ</span>
        </div>
        <ArrowLink href="/chronicle">すべての記録を見る</ArrowLink>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
        {records.map((r) => (
          <Link key={r.yr} href={r.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '1/1', background: r.topo ? '#e8e2d0' : '#222', overflow: 'hidden', position: 'relative' }}>
              {r.topo ? <TopoSketch/> : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.img!} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: (r as {mono?: boolean}).mono ? 'grayscale(1) contrast(1.05)' : 'saturate(.65) contrast(.95)' }}/>
              )}
            </div>
            <div style={{ marginTop: 14, fontSize: 18, letterSpacing: '.04em', fontWeight: 500, color: '#0a1628',
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>{r.yr}</div>
            <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.45, color: '#0a1628',
              fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }}>{r.jp}</div>
            <div style={{ marginTop: 6, fontSize: 11, color: '#3d5070', letterSpacing: '.06em',
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>{r.author}</div>
            <div style={{ marginTop: 2, fontSize: 10.5, color: '#6a7d97', letterSpacing: '.06em',
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }}>{r.en}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
