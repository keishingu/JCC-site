'use client'

import Link from 'next/link'

const navItems = [
  { label: 'HOME',       href: '/' },
  { label: 'ABOUT JCC',  href: null },
  { label: 'REPORTS',  href: '/reports' },
  { label: 'JOURNAL',    href: '/journal' },
  { label: 'NEWS',       href: '/news' },
  { label: 'CLIMBERS',   href: '/climbers' },
  { label: 'HISTORY',    href: null },
  { label: 'CONTACT',    href: null },
]

interface TopNavProps {
  active?: string
  onWhite?: boolean
}

export default function TopNav({ active, onWhite = false }: TopNavProps) {
  const text     = onWhite ? 'var(--color-ink)' : '#fff'
  const dim      = onWhite ? 'var(--color-slate)' : 'rgba(255,255,255,.7)'
  const disabled = onWhite ? 'rgba(10,22,40,.35)' : 'rgba(255,255,255,.4)'

  return (
    <nav style={{
      position: 'absolute', top: 30, left: 0, right: 30, zIndex: 5,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 38,
      paddingLeft: 60, paddingRight: 60,
    }}>
      {navItems.map(({ label, href }) => {
        const isActive = label === active
        return href ? (
          <Link key={label} href={href}
            style={{
              fontFamily: 'var(--font-en-sans)',
              fontSize: 11.5, letterSpacing: '.18em', fontWeight: isActive ? 500 : 400,
              color: isActive ? text : dim,
              textDecoration: 'none', position: 'relative', paddingBottom: 4,
              whiteSpace: 'nowrap',
            }}>
            {label}
            {isActive && (
              <span style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)',
                width: 18, height: 1, background: text, opacity: .85 }}/>
            )}
          </Link>
        ) : (
          <span key={label} style={{
            fontFamily: 'var(--font-en-sans)',
            fontSize: 11.5, letterSpacing: '.18em', fontWeight: 400,
            color: disabled, whiteSpace: 'nowrap', cursor: 'not-allowed',
          }}>
            {label}
          </span>
        )
      })}
      <button aria-label="search" style={{
        position: 'absolute', right: 16, top: -4,
        width: 28, height: 28, borderRadius: '50%', border: 'none', background: 'transparent',
        color: text, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>
        </svg>
      </button>
    </nav>
  )
}
