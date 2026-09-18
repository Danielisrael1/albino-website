import { Spark } from './Icons'

/** The logo's concentric rings, reused as a decorative mark. */
export function RingMark({ size = 96, className = '', spin = true, variant = 'brand' }) {
  const mono = variant === 'mono'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${spin ? 'animate-sunspin' : ''} ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke={mono ? 'currentColor' : '#00A0D5'}
        strokeOpacity={mono ? 0.7 : 1}
        strokeWidth="3"
      />
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke={mono ? 'currentColor' : '#C62F7C'}
        strokeOpacity={mono ? 0.55 : 1}
        strokeWidth="2"
        strokeDasharray="3 7"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Slowly turning seal carrying the organisation's own motto. */
export function RotatingBadge({
  size = 168,
  className = '',
  label = 'Changing the image',
  solid = false,
}) {
  const text = `${label}  ·  WACWAU  ·  ${label}  ·  WACWAU  ·  `
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {solid && (
        <span className="absolute inset-0 rounded-full border border-ink/10 bg-paper shadow-card" />
      )}
      <svg viewBox="0 0 200 200" className="relative h-full w-full animate-sunspin">
        <defs>
          <path
            id="badge-curve"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-current font-display"
          style={{ fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}
        >
          <textPath href="#badge-curve" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <Spark size={26} className="text-pink-500" />
      </div>
    </div>
  )
}

/** Seamless horizontal ticker. The second copy is hidden from screen readers. */
export function Marquee({
  items,
  reverse = false,
  speed = 'animate-marquee',
  className = '',
  itemClassName = '',
  separator = <Spark size={14} className="mx-5 shrink-0 opacity-60 sm:mx-7" />,
}) {
  const group = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className={`flex shrink-0 items-center ${itemClassName}`}>
          <span className="whitespace-nowrap">{item}</span>
          {separator}
        </span>
      ))}
    </div>
  )
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${speed}`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}

/** Soft brand-coloured light behind a section. */
export function Glow({ className = '', color = 'pink' }) {
  const tint = color === 'sky' ? 'rgba(0,160,213,0.30)' : 'rgba(198,47,124,0.28)'
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-[90px] animate-breathe ${className}`}
      style={{ background: tint }}
    />
  )
}

/** Fine dotted field, used sparingly to give flat areas some texture. */
export function DotField({ className = '', opacity = null }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        ...(opacity === null ? null : { opacity }),
        backgroundImage: 'radial-gradient(currentColor 1.2px, transparent 1.2px)',
        backgroundSize: '18px 18px',
      }}
    />
  )
}
