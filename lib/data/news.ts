export type NewsItem = {
  slug: string
  tag: 'お知らせ' | '会報' | '募集' | 'FIELD' | 'TECH.' | 'GEAR' | 'EXPEDITION'
  date: string
  title: string
  author?: string
  img?: string
  excerpt?: string
  featured?: boolean
  href?: string
}

export const newsItems: NewsItem[] = [
  {
    slug: 'polar-circus-published',
    tag: 'お知らせ',
    date: '2025.05.20',
    title: '「ポーラーサーカス登攀記」を公開しました',
    href: '/chronicle/polar-circus',
  },
  {
    slug: 'tanigawa-ice-may',
    tag: 'FIELD',
    date: '2025.05.18',
    title: '谷川岳 一ノ倉沢の氷結状況 (5月中旬)',
    author: 'Y. Tanigaki',
    img: '/photos/hero-ice-couloir.jpg',
    href: '/news',
  },
  {
    slug: 'axe-work-basics',
    tag: 'TECH.',
    date: '2025.05.15',
    title: 'アックスワークの基本 — スイングと体重移動',
    author: 'K. Shingu',
    img: '/photos/icefall-wall.jpg',
    href: '/news',
  },
  {
    slug: 'journal-312',
    tag: '会報',
    date: '2025.04.15',
    title: '会報 No.312（2025年 春号）を掲載しました',
    href: '/journal',
  },
  {
    slug: 'gear-spring-2025',
    tag: 'GEAR',
    date: '2025.05.07',
    title: '春山で活躍したギアたち 2025',
    author: 'Y. Kunii',
    img: '/photos/granite-climber.jpg',
    href: '/news',
  },
  {
    slug: 'takiya-winter-report',
    tag: 'FIELD',
    date: '2025.04.28',
    title: '冬季滝谷第四尾根レポート',
    author: 'K. Yamamoto',
    img: '/photos/snow-ridge.jpg',
    href: '/news',
  },
  {
    slug: 'anchor-building-ice',
    tag: 'TECH.',
    date: '2025.04.10',
    title: 'アイスクライミングにおける支点構築',
    author: 'K. Shingu',
    img: '/photos/ice-silhouette.jpg',
    href: '/news',
  },
  {
    slug: 'tsurugi-hayatsuki-march',
    tag: 'FIELD',
    date: '2025.03.22',
    title: '剱岳 早月尾根 2025年3月',
    author: 'Y. Tanigaki',
    img: '/photos/frost-pinnacle.jpg',
    href: '/news',
  },
  {
    slug: 'bivouac-gear-review',
    tag: 'GEAR',
    date: '2025.03.10',
    title: 'ビバーク装備の見直し：シュラフとビビーサック',
    author: 'Y. Kunii',
    img: '/photos/cirque-dusk.jpg',
    href: '/news',
  },
  {
    slug: 'polar-circus-expedition',
    tag: 'EXPEDITION',
    date: '2025.05.20',
    title: 'ポーラーサーカス 準備記録',
    author: 'K. Sasaki',
    img: '/photos/icefall-massive.jpg',
    excerpt: 'グリーンランド遠征に向けた装備の検討とテストの記録。極寒期間のビレイ環境、長時間行動、ビバークを想定したレイヤリングとギア選定について。',
    featured: true,
    href: '/chronicle/polar-circus',
  },
  {
    slug: 'agm-2026',
    tag: 'お知らせ',
    date: '2026.04.18',
    title: '2026年度JCC総会を実施しました',
  },
  {
    slug: 'backissues-archive',
    tag: '会報',
    date: '2025.04.02',
    title: 'バックナンバー No.250 - No.290 をアーカイブ公開',
    href: '/journal',
  },
  {
    slug: 'member-recruitment-2025',
    tag: '募集',
    date: '2025.01.01',
    title: '2025年度 新入会員の募集について',
    href: '/climbers',
  },
  {
    slug: 'anniversary-lecture-2024',
    tag: 'お知らせ',
    date: '2024.12.10',
    title: '創立67周年記念講演会のご案内',
  },
  {
    slug: 'ichinokura-winter',
    tag: 'FIELD',
    date: '2025.02.20',
    title: '厳冬期 谷川岳 一ノ倉沢 烏帽子沢奥壁',
    author: 'Y. Tanigaki',
    img: '/photos/icefall-massive.jpg',
    href: '/news',
  },
]
