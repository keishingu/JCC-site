import { photos } from '@/lib/photos'

const enSt: React.CSSProperties = { fontFamily: 'var(--font-en-serif)' }
const jpSt: React.CSSProperties = { fontFamily: 'var(--font-jp)' }

const links = [
  ['会員になるには', '入会のご案内'],
  ['会員規約',       '規約を読む'],
  ['よくある質問',   'FAQ'],
  ['お問い合わせ',   'お問い合わせフォーム'],
]

export default function ClimbersBottom() {
  return (
    <section style={{
      background: 'var(--color-navy)', color: '#fff',
      display: 'grid', gridTemplateColumns: '1fr 1fr 280px', minHeight: 280,
    }}>
      {/* PAST CLIMBERS */}
      <div style={{ padding: '34px 36px 30px', borderRight: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: '.12em', fontWeight: 500, ...enSt }}>PAST CLIMBERS</h3>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', ...jpSt }}>OB 会員</span>
        </div>
        <p style={{ fontSize: 11.5, lineHeight: 1.9, color: 'rgba(255,255,255,.78)' }}>
          JCCの歴史を築いてきた先輩方の紹介です。<br/>
          その足跡と精神は、今も私たちの指針となっています。
        </p>
        <div style={{ marginTop: 14 }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 11, letterSpacing: '.14em', color: '#fff', textDecoration: 'none', ...enSt }}>
            <span style={{ width: 18, height: 1, background: '#fff' }}/>一覧を見る
          </a>
        </div>
        <div style={{ marginTop: 18, aspectRatio: '16/8', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.peakBW2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05) brightness(.85)' }}/>
        </div>
      </div>

      {/* JCC SPIRIT */}
      <div style={{ padding: '34px 36px 30px', borderRight: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: '.12em', fontWeight: 500, ...enSt }}>JCC SPIRIT</h3>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', ...jpSt }}>受け継がれる精神</span>
        </div>
        <p style={{ fontSize: 11.5, lineHeight: 1.95, color: 'rgba(255,255,255,.85)' }}>
          技術の研鑽、判断の自立、<br/>
          仲間への信頼、そして山への敬意。<br/>
          私たちはこの精神を大切にし、次の世代へとつないでいきます。
        </p>
        <div style={{ marginTop: 18, aspectRatio: '16/8', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.rockyDescent} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.4) contrast(1.05) brightness(.7)' }}/>
        </div>
      </div>

      {/* Sidebar links */}
      <div style={{ padding: '34px 36px 30px', display: 'flex', flexDirection: 'column', gap: 18, fontSize: 11.5 }}>
        {links.map(([h, link]) => (
          <div key={h}>
            <div style={{ color: '#fff', marginBottom: 6, ...jpSt }}>{h}</div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,.85)', textDecoration: 'none', fontSize: 11, letterSpacing: '.1em', ...enSt }}>
              <span style={{ width: 16, height: 1, background: 'rgba(255,255,255,.85)' }}/>{link}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
