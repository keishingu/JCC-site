import Link from 'next/link'

function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 7h3V3h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1z"/>
    </svg>
  )
}

export default function Footer({ noTopRule }: { noTopRule?: boolean }) {
  return (
    <footer style={{
      position: 'relative',
      background: 'var(--color-navy)',
      color: '#fff',
      padding: '34px 50px 46px 50px',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      borderTop: noTopRule ? 'none' : '1px solid rgba(255,255,255,.06)',
    }}>
      <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontFamily: 'var(--font-en-sans)', fontWeight: 600, fontSize: 22, letterSpacing: '.04em', lineHeight: 1 }}>JCC</div>
          <div style={{ fontFamily: 'var(--font-en-sans)', fontSize: 8, lineHeight: 1.4, marginTop: 6, letterSpacing: '.14em', color: 'rgba(255,255,255,.72)' }}>
            JAPAN<br/>CLIMBERS<br/>CLUB
          </div>
        </Link>
        <div style={{ fontSize: 11, lineHeight: 1.85, color: 'rgba(255,255,255,.78)', marginLeft: 18, paddingTop: 2 }}>
          <div style={{ marginBottom: 2 }}>日本クライマースクラブ</div>
          <div>〒162-0824 東京都新宿区揚場町2-24 新陽堂ビル2F</div>
          <div style={{ fontFamily: 'var(--font-en-serif)' }}>contact@japan-climbers-club.com</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, fontSize: 11, color: 'rgba(255,255,255,.78)' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>お問い合わせ</a>
        <span style={{ opacity: .3 }}>|</span>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>プライバシーポリシー</a>
        <span style={{ opacity: .3 }}>|</span>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>サイトマップ</a>
        <div style={{ display: 'flex', gap: 10, marginLeft: 8, color: 'rgba(255,255,255,.85)' }}>
          <IgIcon/><FbIcon/>
        </div>
      </div>
      <div style={{
        position: 'absolute', right: 50, bottom: 12,
        fontFamily: 'var(--font-en-sans)',
        fontSize: 10, color: 'rgba(255,255,255,.5)', letterSpacing: '.06em',
      }}>
        © Japan Climbers Club. All Rights Reserved.
      </div>
    </footer>
  )
}
