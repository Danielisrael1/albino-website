import { motion } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { circleOfCare } from '../data/site'

/** Dotted line that links the three cards, echoing the held hands in the logo. */
function Chain() {
  return (
    <svg
      className="pointer-events-none absolute left-0 right-0 top-[34%] hidden h-10 w-full lg:block"
      viewBox="0 0 1000 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M170 20 C 300 -8, 380 44, 500 20 S 700 -6, 830 20"
        stroke="#00A0D5"
        strokeWidth="2.5"
        strokeDasharray="2 12"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export default function CircleOfCare() {
  return (
    <section className="relative overflow-hidden bg-sand py-24 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                Who we walk with
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.04] text-ink sm:text-[3rem]">
                Albinism is never carried
                <span className="text-sky-500"> by one person alone</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.14}>
              <p className="text-[1.04rem] leading-[1.75] text-clay sm:text-[1.1rem]">
                A child with albinism has a mother who is often blamed for it. A mother with
                albinism has children who carry the stigma too. So we hold the whole family.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative mt-16">
          <Chain />
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {circleOfCare.map((group, i) => (
              <StaggerItem
                key={group.id}
                as="article"
                className={`group relative ${i === 1 ? 'lg:mt-14' : ''} ${
                  i === 2 ? 'sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[5px] border-white bg-white shadow-card transition-all duration-500 ease-spring group-hover:-translate-y-2 group-hover:shadow-lift">
                  <img
                    src={group.photo}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-spring group-hover:scale-[1.06]"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <span
                    className={`absolute left-4 top-4 z-10 rounded-full px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white ${
                      group.tone === 'pink' ? 'bg-pink-500' : 'bg-sky-500'
                    }`}
                  >
                    {group.label}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[1.32rem] font-bold leading-snug text-ink">
                  {group.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-clay">{group.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
