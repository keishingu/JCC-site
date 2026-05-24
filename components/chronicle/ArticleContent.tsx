import Link from 'next/link'
import TopNav from '../layout/TopNav'
import ArrowLink from '../layout/ArrowLink'
import { photos } from '@/lib/photos'

function CATopoFigure() {
  return (
    <svg viewBox="0 0 380 420" style={{ width: '100%', height: 'auto' }}>
      <g stroke="#2a2418" fill="none" strokeWidth=".7" opacity=".88">
        <path d="M30 400 Q60 320 100 280 T180 200 L220 140 L260 90 L300 50"/>
        <path d="M30 400 Q80 340 130 310 T220 230 L260 170 L300 120 L335 80"/>
        <path d="M55 380 Q100 320 150 290 T240 200 L290 140"/>
        <path d="M170 290 L195 250 L215 200 L240 150 L262 110 L285 80 L300 60" strokeWidth="1.4" stroke="#2a2418"/>
        <circle cx="170" cy="290" r="3" fill="#2a2418" stroke="none"/>
        <circle cx="195" cy="250" r="3" fill="#2a2418" stroke="none"/>
        <circle cx="215" cy="200" r="3" fill="#2a2418" stroke="none"/>
        <circle cx="240" cy="150" r="3" fill="#2a2418" stroke="none"/>
        <circle cx="262" cy="110" r="3" fill="#2a2418" stroke="none"/>
        <circle cx="285" cy="80"  r="3" fill="#2a2418" stroke="none"/>
        <circle cx="300" cy="60"  r="4" fill="#2a2418" stroke="none"/>
        <path d="M215 200 Q230 175 235 155" strokeDasharray="3 3" strokeWidth=".8"/>
      </g>
      <g fill="#2a2418" fontFamily="Cormorant Garamond, serif" stroke="none">
        <text x="14" y="22" fontSize="14" fontStyle="italic">Polar Circus — Direct Line</text>
        <text x="14" y="40" fontSize="9">Shannon Island, Greenland · 1,180m / 7 pitches</text>
        <text x="178" y="295" fontSize="9">P1 · 60° snow</text>
        <text x="200" y="248" fontSize="9">P2 · WI3</text>
        <text x="222" y="200" fontSize="9">P3 · M4 mixed</text>
        <text x="246" y="148" fontSize="9">P4 · WI4+</text>
        <text x="268" y="108" fontSize="9.5" fontWeight="600">P5 · WI5 crux</text>
        <text x="290" y="78"  fontSize="9">P6 · 70° ice</text>
        <text x="305" y="58"  fontSize="9">P7 · ridge</text>
        <text x="305" y="48"  fontSize="10" fontWeight="600">SUMMIT 1,712m</text>
        <g transform="translate(330,330)">
          <circle r="14" fill="none" stroke="#2a2418" strokeWidth=".6"/>
          <path d="M0 -14 L0 14 M-14 0 L14 0" stroke="#2a2418" strokeWidth=".4"/>
          <path d="M0 -14 L3 0 L0 14 L-3 0 Z" fill="#2a2418"/>
          <text x="-3" y="-18" fontSize="8">N</text>
        </g>
      </g>
    </svg>
  )
}

