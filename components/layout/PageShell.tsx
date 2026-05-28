import Footer from './Footer'
import Sidebar from './Sidebar'

interface PageShellProps {
  children: React.ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', width: '100%', minWidth: 1280,
      background: '#f3f1ea',
      fontFamily: '"Shippori Mincho B1","Noto Serif JP","Cormorant Garamond",serif',
      color: '#0a1628',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <Sidebar/>
      <div style={{ flex: 1, minWidth: 0, position: 'relative', background: '#f3f1ea', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  )
}
