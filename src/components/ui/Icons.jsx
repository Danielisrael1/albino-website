// Hand-drawn icon set. Deliberately not a stock icon pack — the stroke weight
// and the slightly loose geometry are meant to match the logo's warmth.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, size = 24, className = '', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...base}
      {...rest}
    >
      {children}
    </svg>
  )
}

export const Megaphone = (p) => (
  <Svg {...p}>
    <path d="M4 10.2v3.6a1.1 1.1 0 0 0 1.1 1.1h2.2l4.2 4V5.1l-4.2 4H5.1A1.1 1.1 0 0 0 4 10.2z" />
    <path d="M15.6 9.2a4 4 0 0 1 0 5.6" />
    <path d="M18.1 6.4a7.6 7.6 0 0 1 0 11.2" />
    <path d="M7.6 15.2 8.8 20" />
  </Svg>
)

export const Broadcast = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="1.9" />
    <path d="M8.4 8.4a5.1 5.1 0 0 0 0 7.2" />
    <path d="M15.6 8.4a5.1 5.1 0 0 1 0 7.2" />
    <path d="M5.6 5.6a9 9 0 0 0 0 12.8" />
    <path d="M18.4 5.6a9 9 0 0 1 0 12.8" />
  </Svg>
)

export const Shield = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 19 6v5.4c0 4.4-2.9 7.8-7 9.4-4.1-1.6-7-5-7-9.4V6l7-2.8z" />
    <path d="M9.1 11.9l2.1 2.2 3.8-4.2" />
  </Svg>
)

export const Book = (p) => (
  <Svg {...p}>
    <path d="M12 6.6S10 4.9 6.9 4.9c-1.2 0-1.9.2-2.2.3v12.3c.4-.1 1-.3 2.2-.3 3.1 0 5.1 1.7 5.1 1.7" />
    <path d="M12 6.6s2-1.7 5.1-1.7c1.2 0 1.9.2 2.2.3v12.3c-.4-.1-1-.3-2.2-.3-3.1 0-5.1 1.7-5.1 1.7" />
    <path d="M12 6.6v12.6" />
  </Svg>
)

export const Sun = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4.1" />
    <path d="M12 2.6v2.1M12 19.3v2.1M21.4 12h-2.1M4.7 12H2.6M18.6 5.4l-1.5 1.5M6.9 17.1l-1.5 1.5M18.6 18.6l-1.5-1.5M6.9 6.9 5.4 5.4" />
  </Svg>
)

export const Scales = (p) => (
  <Svg {...p}>
    <path d="M12 5.4v13.4M8.4 19.4h7.2" />
    <circle cx="12" cy="4.1" r="1.2" />
    <path d="M5.6 8.1 12 6.8l6.4 1.3" />
    <path d="M2.6 13.3a3 3 0 0 0 6 0L5.6 8.1 2.6 13.3z" />
    <path d="M15.4 13.3a3 3 0 0 0 6 0l-3-5.2-3 5.2z" />
  </Svg>
)

export const HeartPlus = (p) => (
  <Svg {...p}>
    <path d="M12 20.4S4.7 16 4.7 10.8a3.9 3.9 0 0 1 7.3-2 3.9 3.9 0 0 1 7.3 2c0 5.2-7.3 9.6-7.3 9.6z" />
    <path d="M12 9.9v3.4M10.3 11.6h3.4" />
  </Svg>
)

export const Home = (p) => (
  <Svg {...p}>
    <path d="M3.8 11.2 12 4.6l8.2 6.6" />
    <path d="M6.2 9.6V19.4h11.6V9.6" />
    <path d="M9.9 19.4v-4.6h4.2v4.6" />
  </Svg>
)

export const People = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="7.2" r="2.6" />
    <path d="M7.9 19.4c0-2.6 1.8-4.5 4.1-4.5s4.1 1.9 4.1 4.5" />
    <circle cx="5" cy="10.8" r="1.8" />
    <path d="M2 19.4c0-2 1.2-3.4 3-3.4" />
    <circle cx="19" cy="10.8" r="1.8" />
    <path d="M22 19.4c0-2-1.2-3.4-3-3.4" />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M7.4 3.9 9.7 7.4 8 9.1a11.8 11.8 0 0 0 5.2 5.2l1.7-1.7 3.5 2.3-.7 2.4a2 2 0 0 1-2.3 1.4C9.9 17.5 6.5 14.1 4.6 8a2 2 0 0 1 1.4-2.3l1.4-1.8z" />
  </Svg>
)

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="2.9" y="5.2" width="18.2" height="13.6" rx="2.4" />
    <path d="m3.6 6.6 7.2 5.4a2 2 0 0 0 2.4 0l7.2-5.4" />
  </Svg>
)

export const Facebook = (p) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z" />
  </Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h14.2M12.8 6.1 18.7 12l-5.9 5.9" />
  </Svg>
)

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8.6 6.8h8.6v8.6" />
  </Svg>
)

export const ArrowDown = (p) => (
  <Svg {...p}>
    <path d="M12 4.6v14.2M6.1 12.8 12 18.7l5.9-5.9" />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M3.8 7.4h16.4M3.8 12h16.4M3.8 16.6h10.4" />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6.2 6.2l11.6 11.6M17.8 6.2 6.2 17.8" />
  </Svg>
)

export const Copy = (p) => (
  <Svg {...p}>
    <rect x="8.4" y="8.4" width="11.2" height="11.2" rx="2.2" />
    <path d="M15.6 5.6a2.2 2.2 0 0 0-2.2-2.2H6.6a3.2 3.2 0 0 0-3.2 3.2v6.8a2.2 2.2 0 0 0 2.2 2.2" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5.2 12.6 4.4 4.4L18.8 7" />
  </Svg>
)

export const Spark = (p) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M12 2.4c.9 4.2 2.5 5.8 6.7 6.7-4.2.9-5.8 2.5-6.7 6.7-.9-4.2-2.5-5.8-6.7-6.7 4.2-.9 5.8-2.5 6.7-6.7zM18.4 15.2c.5 2.1 1.3 2.9 3.4 3.4-2.1.5-2.9 1.3-3.4 3.4-.5-2.1-1.3-2.9-3.4-3.4 2.1-.5 2.9-1.3 3.4-3.4z" />
  </Svg>
)

export const Location = (p) => (
  <Svg {...p}>
    <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </Svg>
)

export const Bank = (p) => (
  <Svg {...p}>
    <path d="M3.4 9.4 12 4.2l8.6 5.2" />
    <path d="M5.6 10.4v7.4M10 10.4v7.4M14 10.4v7.4M18.4 10.4v7.4" />
    <path d="M3.4 19.8h17.2" />
  </Svg>
)

export const iconMap = {
  megaphone: Megaphone,
  broadcast: Broadcast,
  shield: Shield,
  book: Book,
  sun: Sun,
  scales: Scales,
  heart: HeartPlus,
  home: Home,
  people: People,
}
