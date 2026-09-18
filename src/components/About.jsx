import { RingMark, DotField } from './ui/Decor'
import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { org } from '../data/site'

function PledgeCard({ tone, label, text, index }) {
  const pink = tone === 'pink'
  return (
    <StaggerItem
      className={`grain group relative overflow-hidden rounded-[2rem] p-8 text-white shadow-lift transition-transform duration-500 ease-spring hover:-translate-y-2 sm:p-10 ${
        pink ? 'bg-pink-500' : 'bg-sky-500'
      }`}
    >
      <DotField className="inset-0 text-white/30" opacity={0.28} />
      <RingMark
        size={190}
        className="pointer-events-none absolute -right-14 -top-14 text-white/20 transition-transform duration-700 ease-spring group-hover:scale-110"
      />
      <div className="relative">
        <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/85">
          {String(index).padStart(2, '0')} — {label}
        </span>
        <p className="mt-6 font-display text-[1.3rem] font-bold leading-[1.3] tracking-tightest sm:text-[1.45rem]">
          {text}
        </p>
      </div>
    </StaggerItem>
  )
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-sky-500" />
                Who we are
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.02] text-ink sm:text-[3.1rem] lg:text-[3.4rem]">
                The rights of persons with albinism,
                <span className="text-sky-500"> made real</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex items-start gap-4 border-l-2 border-sky-500 pl-5">
                <p className="font-quote text-[1.24rem] italic leading-[1.45] text-ink/85 sm:text-[1.36rem]">
                  “{org.motto}.”
                </p>
              </div>
              <p className="mt-4 pl-5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-clay">
                Our motto
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-[1.08rem] leading-[1.75] text-clay sm:text-[1.16rem]">
                WACWAU works for and with persons with albinism in Uganda, going the extra mile for
                the women and children among them. Advocacy, education, health and sun protection —
                carried out where people actually live.
              </p>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
              <PledgeCard tone="pink" label="Our vision" text={org.vision} index={1} />
              <PledgeCard tone="sky" label="Our mission" text={org.mission} index={2} />
            </Stagger>

          </div>
        </div>
      </div>
    </section>
  )
}
