'use client'

import Link from 'next/link'
import { photos } from '@/lib/photos'

function NotebookTopoSketch() {
  return (
    <svg viewBox="0 0 320 360" style={{ width: '100%', height: '100%' }}>
      <g stroke="#2a2418" fill="none" strokeWidth=".6" opacity=".82">
        <text x="0" y="14" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="18" fill="#2a2418" stroke="none">Polar Circus</text>
        <line x1="0" y1="22" x2="220" y2="22" strokeWidth=".4"/>
        <g fontFamily="Cormorant Garamond, serif" fill="#2a2418" stroke="none" fontSize="9" opacity=".85">
          <text x="0" y="46">• ascent dak buoey</text>
          <text x="0" y="60">• schiv asn-jic</text>
          <text x="0" y="74">  hauld dee 6 fortong</text>
          <text x="0" y="88">  asurik · ona-</text>
          <text x="0" y="105">— Three bouts —</text>
          <text x="0" y="118">• Rena rasta in itle bia</text>
          <text x="0" y="130">  doft tinte.</text>
          <text x="0" y="143">• Suite, like dell trolt,</text>
          <text x="0" y="156">  about doe bost. taken</text>
          <text x="0" y="169">• Tail Lonig.</text>
          <text x="0" y="182">• Coming dop.</text>
        </g>
        <g transform="translate(180,28)">
          <path d="M0 200 Q40 140 70 100 T130 30"/>
          <path d="M10 210 Q50 160 80 110 T140 35"/>
          <circle cx="70" cy="100" r="2" fill="#2a2418" stroke="none"/>
          <circle cx="100" cy="60" r="2" fill="#2a2418" stroke="none"/>
          <text x="76" y="98" fontFamily="Cormorant Garamond, serif" fontSize="7" fill="#2a2418" stroke="none">P1</text>
          <text x="106" y="58" fontFamily="Cormorant Garamond, serif" fontSize="7" fill="#2a2418" stroke="none">P2</text>
        </g>
      </g>
    </svg>
  )
}

function NotebookPanel() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#1a2940' }}>
      <div style={{
        position: 'absolute', left: 22, top: 36, right: 22, bottom: 36,
        background: 'linear-gradient(180deg, #e9e0c6 0%, #d9cfb1 100%)',
        boxShadow: '0 30px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(0,0,0,.15)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 38, transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,.32), rgba(0,0,0,0) 70%)', pointerEvents: 'none' }}/>
        <div style={{ padding: '28px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,.18)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.cirqueDusk} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }}/>
          </div>
        </div>
        <div style={{ padding: '24px 28px', position: 'relative' }}>
          <NotebookTopoSketch/>
        </div>
      </div>
    </div>
  )
}

export default function ChronicleDetail() {
  return (
    <section style={{ background: 'var(--color-navy)', color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1.25fr', minHeight: 480 }}>
      <div style={{ padding: '40px 50px 50px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          color: 'rgba(255,255,255,.7)', fontSize: 11.5, letterSpacing: '.16em', marginBottom: 26,
          fontFamily: 'var(--font-en-serif)',
        }}>
          <span style={{ width: 22, height: 1, background: 'rgba(255,255,255,.6)' }}/>FEATURED
        </div>
        <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '.04em',
          fontFamily: 'var(--font-en-serif)' }}>2025</div>
        <h2 style={{ margin: '8px 0 10px', fontSize: 28, lineHeight: 1.35, fontWeight: 500,
          fontFamily: 'var(--font-jp)' }}>ポーラーサーカス登攀記</h2>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,.78)', letterSpacing: '.04em',
          fontFamily: 'var(--font-en-serif)' }}>Polar Circus, Greenland</div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 500, fontFamily: 'var(--font-en-serif)' }}>K. Sasaki</div>
          <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.7)' }}>2025年4月　グリーンランド・ポーラーサーカス</div>
        </div>
        <div style={{ marginTop: 10, display: 'inline-block', fontSize: 10.5, padding: '4px 10px', border: '1px solid rgba(255,255,255,.25)', color: 'rgba(255,255,255,.88)' }}>海外・極地</div>
        <p style={{ marginTop: 30, fontSize: 12.5, lineHeight: 1.95, color: 'rgba(255,255,255,.85)', maxWidth: 360 }}>
          長年の夢だったポーラーサーカス。厳冬期のグリーンランドで、<br/>氷と風と静寂の中、私たちは何を見たのか。<br/>アプローチから登攀、ビバーク、そして下山までの記録。
        </p>
        <Link href="/reports/polar-circus" style={{
          marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '10px 18px', border: '1px solid rgba(255,255,255,.25)', color: '#fff',
          fontSize: 12, cursor: 'pointer', textDecoration: 'none',
        }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 1h7l3 3v11H2z"/><path d="M9 1v3h3"/>
          </svg>
          記録を読む
        </Link>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <NotebookPanel/>
      </div>
    </section>
  )
}
