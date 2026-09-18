
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

/** Seamless horizontal ticker. The second copy is hidden from screen readers. */
export function Marquee({
  items,
  reverse = false,
  speed = 'animate-marquee',
  className = '',
  itemClassName = '',
  separator = <span className="mx-5 shrink-0 sm:mx-7" aria-hidden="true" />,
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