function CANotebookFigure() {
  return (
    <svg viewBox="0 0 380 420" style={{ width: '100%', height: 'auto' }}>
      <g fontFamily="Cormorant Garamond, serif" fill="#2a2418" stroke="none">
        <text x="0" y="18" fontSize="14" fontStyle="italic">Day 16 — Base Camp</text>
        <line x1="0" y1="24" x2="200" y2="24" stroke="#2a2418" strokeWidth=".4"/>
        <text x="0" y="40" fontSize="9.5">06:20  起床  −34°C / 風なし</text>
        <text x="0" y="55" fontSize="9.5">         ストーブ点火、雪を融かす。</text>
        <text x="0" y="70" fontSize="9.5">07:15  朝食 — オートミール + 干肉</text>
        <text x="0" y="92" fontSize="9.5">— 天候判断 —</text>
        <text x="0" y="107" fontSize="9.5">気圧 982hPa → 行ける。</text>
        <text x="0" y="137" fontSize="9.5">08:40  ベースキャンプ発</text>
        <text x="0" y="160" fontSize="9.5">10:55  壁の取付。 −22°C</text>
        <text x="0" y="175" fontSize="9.5">11:10  P1 開始</text>
        <text x="0" y="190" fontSize="9.5">12:30  P3 終了 — ペース良好</text>
        <text x="0" y="220" fontSize="9.5" fontStyle="italic">行く。</text>
        <text x="0" y="250" fontSize="9.5">14:18  P5 取付。氷、脆い。</text>
        <text x="0" y="280" fontSize="9.5">15:40  P5 抜ける。手が動かない。</text>
        <text x="0" y="310" fontSize="9.5">17:05  P7 山頂着</text>
        <text x="0" y="340" fontSize="9.5" fontStyle="italic">         「ようやく、ここに立つ。」</text>
        <text x="0" y="380" fontSize="9.5">23:50  BC 帰着</text>
      </g>
    </svg>
  )
}

const activityLog = [
  ['03.14', 'Day 01', 'アイスランド入国 / 装備最終確認',             '−12°C', ''],
  ['03.16', 'Day 03', 'チャーター機にてメスタースヴィッグへ',         '−24°C', ''],
  ['03.17', 'Day 04', 'スノーモービル隊と合流 / 氷河奥地へ',          '−28°C', ''],
  ['03.19', 'Day 06', 'BC設営完了 / 偵察 1回目',                    '−30°C', ''],
  ['03.22', 'Day 09', '荒天待機 (3日間)',                            '−32°C', '風 22m/s'],
  ['03.26', 'Day 13', 'P1〜P3 試登 / 機材デポ',                     '−25°C', ''],
  ['03.30', 'Day 16', 'サミットプッシュ / 全7ピッチ完登 (15h30m)',    '−34°C', '★'],
  ['04.01', 'Day 18', 'BC撤収 / 帰路',                              '−28°C', ''],
  ['04.08', 'Day 26', '帰国',                                       '—',     ''],
]

