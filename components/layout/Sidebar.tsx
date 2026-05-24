'use client'

import Link from 'next/link'

const navItems = [
  { label: 'HOME',       href: '/' },
  { label: 'ABOUT JCC',  href: null },
  { label: 'CHRONICLE',  href: '/chronicle' },
  { label: 'JOURNAL',    href: '/journal' },
  { label: 'NEWS',       href: '/news' },
  { label: 'CLIMBERS',   href: '/climbers' },
  { label: 'HISTORY',    href: null },
  { label: 'CONTACT',    href: null },
]

function SocialIcon({ name }: { name: 'ig' | 'fb' | 'mail' }) {
  if (name === 'ig') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
    </svg>
  )
  if (name === 'fb') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 7h3V3h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1z"/>
    </svg>
  )
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="5" width="18" height="14" rx="1"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  )
}

interface SidebarProps {
  variant?: 'full' | 'minimal'
  activeNav?: string
  pageLabel?: string
  pageNum?: string
  decoration?: 'mountain' | 'social'
}

export default function Sidebar({
  variant = 'minimal',
  activeNav,
  pageLabel,
  pageNum,
  decoration,
}: SidebarProps) {
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

      {variant === 'full' && (
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 8 }}>
          {navItems.map(({ label, href }) => {
            const active = label === activeNav
            return href ? (
              <Link key={label} href={href}
                style={{
                  fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
                  fontSize: 10.5, letterSpacing: '.16em', fontWeight: active ? 600 : 400,
                  color: active ? '#fff' : 'rgba(255,255,255,.62)',
                  textDecoration: 'none',
                }}>
                {label}
                {active && <span style={{ display: 'block', width: 16, height: 1, background: '#fff', marginTop: 4, opacity: .8 }}/>}
              </Link>
            ) : (
              <span key={label}
                style={{
                  fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
                  fontSize: 10.5, letterSpacing: '.16em', fontWeight: 400,
                  color: 'rgba(255,255,255,.32)',
                  cursor: 'not-allowed',
                }}>
                {label}
              </span>
            )
          })}
        </nav>
      )}

      {/* Rotated page label */}
      {pageLabel && (
        <div style={{
          position: 'absolute', left: 30, top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center',
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          fontSize: 10, letterSpacing: '.42em', color: 'rgba(255,255,255,.55)',
          whiteSpace: 'nowrap',
        }}>{pageLabel}</div>
      )}

      {pageNum && (
        <div style={{
          position: 'absolute', left: 22, top: '50%',
          marginTop: 80,
          fontSize: 11, letterSpacing: '.18em', color: 'rgba(255,255,255,.5)',
          display: 'flex', alignItems: 'center', gap: 8,
          transform: 'rotate(-90deg)', transformOrigin: 'left center',
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
        }}>
          <span style={{ width: 22, height: 1, background: 'rgba(255,255,255,.35)' }}/>
          {pageNum}
        </div>
      )}

      {/* Bottom decoration */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        {decoration === 'mountain' && (
          <svg width="72" height="34" viewBox="0 0 72 34" style={{ opacity: .55 }}>
            <path d="M2 32 L18 12 L24 18 L34 4 L48 22 L56 14 L70 32 Z" fill="none" stroke="#fff" strokeWidth=".8"/>
            <path d="M30 8 L34 4 L37 9" fill="none" stroke="#fff" strokeWidth=".6"/>
          </svg>
        )}
        {decoration === 'social' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'rgba(255,255,255,.5)' }}>
            <SocialIcon name="ig"/>
            <SocialIcon name="fb"/>
            <SocialIcon name="mail"/>
          </div>
        )}
        <div style={{
          fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          fontSize: 10, letterSpacing: '.22em', color: 'rgba(255,255,255,.42)',
          display: 'flex', alignItems: 'center', gap: 6,
          marginTop: decoration ? 8 : 0,
        }}>
          <span style={{ width: 18, height: 1, background: 'rgba(255,255,255,.35)' }}/>
          SINCE 1958
        </div>
      </div>
    </aside>
  )
}
