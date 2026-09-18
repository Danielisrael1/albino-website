import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Spark } from './ui/Icons'
import { Glow, Marquee, RotatingBadge } from './ui/Decor'
import { SketchUnderline } from './ui/Motion'
import { org } from '../data/site'

const ribbon = [
  'Advocacy',
  'Sun protection',
  'Education',
  'Skin screening',
  'Legal justice',
  'Safe space',
  'Community dialogue',
  'Hands-on skilling',
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  // Gentle pointer parallax on the portrait stack
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 60, damping: 18 })
  const py = useSpring(my, { stiffness: 60, damping: 18 })
  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 22)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 22)
  }
  const resetMove = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden pt-28 lg:pt-32">
      <Glow className="left-[-12%] top-[6%] h-[420px] w-[420px]" color="pink" />
      <Glow className="right-[-8%] top-[32%] h-[360px] w-[360px]" color="sky" />

      <div className="container-x relative">
        <div
          className="grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24"
          onMouseMove={onMove}
          onMouseLeave={resetMove}
        >
          {/* ---------------- copy ---------------- */}
          <motion.div style={{ y: copyY, opacity: fade }} className="lg:col-span-7 xl:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>
              Women and Children with Albinism in {org.country}
            </motion.span>

            <h1 className="mt-7 font-display text-[3.1rem] font-extrabold leading-[0.92] text-ink sm:text-[4.2rem] lg:text-[4.6rem] xl:text-[5.3rem]">
              {['Changing', 'the'].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.24em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block text-pink-500"
              >
                image
                <SketchUnderline
                  className="absolute -bottom-3 left-0 h-4 w-full sm:-bottom-4 sm:h-5"
                  delay={0.75}
                />
              </motion.span>
              <span className="text-pink-500">.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-xl text-[1.06rem] leading-relaxed text-clay sm:text-[1.14rem]"
            >
              We defend the rights of persons with albinism in Uganda — going the extra mile for
              women and children.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#support" className="btn-pink">
                <span>Support our work</span>
                <ArrowRight size={18} />
              </a>
              <a href="#objectives" className="btn-outline">
                <span>What we do</span>
              </a>
            </motion.div>

          </motion.div>

          {/* ---------------- portrait stack ---------------- */}
          <motion.div
            style={{ y: artY }}
            className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none xl:col-span-6"
          >
            <motion.div style={{ x: px, y: py }} className="relative">
              {/* arch portrait */}
              <motion.figure
                initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mx-auto aspect-[4/5] w-[78%] overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[6px] border-white bg-sand shadow-lift lg:w-[82%]"
              >
                <img
                  src="/images/nawejje-portrait.jpg"
                  alt="Nawejje Doreen Mayanja, Executive Director of WACWAU, at the Africa Albinism Network learning event"
                  className="h-full w-full scale-[1.04] object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-100"
                  style={{ objectPosition: '50% 30%' }}
                  loading="eager"
                />
              </motion.figure>

              {/* secondary portrait */}
              <motion.figure
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-2 bottom-8 h-28 w-28 overflow-hidden rounded-full border-[5px] border-white shadow-card sm:h-36 sm:w-36 lg:-left-4"
              >
                <img
                  src="/images/mother-and-child.jpg"
                  alt="Sumayah, carrying her baby who has albinism"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 22%' }}
                  loading="lazy"
                />
              </motion.figure>

              {/* rotating motto seal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-2 top-0 text-ink sm:-right-4 lg:-right-2"
              >
                <RotatingBadge size={126} solid />
              </motion.div>

              {/* name plate */}
              <motion.figcaption
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 right-0 rounded-2xl border border-ink/10 bg-white/90 px-5 py-3.5 shadow-card backdrop-blur sm:right-4"
              >
                <p className="font-display text-[0.98rem] font-bold leading-tight text-ink">
                  Nawejje Doreen Mayanja
                </p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-pink-500">
                  Executive Director
                </p>
              </motion.figcaption>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* motto ribbon */}
      <div className="relative -mb-6 ml-[-4%] mt-2 w-[108%] rotate-[-1.6deg] border-y-2 border-ink bg-sky-500 py-4 text-white">
        <Marquee
          items={ribbon}
          className="font-display text-[1.05rem] font-bold uppercase tracking-[0.14em] sm:text-[1.3rem]"
          separator={<Spark size={15} className="mx-5 shrink-0 text-white/70 sm:mx-8" />}
        />
      </div>
    </section>
  )
}