const relatedRecords = [
  { yr: '2009', jp: 'マッターホルン北壁 登攀記',  author: 'A. Watanabe', en: 'Matterhorn North Face',      img: photos.frostPinnacle },
  { yr: '1991', jp: 'ヒマラヤ・シシャパンマ遠征', author: 'T. Katsube',  en: 'Shishapangma West Face',     img: photos.patagonia },
  { yr: '1985', jp: '谷川岳 一ノ倉沢 東壁',       author: 'H. Yokoyama', en: 'Ichinokura, Tanigawa-dake', img: photos.peakBW, mono: true },
  { yr: '1977', jp: '剱岳 北壁 冬期単独行',        author: 'J. Furukawa', en: 'Mt. Tsurugi North Face',     img: photos.cirqueDusk },
]

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default function ArticleContent() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: 640, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos.iceMassive} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.78) contrast(1.02) brightness(.9)' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,.35) 0%, rgba(10,22,40,0) 35%, rgba(10,22,40,.55) 100%)' }}/>
        <TopNav active="CHRONICLE"/>
        <div style={{ position: 'absolute', left: 56, top: 110, color: 'rgba(255,255,255,.78)' }}>
          <Link href="/chronicle" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'inherit', textDecoration: 'none', fontSize: 11, letterSpacing: '.18em', ...enSt }}>
            <span style={{ width: 18, height: 1, background: 'currentColor' }}/>
            CHRONICLE / 2025 / POLAR CIRCUS
          </Link>
        </div>
        <div style={{ position: 'absolute', left: 56, bottom: 60, right: 56, color: '#fff' }}>
          <div style={{ fontSize: 13, letterSpacing: '.22em', color: 'rgba(255,255,255,.78)', marginBottom: 14, ...enSt }}>2025 · GREENLAND</div>
          <h1 style={{ margin: 0, fontSize: 60, lineHeight: 1.15, letterSpacing: '.04em', fontWeight: 500, ...jpSt }}>
            ポーラーサーカス登攀記
          </h1>
          <div style={{ marginTop: 16, fontSize: 22, letterSpacing: '.08em', color: 'rgba(255,255,255,.92)', fontWeight: 300, ...enSt }}>
            Polar Circus — A Record from the Arctic Wall
          </div>
        </div>
      </section>

      {/* META STRIP */}
      <section style={{ background: '#16263f', color: '#fff', padding: '26px 56px', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 26 }}>
        {[
          ['CLIMBERS',  '笹木 克彦 / 佐藤 翔'],
          ['AREA',      'グリーンランド・ポーラーサーカス'],
          ['PERIOD',    '2025年3月14日 — 4月8日 (26日間)'],
          ['STYLE',     'アルパインスタイル · 2名'],
          ['GRADE',     'WI5 M6 / 標高差 1,180m'],
          ['CATEGORY',  '海外・極地'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontSize: 9.5, letterSpacing: '.22em', color: 'rgba(255,255,255,.55)', ...enSt }}>{k}</div>
            <div style={{ marginTop: 6, fontSize: 12.5, color: '#fff', lineHeight: 1.5, ...jpSt }}>{v}</div>
          </div>
        ))}
      </section>

      {/* SECTION 01 — はじめに */}
      <section style={{ padding: '70px 56px 50px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>01</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>はじめに</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
          <div style={{ marginTop: 16, fontSize: 11, letterSpacing: '.14em', color: '#3d5070', lineHeight: 1.8, ...enSt }}>by K. Sasaki<br/>April 2025</div>
        </div>
        <div style={{ maxWidth: 720 }}>
          <p style={{ margin: 0, fontSize: 22, lineHeight: 1.85, letterSpacing: '.04em', color: '#0a1628', ...jpSt }}>
            グリーンランド東岸、シャノン島にそびえるポーラーサーカスは、その名の通り、氷壁と岩壁が馬蹄形に連なる壮大なサーカス状の地形である。
          </p>
          <p style={{ marginTop: 26, fontSize: 13.5, lineHeight: 2.05, color: '#0a1628' }}>
            私たちはその中の一角にあるピークを目指し、3週間にわたる遠征を行った。<br/>
            長年構想を温めてきたこのルートに、ようやく一歩を踏み出せたのは、いくつもの偶然と、共に行ける仲間がいたという事実による。<br/>
            以下の記録は、登攀そのものよりも、その手前にある「どう向き合ったか」に重きを置いて書かれている。
          </p>
        </div>
      </section>

      {/* SECTION 02 — アプローチ */}
      <section style={{ padding: '0 56px 70px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>02</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>アプローチ</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div style={{ maxWidth: 920 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start' }}>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2.05, color: '#0a1628' }}>
              アイスランドからチャーター機でメスタースヴィッグへ。<br/>
              そこからスノーモービルで2日かけてベースキャンプ予定地まで物資を運ぶ。最低気温は−34℃。風はなく、夜空には強くオーロラが立つ。<br/><br/>
              初日、フィヨルドを渡る氷の上でガスがかかった。コンパス確認、GPS、足元の氷の音。
            </p>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2.05, color: '#0a1628' }}>
              ベースキャンプ到着は出発から5日後。<br/>
              風の通り道を避けて、岩陰にツェルトを構築。ストーブを2台体制で運用し、燃料の消費を慎重に計算する。<br/><br/>
              天候待ちが3日続いた。テントの中で、地形図と昨日の偵察の記憶をつなぎ合わせ、ルートの中で迷いそうな箇所を一つひとつ潰していく。
            </p>
          </div>
          <div style={{ marginTop: 22, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.cirqueDusk} alt="" style={{ width: '100%', height: 460, objectFit: 'cover', filter: 'saturate(.7) contrast(1.0)' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 10.5, color: '#3d5070', ...enSt }}>
              <span>FIG.01 — Polar Circus / North Cwm, approach view</span>
              <span>March 17, 2025  ·  −28°C</span>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ padding: '20px 56px 70px' }}>
        <blockquote style={{ margin: 0, padding: '0 80px', position: 'relative', maxWidth: 1000 }}>
          <div style={{ fontSize: 30, lineHeight: 1.75, letterSpacing: '.04em', color: '#0a1628', ...jpSt }}>
            「行くか、戻るか。<br/>
            山では常にそのどちらかが正しい。<br/>
            そして、どちらを選んでもいいということは、ほとんどない。」
          </div>
          <div style={{ marginTop: 22, fontSize: 11, letterSpacing: '.2em', color: '#3d5070', ...enSt }}>
            — Day 14, Base Camp, Field Notes
          </div>
          <span style={{ position: 'absolute', left: 0, top: -10, fontFamily: 'Cormorant Garamond, serif', fontSize: 80, color: '#c9d6e2', lineHeight: 1 }}>&ldquo;</span>
        </blockquote>
      </section>

      {/* SECTION 03 — 登攀 */}
      <section style={{ padding: '0 56px 70px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, background: '#f7f5ee' }}>
        <div style={{ paddingTop: 60 }}>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>03</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>登攀</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div style={{ maxWidth: 920, paddingTop: 60, paddingBottom: 10 }}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2.05, color: '#0a1628' }}>
            壁の取り付きまではアプローチ氷河を6時間。<br/>
            P1〜P3は雪稜と氷瀑のミックス。氷の質は脆く、薄い箇所では支点が極端に取りづらい。<br/><br/>
            核心はP5。長さ60m、平均80度、最大90度のWI5。氷の中央部に走る縦のクラックに沿ってラインを取った。<br/>
            中盤、突き出した不安定なシャンデリア氷をどうかわすかで30分迷う。<br/>
            結果、右に大きく振って薄い氷面を経由した。スクリュー1本のランナウト、距離およそ12m。
          </p>
          <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
            <div style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.iceSilhouette} alt="" style={{ width: '100%', height: 360, objectFit: 'cover', filter: 'saturate(.78) contrast(1.03)' }}/>
              <div style={{ marginTop: 8, fontSize: 10.5, color: '#3d5070', letterSpacing: '.08em', ...enSt }}>FIG.02 — Pitch 5, crux ice column (WI5)</div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.icefallWall} alt="" style={{ width: '100%', height: 360, objectFit: 'cover', filter: 'saturate(.78) contrast(1.03)' }}/>
              <div style={{ marginTop: 8, fontSize: 10.5, color: '#3d5070', letterSpacing: '.08em', ...enSt }}>FIG.03 — Upper section, day 19</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — ルート図・現地メモ */}
      <section style={{ background: '#16263f', color: '#fff', padding: '60px 56px 70px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: 'rgba(255,255,255,.55)', ...enSt }}>04</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#fff', ...jpSt }}>ルート図・現地メモ</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: 'rgba(255,255,255,.55)' }}/>
          <p style={{ marginTop: 22, fontSize: 12, lineHeight: 2.0, color: 'rgba(255,255,255,.78)' }}>
            現地で書き起こしたトポと、テント内で取ったフィールドノートからの抜粋。文字は寒さで震えており、所々判読不能。
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <div style={{ background: '#e9e0c6', padding: 28, position: 'relative', minHeight: 460 }}>
            <CATopoFigure/>
            <div style={{ position: 'absolute', bottom: 10, left: 28, fontSize: 9.5, color: '#3a3528', letterSpacing: '.06em', ...enSt }}>HAND TOPO · K.SASAKI · 2025.03.30</div>
          </div>
          <div style={{ background: '#dcd2b3', padding: 28, position: 'relative', minHeight: 460 }}>
            <CANotebookFigure/>
            <div style={{ position: 'absolute', bottom: 10, left: 28, fontSize: 9.5, color: '#3a3528', letterSpacing: '.06em', ...enSt }}>FIELD NOTES · DAY 16</div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — 技術情報・コンディション */}
      <section style={{ padding: '70px 56px 60px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>05</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>技術情報・コンディション</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {/* Technical */}
          <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.08)', padding: '22px 26px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#0a1628', fontWeight: 600, marginBottom: 16, ...enSt }}>
              <span style={{ display: 'inline-block', width: 14, height: 1, background: 'currentColor', verticalAlign: 'middle', marginRight: 10 }}/>
              TECHNICAL
            </div>
            {[
              ['総合グレード',     'WI5 M6 / TD+'],
              ['標高差',          '1,180m'],
              ['ピッチ数',        '7 (登攀) + 12 (アプローチ氷河)'],
              ['核心グレード',    'P5 — WI5 / シャンデリア氷'],
              ['行動時間 (登攀日)', '15時間 30分'],
              ['使用ロープ',      '60m × 2 ハーフ'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '40% 1fr', gap: 16, padding: '8px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', fontSize: 12 }}>
                <div style={{ color: '#3d5070', ...jpSt }}>{k}</div>
                <div style={{ color: '#0a1628', ...enSt }}>{v}</div>
              </div>
            ))}
          </div>
          {/* Conditions */}
          <div style={{ background: '#16263f', color: '#fff', padding: '22px 26px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.22em', fontWeight: 600, marginBottom: 16, ...enSt }}>
              <span style={{ display: 'inline-block', width: 14, height: 1, background: 'currentColor', verticalAlign: 'middle', marginRight: 10 }}/>
              CONDITIONS · DAY 16
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 22 }}>
              {[
                ['MIN TEMP', '−34', '°C'],
                ['MAX WIND', '18', 'm/s'],
                ['VISIBILITY', '3.5', 'km'],
                ['PRESSURE', '982', 'hPa'],
                ['ICE Q.', '脆', ''],
                ['DAYLIGHT', '11:42', ''],
              ].map(([label, value, unit]) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '.01em', lineHeight: 1, ...enSt }}>
                    {value}<span style={{ fontSize: 13, fontWeight: 400, marginLeft: 4, opacity: .8 }}>{unit}</span>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 9.5, letterSpacing: '.22em', color: 'rgba(255,255,255,.6)', ...enSt }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.18)', paddingTop: 16, fontSize: 12, lineHeight: 2, color: 'rgba(255,255,255,.85)' }}>
              高層雲は薄く、視界はおおむね良好。氷は中盤以降に脆さが増し、シャンデリア氷を回避する判断が必要となった。
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — 行動記録 */}
      <section style={{ background: '#f7f5ee', padding: '70px 56px 70px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>06</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>行動記録</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '90px 80px 1fr 90px 70px', columnGap: 22, rowGap: 0, fontSize: 12, color: '#0a1628' }}>
            {['DATE', 'DAY', 'RECORD', 'TEMP', 'NOTE'].map(h => (
              <div key={h} style={{ fontSize: 10, letterSpacing: '.18em', color: '#3d5070', paddingBottom: 12, borderBottom: '1px solid #3d5070', ...enSt }}>{h}</div>
            ))}
            {activityLog.map((d, i) => {
              const star = d[4] === '★'
              return (
                <>
                  <div key={`date-${i}`} style={{ padding: '14px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', color: star ? '#0a1628' : '#3d5070', fontWeight: star ? 600 : 400, ...enSt }}>{d[0]}</div>
                  <div key={`day-${i}`} style={{ padding: '14px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', color: star ? '#0a1628' : '#3d5070', ...enSt }}>{d[1]}</div>
                  <div key={`rec-${i}`} style={{ padding: '14px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', color: '#0a1628', fontWeight: star ? 500 : 400, ...jpSt }}>{d[2]}</div>
                  <div key={`tmp-${i}`} style={{ padding: '14px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', color: '#3d5070', ...enSt }}>{d[3]}</div>
                  <div key={`note-${i}`} style={{ padding: '14px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', color: star ? '#0a1628' : '#3d5070', fontSize: 13, fontWeight: 500, ...enSt }}>{d[4]}</div>
                </>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — 記録写真 */}
      <section style={{ padding: '70px 56px 30px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>07</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>記録写真</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gridAutoRows: '180px', gap: 14 }}>
          {[
            { src: photos.heroIce,        cap: 'FIG.04 — Couloir below P1, dawn', span: 2 },
            { src: photos.iceTrees,       cap: 'FIG.05 — Lower icefall, Day 13' },
            { src: photos.icefallRockies, cap: 'FIG.06 — North wall, March 26' },
            { src: photos.iceSilhouette,  cap: 'FIG.07 — Pitch 5' },
            { src: photos.frostPinnacle,  cap: 'FIG.08 — Summit ridge in cloud' },
            { src: photos.cirqueDescent,  cap: 'FIG.09 — Descent cwm, Day 17', span: 2 },
            { src: photos.rockTexture,    cap: 'FIG.10 — Mixed terrain, P3' },
          ].map((p, i) => (
            <figure key={i} style={{ margin: 0, gridColumn: p.span ? `span ${p.span}` : undefined, position: 'relative', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.75) contrast(1.02)' }}/>
              <figcaption style={{ position: 'absolute', left: 10, bottom: 8, fontSize: 10, color: '#fff', letterSpacing: '.06em', textShadow: '0 1px 2px rgba(0,0,0,.6)', ...enSt }}>{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SECTION 08 — おわりに */}
      <section style={{ padding: '60px 56px 80px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', ...enSt }}>08</div>
          <div style={{ marginTop: 6, fontSize: 14, color: '#0a1628', ...jpSt }}>おわりに</div>
          <div style={{ marginTop: 18, height: 1, width: 36, background: '#3d5070' }}/>
        </div>
        <div style={{ maxWidth: 720 }}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 2.05, color: '#0a1628' }}>
            ポーラーサーカスから帰って、半年が経った。<br/>
            記録を書き起こしていると、登った数時間の出来事よりも、その手前の長い待ち時間、判断、躊躇、それでも先へ進めた瞬間のことばかりが思い出される。<br/><br/>
            登れたことは結果に過ぎない。<br/>
            そこへ至るまでの一つひとつの選択が、自分たちの登攀の質を決めていたように思う。<br/><br/>
            記録の意味は、武勇のためではなく、次に行く誰かの判断材料となることにあると、改めて感じている。
          </p>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(10,22,40,0.08)', paddingTop: 22 }}>
            <div>
              <div style={{ fontSize: 14, color: '#0a1628', ...jpSt }}>笹木 克彦</div>
              <div style={{ fontSize: 10.5, color: '#3d5070', letterSpacing: '.06em', marginTop: 2, ...enSt }}>K. Sasaki  ·  JCC会員 (2009 — )</div>
            </div>
          </div>
          <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px', border: '1px solid rgba(10,22,40,0.08)', color: '#0a1628', fontSize: 12 }}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M2 1h7l3 3v11H2z"/><path d="M9 1v3h3"/>
            </svg>
            記録全文をPDFで読む <span style={{ opacity: .55 }}>(3.2MB · 全42ページ)</span>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: '#f7f5ee', padding: '60px 56px 80px', borderTop: '1px solid rgba(10,22,40,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 26 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
            <h3 style={{ margin: 0, fontSize: 22, letterSpacing: '.06em', fontWeight: 500, color: '#0a1628', ...enSt }}>RELATED CHRONICLES</h3>
            <span style={{ fontSize: 13, color: '#3d5070', ...jpSt }}>関連する登攀記録</span>
          </div>
          <ArrowLink href="/chronicle">すべての記録を見る</ArrowLink>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {relatedRecords.map((r) => (
            <Link key={r.yr} href="/chronicle/polar-circus" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ aspectRatio: '1/1', background: '#222', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: (r as {mono?: boolean}).mono ? 'grayscale(1) contrast(1.05)' : 'saturate(.65) contrast(.95)' }}/>
              </div>
              <div style={{ marginTop: 12, fontSize: 16, fontWeight: 500, color: '#0a1628', ...enSt }}>{r.yr}</div>
              <div style={{ marginTop: 5, fontSize: 13.5, lineHeight: 1.4, color: '#0a1628', ...jpSt }}>{r.jp}</div>
              <div style={{ marginTop: 4, fontSize: 10.5, color: '#3d5070', ...enSt }}>{r.author}</div>
              <div style={{ marginTop: 1, fontSize: 10, color: '#6a7d97', ...enSt }}>{r.en}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
