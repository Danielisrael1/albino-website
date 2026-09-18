import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { ArrowUpRight, Spark } from './ui/Icons'
import { individualPartners, partnerGroups } from '../data/site'

export default function Partners() {
  return (
    <section id="partners" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-sky-500" />
                Partners
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] text-ink sm:text-[3rem] lg:text-[3.3rem]">
                None of this
                <span className="text-sky-500"> happens alone</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="text-[1.02rem] leading-[1.75] text-clay">
                Foundations, clinics, government offices, churches and the disability movement.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2" stagger={0.09}>
          {partnerGroups.map((group) => (
            <StaggerItem key={group.label}>
              <h3 className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-clay">
                <Spark size={14} className="text-pink-500" />
                {group.label}
              </h3>
              <ul className="mt-5 space-y-px">
                {group.items.map((item) => (
                  <li key={item}>
                    <div className="group relative flex items-center gap-4 border-b border-ink/10 py-4 transition-all duration-400 ease-spring hover:pl-3">
                      <span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 scale-y-0 rounded-full bg-pink-500 transition-transform duration-400 ease-spring group-hover:scale-y-100" />
                      <span className="font-display text-[1.05rem] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-pink-600">
                        {item}
                      </span>
                      <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-sky-200 transition-all duration-400 group-hover:scale-150 group-hover:bg-sky-500" />
                    </div>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* individuals */}
      <div className="mt-20">
        <Reveal className="container-x">
          <h3 className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-clay">
            <Spark size={14} className="text-sky-500" />
            Individuals who stand with us
          </h3>
        </Reveal>

        <Stagger className="container-x mt-7 flex flex-wrap gap-2.5" stagger={0.045}>
          {individualPartners.map((person) => (
            <StaggerItem
              key={person}
              as="span"
              className="cursor-default rounded-full border border-ink/12 bg-white px-5 py-2.5 font-display text-[0.98rem] font-semibold text-ink transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              {person}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="container-x">
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[1rem] leading-relaxed text-clay">
              Want your organisation on this list?
            </p>
            <a href="#contact" className="btn-outline shrink-0">
              <span>Partner with us</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
