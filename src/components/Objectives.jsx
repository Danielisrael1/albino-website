import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { iconMap, ArrowUpRight } from './ui/Icons'
import { DotField } from './ui/Decor'
import { objectives } from '../data/site'

function ObjectiveCard({ item, index }) {
  const Icon = iconMap[item.icon]
  const pink = item.tone === 'pink'
  return (
    <StaggerItem
      as="article"
      className="group relative h-full overflow-hidden rounded-[1.9rem] border border-ink/10 bg-white p-7 transition-all duration-500 ease-spring hover:-translate-y-2 hover:border-transparent hover:shadow-lift sm:p-8"
    >
      {/* colour wipe */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-y-full transition-transform duration-[650ms] ease-spring group-hover:translate-y-0 ${
          pink ? 'bg-pink-500' : 'bg-sky-500'
        }`}
      />
      <DotField className="inset-0 text-white/35 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-pink-50 text-pink-600 transition-all duration-500 ease-spring group-hover:bg-white/15 group-hover:text-white">
            <Icon size={27} />
          </span>
          <span className="font-display text-[2.6rem] font-extrabold leading-none text-ink/10 transition-colors duration-500 group-hover:text-white/30">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-7 font-display text-[1.24rem] font-bold leading-[1.25] text-ink transition-colors duration-500 group-hover:text-white">
          {item.title}
        </h3>
        <p className="mt-3.5 text-[0.95rem] leading-[1.68] text-clay transition-colors duration-500 group-hover:text-white/90">
          {item.body}
        </p>

      </div>
    </StaggerItem>
  )
}

export default function Objectives() {
  return (
    <section id="objectives" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                What we do
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] text-ink sm:text-[3rem] lg:text-[3.3rem]">
                <span className="text-sky-500">Nine</span> objectives.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="text-[1.02rem] leading-[1.75] text-clay">
                What WACWAU works on, from a bottle of sunscreen to a court case.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {objectives.map((item, i) => (
            <ObjectiveCard key={item.id} item={item} index={i} />
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-[1.9rem] border border-ink/10 bg-ink p-8 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <p className="max-w-xl font-display text-[1.35rem] font-bold leading-snug sm:text-[1.6rem]">
              Every objective on this list runs on funding.
            </p>
            <a href="#support" className="btn-light shrink-0">
              <span>Support our work</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
