import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside
      className="flex-none flex flex-col relative border-r"
      style={{
        width: 116,
        background: '#16263f',
        color: '#fff',
        padding: '28px 22px',
        borderColor: 'rgba(255,255,255,0.04)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="block mb-9 no-underline" style={{ color: 'inherit' }}>
        <div style={{ fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif', fontWeight: 700, fontSize: 26, letterSpacing: '.04em', lineHeight: 1 }}>JCC</div>
        <div style={{ fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif', fontSize: 8.5, lineHeight: 1.35, marginTop: 8, letterSpacing: '.14em', color: 'rgba(255,255,255,.72)' }}>
          JAPAN<br/>CLIMBERS<br/>CLUB
        </div>
      </Link>

      {/* Bottom */}
      <div style={{ marginTop: 'auto' }}>
        <div style={{
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          fontSize: 10, letterSpacing: '.22em', color: 'rgba(255,255,255,.42)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 18, height: 1, background: 'rgba(255,255,255,.35)' }}/>
          SINCE 1958
        </div>
      </div>
    </aside>
  )
}
