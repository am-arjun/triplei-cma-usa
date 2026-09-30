const WIDTH = 1920
const HEIGHT = 1000
const CENTER_X = WIDTH / 2
const CENTER_Y = HEIGHT / 2
/** Back-wall size as a fraction of the viewport, then successive "depth" rings */
const RINGS = [0.32, 0.4, 0.5, 0.63, 0.8, 1]
const DIVISIONS = 4

function ring(scale: number) {
  const w = (WIDTH * scale) / 2
  const h = (HEIGHT * scale) / 2
  return { x: CENTER_X - w, y: CENTER_Y - h, width: w * 2, height: h * 2 }
}

/** Decorative vanishing-point "room" drawn from concentric rectangles and radial edges. */
export function PerspectiveGrid() {
  const inner = ring(RINGS[0])
  const outer = ring(2)
  const radials: Array<[number, number, number, number]> = []

  const addRadial = (px: number, py: number) => {
    const dx = px - CENTER_X
    const dy = py - CENTER_Y
    const scale = 2 / RINGS[0]
    radials.push([px, py, CENTER_X + dx * scale, CENTER_Y + dy * scale])
  }

  for (let i = 0; i <= DIVISIONS; i += 1) {
    const t = i / DIVISIONS
    addRadial(inner.x + inner.width * t, inner.y)
    addRadial(inner.x + inner.width * t, inner.y + inner.height)
  }
  for (let i = 1; i < DIVISIONS; i += 1) {
    const t = i / DIVISIONS
    addRadial(inner.x, inner.y + inner.height * t)
    addRadial(inner.x + inner.width, inner.y + inner.height * t)
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{
        zIndex: -1,
        color: 'var(--lp-grid-line)',
        opacity: 0.12,
        WebkitMaskImage: 'var(--lp-grid-fade)',
        maskImage: 'var(--lp-grid-fade)',
      }}
    >
      <g fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke">
        {RINGS.map((scale) => {
          const r = ring(scale)
          return <rect key={scale} x={r.x} y={r.y} width={r.width} height={r.height} />
        })}
        {radials.map(([x1, y1, x2, y2], index) => (
          <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
        <rect x={outer.x} y={outer.y} width={outer.width} height={outer.height} />
      </g>
    </svg>
  )
}
