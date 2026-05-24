import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'

export default function HomePhilosophy() {
  return (
    <section style={{ position: 'relative', padding: '90px 56px 110px', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 60, alignItems: 'center' }}>
        <div>
          <h2 style={{
            margin: 0, fontSize: 32, lineHeight: 1.55, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628',
            fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif',
          }}>
            アルピニズムに徹した、<br/>自立した登攀者の集団
          </h2>
          <div style={{ marginTop: 30, fontSize: 13, lineHeight: 2.0, color: '#3d5070', maxWidth: 480 }}>
            日本クライマースクラブ（JCC）は、1958年、ロッククライミングを中心とした<br/>
            高度な登山を志す者たちによって創設されました。<br/>
            私たちは、自然に対峙する中で、自らの技術と判断とを磨き、自由で責任ある登攀を追求します。<br/>
            記録や名声よりも、そこに至るプロセスと経験を重んじ、次の世代へとその精神を継承していきます。
          </div>
          <div style={{ marginTop: 36 }}>
            <ArrowLink href="/climbers">JCCとは</ArrowLink>
          </div>
        </div>
        <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.snowRidge} alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.85) contrast(1.0)' }}/>
        </div>
      </div>
    </section>
  )
}
