import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'
import type { SiteSettings } from '@/lib/microcms'

export default function HomePhilosophy({ settings }: { settings: SiteSettings }) {
  const delegateText = settings.philosophyText ?? 'アルピニズムに徹した、\n自立した登攀者の集団'
  const delegateMessage = settings.philosophyMessage ?? '日本クライマースクラブ（JCC）は、1958年、ロッククライミングを中心とした\n高度な登山を志す者たちによって創設されました。\n私たちは、自然に対峙する中で、自らの技術と判断とを磨き、自由で責任ある登攀を追求します。\n記録や名声よりも、そこに至るプロセスと経験を重んじ、次の世代へとその精神を継承していきます。'
  const imageSrc = settings.philosophyImage?.url ?? photos.snowRidge

  return (
    <section style={{ position: 'relative', padding: '90px 56px 110px', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 60, alignItems: 'center' }}>
        <div>
          <h2 style={{
            margin: 0, fontSize: 32, lineHeight: 1.55, letterSpacing: '.06em', fontWeight: 500, color: 'var(--color-ink)',
            fontFamily: 'var(--font-jp)',
            whiteSpace: 'pre-line',
          }}>
            {delegateText}
          </h2>
          <div style={{ marginTop: 30, fontSize: 13, lineHeight: 2.0, color: 'var(--color-slate)', maxWidth: 480, whiteSpace: 'pre-line' }}>
            {delegateMessage}
          </div>
          <div style={{ marginTop: 36 }}>
            <ArrowLink href="/climbers">JCCとは</ArrowLink>
          </div>
        </div>
        <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.85) contrast(1.0)' }}/>
        </div>
      </div>
    </section>
  )
}
