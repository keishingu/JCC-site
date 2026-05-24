import Link from 'next/link'
import { photos } from '@/lib/photos'

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

const latestArticles = [
  { tag: 'FIELD',     date: '2025.05.18', title: '谷川岳 一ノ倉沢の氷結状況 (5月中旬)',    author: 'Y. Tanigaki', img: photos.heroIce },
  { tag: 'TECH.',     date: '2025.05.15', title: 'アックスワークの基本 — スイングと体重移動', author: 'K. Shingu',   img: photos.icefallWall },
  { tag: 'GEAR',      date: '2025.05.07', title: '春山で活躍したギアたち 2025',              author: 'Y. Kunii',    img: photos.graniteClimber },
  { tag: 'FIELD',     date: '2025.04.28', title: '冬季滝谷第四尾根レポート',                  author: 'K. Yamamoto', img: photos.snowRidge },
  { tag: 'TECH.',     date: '2025.04.10', title: 'アイスクライミングにおける支点構築',        author: 'K. Shingu',   img: photos.iceSilhouette },
  { tag: 'FIELD',     date: '2025.03.22', title: '剱岳 早月尾根 2025年3月',                  author: 'Y. Tanigaki', img: photos.frostPinnacle },
  { tag: 'GEAR',      date: '2025.03.10', title: 'ビバーク装備の見直し：シュラフとビビーサック', author: 'Y. Kunii',  img: photos.cirqueDusk },
  { tag: 'FIELD',     date: '2025.02.20', title: '厳冬期 谷川岳 一ノ倉沢 烏帽子沢奥壁',      author: 'Y. Tanigaki', img: photos.iceMassive },
]

const categories = ['FIELD NOTES', 'TECH. / GEAR', 'EXPEDITION', 'ANNOUNCEMENT']
const tags = ['アイス', '冬壁', '装備', 'アルパイン', '谷川岳', '剱岳', '海外', 'ギア']

export default function NewsBody() {
  return (
    <section style={{
      background: '#f7f5ee', padding: '50px 56px 60px',
      display: 'grid', gridTemplateColumns: '1fr 220px', gap: 36,
      borderTop: '1px solid rgba(10,22,40,0.08)',
    }}>
      {/* main */}
      <div>
        {/* Featured article */}
        <div>
          <div style={{ marginBottom: 12, fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, ...enSt }}>
            <span style={{ display: 'inline-block', width: 1, height: 12, background: '#16263f', verticalAlign: 'middle', marginRight: 8 }}/>
            FEATURED ARTICLE
          </div>
          <article style={{ background: '#fff', display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 280, border: '1px solid rgba(10,22,40,0.08)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', background: '#111' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.iceMassive} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6) brightness(.92)' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,0) 60%)' }}/>
              <div style={{ position: 'absolute', top: 20, left: 22, color: '#fff' }}>
                <div style={{ fontSize: 10.5, letterSpacing: '.22em', opacity: .85, ...enSt }}>EXPEDITION</div>
                <div style={{ marginTop: 4, fontSize: 13, letterSpacing: '.06em', opacity: .95, ...enSt }}>2025.05.20</div>
              </div>
              <div style={{ position: 'absolute', left: 22, bottom: 24, color: '#fff', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[['TEMP.', '−32°C'], ['WIND', '18m/s']].map(([label, value]) => (
                  <div key={label}>
                    <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '.01em', lineHeight: 1, ...enSt }}>{value}</div>
                    <div style={{ marginTop: 4, fontSize: 9.5, letterSpacing: '.22em', opacity: .8, ...enSt }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.4, color: '#0a1628', ...jpSt }}>
                ポーラーサーカス<br/>準備記録
              </h3>
              <div style={{ marginTop: 8, fontSize: 13, color: '#3d5070' }}>−40°C装備をどう組んだか</div>
              <p style={{ marginTop: 18, fontSize: 12, lineHeight: 1.95, color: '#3d5070' }}>
                グリーンランド遠征に向けた装備の検討とテストの記録。<br/>
                極寒期間のビレイ環境、長時間行動、ビバークを想定した<br/>
                レイヤリングとギア選定について。
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 22 }}>
                <span style={{ fontSize: 11, color: '#3d5070', ...enSt }}>by K.Sasaki</span>
                <Link href="/chronicle/polar-circus" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 14, color: '#0a1628',
                  textDecoration: 'none', fontWeight: 500, fontSize: 12, letterSpacing: '.14em', ...enSt,
                }}>
                  <span style={{ width: 26, height: 1, background: '#0a1628', opacity: .7 }}/>
                  READ MORE
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Latest articles */}
        <div style={{ marginTop: 46 }}>
          <div style={{ marginBottom: 16, fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, ...enSt }}>
            <span style={{ display: 'inline-block', width: 1, height: 12, background: '#16263f', verticalAlign: 'middle', marginRight: 8 }}/>
            LATEST ARTICLES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {latestArticles.map((a, i) => (
              <article key={i}>
                <div style={{ aspectRatio: '3/2', overflow: 'hidden', background: '#222' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) contrast(.98)' }}/>
                </div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 9.5, padding: '3px 8px', border: '1px solid rgba(10,22,40,0.08)', color: '#16263f', ...enSt }}>{a.tag}</span>
                    <span style={{ fontSize: 10, color: '#3d5070', ...enSt }}>{a.date}</span>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.5, color: '#0a1628', ...jpSt }}>{a.title}</div>
                  <div style={{ marginTop: 4, fontSize: 10.5, color: '#3d5070', ...enSt }}>by {a.author}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, marginBottom: 16, ...enSt }}>
            CATEGORIES
          </div>
          {categories.map((c) => (
            <div key={c} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', fontSize: 12, color: '#3d5070' }}>
              <span style={enSt}>{c}</span>
              <span style={{ color: '#0a1628', fontWeight: 500, ...enSt }}>{Math.floor(Math.random() * 20 + 5)}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, marginBottom: 12, ...enSt }}>
            TAGS
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {tags.map((t) => (
              <span key={t} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid rgba(10,22,40,0.08)', color: '#3d5070', background: 'rgba(255,255,255,.5)' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 28, borderTop: '1px solid rgba(10,22,40,0.08)', paddingTop: 22 }}>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, marginBottom: 16, ...enSt }}>
            FROM CHRONICLE
          </div>
          <Link href="/chronicle/polar-circus" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ aspectRatio: '3/2', overflow: 'hidden', background: '#222' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.iceMassive} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6)' }}/>
            </div>
            <div style={{ marginTop: 10, fontSize: 12.5, color: '#0a1628', lineHeight: 1.5, ...jpSt }}>ポーラーサーカス登攀記</div>
            <div style={{ fontSize: 10.5, color: '#3d5070', marginTop: 4, ...enSt }}>2025 · K. Sasaki</div>
          </Link>
        </div>
      </aside>
    </section>
  )
}
