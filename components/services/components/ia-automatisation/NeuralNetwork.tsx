const NODES = [
  { x: 60, y: 80 },
  { x: 60, y: 180 },
  { x: 60, y: 280 },
  { x: 240, y: 60 },
  { x: 240, y: 160 },
  { x: 240, y: 260 },
  { x: 240, y: 360 },
  { x: 420, y: 120 },
  { x: 420, y: 240 },
  { x: 600, y: 180 },
];

const EDGES: [number, number][] = [
  [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
  [3, 7], [4, 7], [4, 8], [5, 7], [5, 8], [6, 8],
  [7, 9], [8, 9],
];

export default function NeuralNetwork() {
  return (
    <svg
      viewBox="0 0 660 420"
      className="h-full w-full"
      role="img"
      aria-label="Réseau neuronal animé"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#05ffe0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#05ffe0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        const n1 = NODES[a];
        const n2 = NODES[b];
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#05ffe0"
            strokeWidth="1"
            strokeOpacity="0.45"
            strokeDasharray="6 12"
            className="animate-ai-flow"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="14"
            fill="url(#nodeGlow)"
            className="animate-ai-pulse"
            style={{
              transformOrigin: `${n.x}px ${n.y}px`,
              animationDelay: `${(i % 4) * 0.3}s`,
            }}
          />
          <circle cx={n.x} cy={n.y} r="4" fill="#05ffe0" />
        </g>
      ))}
    </svg>
  );
}
