import Footer from './Footer'
import Sidebar from './Sidebar'

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', width: '100%', minWidth: 1280,
      background: 'var(--color-paper)',
      fontFamily: 'var(--font-jp)',
      color: 'var(--color-ink)',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <Sidebar/>
      <div style={{ flex: 1, minWidth: 0, position: 'relative', background: 'var(--color-paper)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  )
}
