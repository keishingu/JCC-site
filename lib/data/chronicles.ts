export type Chronicle = {
  slug: string
  year: string
  title: string
  titleEn: string
  author: string
  area: string
  category: string
  img: string | null
  mono?: boolean
  topo?: boolean
  featured?: boolean
}

export const chronicles: Chronicle[] = [
  {
    slug: 'polar-circus',
    year: '2025',
    title: 'ポーラーサーカス登攀記',
    titleEn: 'Polar Circus, Greenland',
    author: 'K. Sasaki',
    area: '海外・極地',
    category: '海外・極地',
    img: '/photos/icefall-massive.jpg',
    featured: true,
  },
  {
    slug: 'shishapangma-1991',
    year: '1991',
    title: 'ヒマラヤ・シシャパンマ遠征',
    titleEn: 'Shishapangma West Face',
    author: 'T. Katsube',
    area: '海外・ヒマラヤ',
    category: '海外・ヒマラヤ',
    img: '/photos/patagonia-pano.jpg',
  },
  {
    slug: 'tanigawa-1985',
    year: '1985',
    title: '谷川岳 一ノ倉沢 東壁',
    titleEn: 'Ichinokura, Tanigawa-dake',
    author: 'H. Yokoyama',
    area: '国内・谷川岳',
    category: '国内・谷川岳',
    img: '/photos/peak-bw.jpg',
    mono: true,
  },
  {
    slug: 'tsurugi-1977',
    year: '1977',
    title: '剱岳 北壁 冬期単独行',
    titleEn: 'Mt. Tsurugi North Face',
    author: 'J. Furukawa',
    area: '国内・剱岳',
    category: '国内・剱岳',
    img: '/photos/cirque-dusk.jpg',
  },
  {
    slug: 'harinoki-1963',
    year: '1963',
    title: '後立山連峰 針ノ木岳 北壁',
    titleEn: 'Mt. Harinoki North Face',
    author: 'K. Narita',
    area: '国内・後立山',
    category: '国内・後立山',
    img: null,
    topo: true,
  },
  {
    slug: 'paine-blanca-2023',
    year: '2023',
    title: 'パインブランカ北西壁',
    titleEn: 'Paine Blanca NW Face',
    author: 'Y. Nakajima',
    area: '海外・パタゴニア',
    category: '海外・パタゴニア',
    img: '/photos/alpine-traverse.jpg',
  },
  {
    slug: 'matterhorn-2009',
    year: '2009',
    title: 'マッターホルン北壁 登攀記',
    titleEn: 'Matterhorn North Face',
    author: 'A. Watanabe',
    area: '海外・アルプス',
    category: '海外・アルプス',
    img: '/photos/frost-pinnacle.jpg',
  },
  {
    slug: 'annapurna-1980',
    year: '1980',
    title: 'アンナプルナⅣ峰 南壁',
    titleEn: 'Annapurna IV South Face',
    author: 'M. Ushioda',
    area: '海外・ヒマラヤ',
    category: '海外・ヒマラヤ',
    img: '/photos/cirque-descent.jpg',
    mono: true,
  },
  {
    slug: 'kitahotaka-1972',
    year: '1972',
    title: '穂高岳 北穂高沢 左俣奥壁',
    titleEn: 'Kitahotaka-dake',
    author: 'S. Araki',
    area: '国内・穂高',
    category: '国内・穂高',
    img: '/photos/bugaboos-approach.jpg',
  },
  {
    slug: 'kiretto-1968',
    year: '1968',
    title: '大キレット 小窓尾根',
    titleEn: 'Kiretto, Japan Alps',
    author: 'Y. Yokoo',
    area: '国内・剱岳',
    category: '国内・剱岳',
    img: '/photos/ice-silhouette.jpg',
  },
]
