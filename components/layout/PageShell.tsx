import Footer from './Footer'
import Sidebar from './Sidebar'

interface PageShellProps {
  sidebarProps?: React.ComponentProps<typeof Sidebar>
  footerProps?: React.ComponentProps<typeof Footer>
  children: React.ReactNode
}

export default function PageShell({ sidebarProps = {}, footerProps = {}, children }: PageShellProps) {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', width: '100%',
      background: '#f3f1ea',
      fontFamily: '"Shippori Mincho B1","Noto Serif JP","Cormorant Garamond",serif',
      color: '#0a1628',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <Sidebar {...sidebarProps}/>
      <div style={{ flex: 1, minWidth: 0, position: 'relative', background: '#f3f1ea', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer {...footerProps}/>
      </div>
    </div>
  )
}
