export type Member = {
  name: string
  role?: string
  nameEn: string
  meta: string
  style: string
  records: [string, string][]
  img: string
}

export const members: Member[] = [
  {
    name: '谷垣 優',
    role: '代表',
    nameEn: 'Yu Tanigaki',
    meta: '1986年生まれ　埼玉県在住',
    style: '冬季アルパイン・アイスクライミング',
    records: [
      ['2026', 'シートゥサミットフォール'],
      ['2024', '谷川岳 一ノ倉沢 烏帽子沢奥壁 大氷柱'],
      ['2023', '谷川岳 一ノ倉沢 滝沢第三スラブ'],
    ],
    img: '/photos/hero-ice-couloir.jpg',
  },
  {
    name: '新宮 圭',
    nameEn: 'Kei Shingu',
    meta: '1989年生まれ　神奈川県在住',
    style: '海外アイス・ミックスクライミング',
    records: [
      ['2016', 'バガブー スノーパッチスパイヤー　ノースサミットダイレクト'],
      ['2015', 'カナディアンロッキー　ネメシス'],
      ['2014', 'カナディアンロッキー　ポーラーサーカス'],
    ],
    img: '/photos/ice-silhouette.jpg',
  },
  {
    name: '國井 悠里',
    nameEn: 'Yuri Kunii',
    meta: '1986年生まれ　神奈川県在住',
    style: '冬季アルパイン・アイスクライミング',
    records: [
      ['2026', 'シートゥサミットフォール'],
      ['2024', '谷川岳 一ノ倉沢 烏帽子沢奥壁 大氷柱'],
      ['2023', '谷川岳 一ノ倉沢 滝沢第三スラブ'],
    ],
    img: '/photos/icefall-wall.jpg',
  },
  {
    name: '山本 絋太郎',
    nameEn: 'Kotaro Yamamoto',
    meta: '2004年生まれ　東京都在住',
    style: '冬季アルパイン',
    records: [
      ['2026', '冬季 滝谷第四尾根'],
    ],
    img: '/photos/cirque-dusk.jpg',
  },
]
