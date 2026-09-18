import { motion, useReducedMotion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

/** Single element that rises into place the first time it is scrolled into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
  duration = 0.75,
  amount = 0.2,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.35 : duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/** Parent that releases its children one after another. */
export function Stagger({
  children,
  className = '',
  stagger = 0.085,
  delayChildren = 0.04,
  amount = 0.15,
  as = 'div',
}) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -6% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, className = '', y = 24, as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** A rough, hand-drawn rule that draws itself under a word. */
export function SketchUnderline({ className = '', color = '#C62F7C', delay = 0.35, width = 4.5 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 22"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M5 15.5C58 7.4 112 4.2 166 5.6c40 1 80 4.4 149 6.9"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.05, delay, ease: 'easeInOut' }}
      />
      <motion.path
        d="M22 19.4c46-4.6 92-6 138-5.1"
        stroke={color}
        strokeWidth={width * 0.5}
        strokeLinecap="round"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, delay: delay + 0.25, ease: 'easeInOut' }}
      />
    </svg>
  )
}
