import Link from 'next/link'

interface ArrowLinkProps {
  href?: string
  light?: boolean
  big?: boolean
  children: React.ReactNode
}

export default function ArrowLink({ href = '#', light, big, children }: ArrowLinkProps) {
  const c = light ? '#fff' : 'var(--color-ink)'
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 14,
    color: c, textDecoration: 'none', fontWeight: 500,
    fontFamily: 'var(--font-en-sans)',
    fontSize: big ? 13 : 12, letterSpacing: '.14em',
    cursor: 'pointer',
  }
  return (
    <Link href={href} style={style}>
      <span style={{ width: 26, height: 1, background: c, opacity: .7 }}/>
      {children}
    </Link>
  )
}
