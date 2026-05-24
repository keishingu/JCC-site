const p = (n: string) => `/photos/${n}`

export const photos = {
  heroIce:        p('hero-ice-couloir.jpg'),
  iceMassive:     p('icefall-massive.jpg'),
  iceSilhouette:  p('ice-silhouette.jpg'),
  iceTrees:       p('ice-trees.jpg'),
  icefallWall:    p('icefall-wall.jpg'),
  icefallRockies: p('icefall-rockies.jpg'),
  snowRidge:      p('snow-ridge.jpg'),
  cirqueDusk:     p('cirque-dusk.jpg'),
  cirqueDescent:  p('cirque-descent.jpg'),
  alpineTraverse: p('alpine-traverse.jpg'),
  frostPinnacle:  p('frost-pinnacle.jpg'),
  rockyDescent:   p('rocky-descent.jpg'),
  graniteClimber: p('granite-climber.jpg'),
  bugaboos:       p('bugaboos-approach.jpg'),
  rockTexture:    p('rock-texture.jpg'),
  patagonia:      p('patagonia-pano.jpg'),
  peakBW:         p('peak-bw.jpg'),
  peakBW2:        p('peak-bw-2.jpg'),
} as const

export type PhotoKey = keyof typeof photos
