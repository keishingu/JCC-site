export type JournalIssue = {
  no: string
  date: string
  cover: string | undefined
  sepia?: boolean
  mono?: boolean
  topo?: boolean
}

export const journalIssues: JournalIssue[] = [
  { no: '312', date: '2025 春号', cover: '/photos/frost-pinnacle.jpg' },
  { no: '311', date: '2024 冬号', cover: '/photos/icefall-massive.jpg' },
  { no: '310', date: '2024 秋号', cover: '/photos/bugaboos-approach.jpg', sepia: true },
  { no: '309', date: '2024 夏号', cover: '/photos/snow-ridge.jpg', mono: true },
  { no: '308', date: '2023 冬号', cover: '/photos/cirque-dusk.jpg' },
  { no: '307', date: '2023 秋号', cover: '/photos/alpine-traverse.jpg' },
  { no: '306', date: '2023 夏号', cover: '/photos/icefall-wall.jpg' },
  { no: '305', date: '2022 冬号', cover: '/photos/ice-silhouette.jpg' },
  { no: '304', date: '2022 秋号', cover: '/photos/peak-bw.jpg' },
  { no: '303', date: '2022 夏号', cover: undefined, topo: true },
  { no: '302', date: '2022 春号', cover: '/photos/cirque-descent.jpg' },
  { no: '301', date: '2021 冬号', cover: '/photos/hero-ice-couloir.jpg', sepia: true },
  { no: '300', date: '2021 秋号', cover: '/photos/granite-climber.jpg', mono: true },
  { no: '299', date: '2021 夏号', cover: '/photos/patagonia-pano.jpg' },
  { no: '298', date: '2021 春号', cover: '/photos/rocky-descent.jpg' },
]
