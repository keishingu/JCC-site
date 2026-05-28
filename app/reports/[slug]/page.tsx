import { notFound } from 'next/navigation'
import PageShell from '@/components/layout/PageShell'
import RichText from '@/components/RichText'
import { getReport } from '@/lib/microcms'

export const dynamic = 'force-dynamic'

const enSt: React.CSSProperties = { fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif' }
const jpSt: React.CSSProperties = { fontFamily: '"Shippori Mincho B1","Noto Serif JP",serif' }

export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const report = await getReport(slug)
  if (!report) notFound()

  return (
    <PageShell sidebarProps={{ variant: 'minimal', pageLabel: `CHRONICLE — ${report.year}` }}>
      {/* Hero */}
      {report.heroImage && (
        <div style={{ position: 'relative', height: 520, overflow: 'hidden', background: '#111' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={report.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.7) brightness(.88)' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0) 40%, rgba(10,22,40,.6) 100%)' }}/>
          <div style={{ position: 'absolute', left: 56, bottom: 44, color: '#fff' }}>
            <div style={{ fontSize: 13, letterSpacing: '.22em', opacity: .82, ...enSt }}>{report.category}</div>
            <h1 style={{ margin: '10px 0 0', fontSize: 36, lineHeight: 1.3, fontWeight: 500, ...jpSt }}>{report.title}</h1>
            {report.titleEn && <div style={{ marginTop: 8, fontSize: 15, opacity: .78, letterSpacing: '.08em', ...enSt }}>{report.titleEn}</div>}
          </div>
        </div>
      )}

      <article style={{ background: '#f7f5ee', padding: '56px 56px 80px' }}>
        {/* Meta */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, paddingBottom: 36, borderBottom: '1px solid rgba(10,22,40,0.08)', marginBottom: 48 }}>
          {[
            ['年', report.year?.toString()],
            ['登攀者', report.climbers?.length ? report.climbers.map(c => c.name).join('・') : undefined],
            ['エリア', report.area],
            ['期間', report.period],
            ['スタイル', report.style],
            ['グレード', report.grade],
          ].filter(([, v]) => v).map(([label, value]) => (
            <div key={label}>
              <div style={{ fontSize: 10, letterSpacing: '.22em', color: '#3d5070', marginBottom: 6, ...enSt }}>{label}</div>
              <div style={{ fontSize: 14, color: '#0a1628', ...jpSt }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Lead */}
        {report.lead && (
          <div style={{ maxWidth: 720, marginBottom: 48, fontSize: 16, lineHeight: 2.0, color: '#0a1628', ...jpSt }}>
            <RichText content={report.lead}/>
          </div>
        )}

        {/* Topo + course info */}
        {(report.topoImage || report.courseTime || report.gear) && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, marginBottom: 48, alignItems: 'start' }}>
            {/* Left: course time & gear */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {report.courseTime && (
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', marginBottom: 10, ...enSt }}>コースタイム</div>
                  <div style={{ fontSize: 13, color: '#0a1628', lineHeight: 1.9, whiteSpace: 'pre-wrap', ...jpSt }}>{report.courseTime}</div>
                </div>
              )}
              {report.gear && (
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.22em', color: '#3d5070', marginBottom: 10, ...enSt }}>使用ギア</div>
                  <div style={{ fontSize: 13, color: '#0a1628', lineHeight: 1.9, whiteSpace: 'pre-wrap', ...jpSt }}>{report.gear}</div>
                </div>
              )}
            </div>
            {/* Right: topo image */}
            {report.topoImage && (
              <div style={{ width: 320, flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={report.topoImage.url} alt="トポ図" style={{ width: '100%', height: 'auto' }}/>
              </div>
            )}
          </div>
        )}

        {/* Body */}
        {report.body && (
          <div className="prose" style={{ maxWidth: 720, marginBottom: 56 }}>
            <RichText content={report.body}/>
          </div>
        )}

        {/* Activity log */}
        {report.activityLog && report.activityLog.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 13, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, marginBottom: 16, ...enSt }}>行動記録</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(10,22,40,0.12)' }}>
                  {['日付','日数','記録','気温','備考'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: '#3d5070', fontWeight: 500, ...jpSt }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {report.activityLog.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(10,22,40,0.06)' }}>
                    {[row.date, row.day, row.record, row.temp, row.note].map((v, j) => (
                      <td key={j} style={{ padding: '10px 12px', color: '#0a1628', lineHeight: 1.6, ...jpSt }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Photos */}
        {report.photos && report.photos.length > 0 && (
          <div>
            <h2 style={{ fontSize: 13, letterSpacing: '.22em', color: '#3d5070', fontWeight: 600, marginBottom: 16, ...enSt }}>記録写真</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {report.photos.map((p, i) => (
                <div key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image.url} alt={p.caption ?? ''} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', filter: 'saturate(.7)' }}/>
                  {p.caption && <div style={{ marginTop: 6, fontSize: 11, color: '#3d5070', ...jpSt }}>{p.caption}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageShell>
  )
}
