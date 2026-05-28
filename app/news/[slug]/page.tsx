import { notFound } from 'next/navigation'
import PageShell from '@/components/layout/PageShell'
import RichText from '@/components/RichText'
import { getNewsItem } from '@/lib/microcms'

export const dynamic = 'force-dynamic'

const tagLabels: Record<string, string> = {
  announcement: 'お知らせ',
  journal: '会報',
  recruit: '募集',
  field: 'FIELD',
  tech: 'TECH.',
  gear: 'GEAR',
  expedition: 'EXPEDITION',
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
}

const enSt: React.CSSProperties = { fontFamily: 'var(--font-en-serif)' }
const jpSt: React.CSSProperties = { fontFamily: 'var(--font-jp)' }

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getNewsItem(slug)
  if (!item) notFound()

  return (
    <PageShell>
      {/* Hero */}
      {item.heroImage && (
        <div style={{ position: 'relative', height: 400, overflow: 'hidden', background: '#111' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) brightness(.88)' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,22,40,0) 40%, rgba(10,22,40,.55) 100%)' }}/>
        </div>
      )}

      <article style={{ background: 'var(--color-cream)', padding: '56px 56px 80px' }}>
        {/* Header */}
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 10.5, letterSpacing: '.14em', border: '1px solid rgba(10,22,40,0.15)', padding: '4px 10px', color: 'var(--color-navy)', ...enSt }}>
              {tagLabels[item.tag] ?? item.tag}
            </span>
            <span style={{ fontSize: 12, color: 'var(--color-slate)', ...enSt }}>{formatDate(item.publishedAt)}</span>
            {item.author && <span style={{ fontSize: 12, color: 'var(--color-slate)', ...enSt }}>by {item.author}</span>}
          </div>
          <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1.4, fontWeight: 500, color: 'var(--color-ink)', ...jpSt }}>{item.title}</h1>
          {item.excerpt && (
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.9, color: 'var(--color-slate)', ...jpSt }}>{item.excerpt}</p>
          )}
        </div>

        {/* Body */}
        {item.body && (
          <div className="prose" style={{ maxWidth: 720 }}>
            <RichText content={item.body}/>
          </div>
        )}
      </article>
    </PageShell>
  )
}
