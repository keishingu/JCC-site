import Link from 'next/link'
import type { NewsItem } from '@/lib/microcms'

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
  return iso.slice(0, 10).replace(/-/g, '.')
}

const enSt: React.CSSProperties = { fontFamily: 'var(--font-en-serif)' }
const jpSt: React.CSSProperties = { fontFamily: 'var(--font-jp)' }

const categories = ['FIELD NOTES', 'TECH. / GEAR', 'EXPEDITION', 'ANNOUNCEMENT']
const tags = ['アイス', '冬壁', '装備', 'アルパイン', '谷川岳', '剱岳', '海外', 'ギア']

export default function NewsBody({ articles, featured }: { articles: NewsItem[]; featured?: NewsItem }) {
  const featuredItem = featured ?? articles.find((a) => a.featured) ?? articles[0]
  const latestArticles = articles.slice(0, 8)

  return (
    <section style={{
      background: 'var(--color-cream)', padding: '50px 56px 60px',
      display: 'grid', gridTemplateColumns: '1fr 220px', gap: 36,
      borderTop: '1px solid rgba(10,22,40,0.08)',
    }}>
      {/* main */}
      <div>
        {/* Featured article */}
        {featuredItem && (
          <div>
            <div style={{ marginBottom: 12, fontSize: 12, letterSpacing: '.22em', color: 'var(--color-slate)', fontWeight: 600, ...enSt }}>
              <span style={{ display: 'inline-block', width: 1, height: 12, background: 'var(--color-navy)', verticalAlign: 'middle', marginRight: 8 }}/>
              FEATURED ARTICLE
            </div>
            <article style={{ background: '#fff', display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 280, border: '1px solid rgba(10,22,40,0.08)' }}>
              <div style={{ position: 'relative', overflow: 'hidden', background: '#111' }}>
                {featuredItem.heroImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={featuredItem.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.6) brightness(.92)' }}/>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,0) 60%)' }}/>
                <div style={{ position: 'absolute', top: 20, left: 22, color: '#fff' }}>
                  <div style={{ fontSize: 10.5, letterSpacing: '.22em', opacity: .85, ...enSt }}>{tagLabels[featuredItem.tag] ?? featuredItem.tag}</div>
                  <div style={{ marginTop: 4, fontSize: 13, letterSpacing: '.06em', opacity: .95, ...enSt }}>{formatDate(featuredItem.publishedAt)}</div>
                </div>
              </div>
              <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.4, color: 'var(--color-ink)', ...jpSt }}>
                  {featuredItem.title}
                </h3>
                {featuredItem.excerpt && (
                  <p style={{ marginTop: 18, fontSize: 12, lineHeight: 1.95, color: 'var(--color-slate)' }}>
                    {featuredItem.excerpt}
                  </p>
                )}
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 22 }}>
                  {featuredItem.author && <span style={{ fontSize: 11, color: 'var(--color-slate)', ...enSt }}>by {featuredItem.author}</span>}
                  <Link href={`/news/${featuredItem.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 14, color: 'var(--color-ink)',
                    textDecoration: 'none', fontWeight: 500, fontSize: 12, letterSpacing: '.14em', ...enSt,
                  }}>
                    <span style={{ width: 26, height: 1, background: 'var(--color-ink)', opacity: .7 }}/>
                    READ MORE
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Latest articles */}
        <div style={{ marginTop: 46 }}>
          <div style={{ marginBottom: 16, fontSize: 12, letterSpacing: '.22em', color: 'var(--color-slate)', fontWeight: 600, ...enSt }}>
            <span style={{ display: 'inline-block', width: 1, height: 12, background: 'var(--color-navy)', verticalAlign: 'middle', marginRight: 8 }}/>
            LATEST ARTICLES
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {latestArticles.map((a) => (
              <article key={a.id}>
                <div style={{ aspectRatio: '3/2', overflow: 'hidden', background: '#222' }}>
                  {a.heroImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.heroImage.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.65) contrast(.98)' }}/>
                  )}
                </div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontSize: 9.5, padding: '3px 8px', border: '1px solid rgba(10,22,40,0.08)', color: 'var(--color-navy)', ...enSt }}>{tagLabels[a.tag] ?? a.tag}</span>
                    <span style={{ fontSize: 10, color: 'var(--color-slate)', ...enSt }}>{formatDate(a.publishedAt)}</span>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.5, color: 'var(--color-ink)', ...jpSt }}>{a.title}</div>
                  {a.author && <div style={{ marginTop: 4, fontSize: 10.5, color: 'var(--color-slate)', ...enSt }}>by {a.author}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: 'var(--color-slate)', fontWeight: 600, marginBottom: 16, ...enSt }}>
            CATEGORIES
          </div>
          {categories.map((c) => (
            <div key={c} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(10,22,40,0.08)', fontSize: 12, color: 'var(--color-slate)' }}>
              <span style={enSt}>{c}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.22em', color: 'var(--color-slate)', fontWeight: 600, marginBottom: 12, ...enSt }}>
            TAGS
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {tags.map((t) => (
              <span key={t} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid rgba(10,22,40,0.08)', color: 'var(--color-slate)', background: 'rgba(255,255,255,.5)' }}>{t}</span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}
