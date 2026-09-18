import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { RingMark } from './ui/Decor'
import { ArrowUpRight, Phone } from './ui/Icons'
import { team } from '../data/site'

const initials = (name) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr|Pr)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

function MemberCard({ member }) {
  const pink = member.tone === 'pink'
  return (
    <StaggerItem
      as="article"
      className="group relative overflow-hidden rounded-[1.7rem] border border-ink/10 bg-white p-7 transition-all duration-500 ease-spring hover:-translate-y-2 hover:border-transparent hover:shadow-lift"
    >
      <RingMark
        size={128}
        variant="mono"
        className={`pointer-events-none absolute -right-8 -top-8 transition-all duration-700 ease-spring group-hover:scale-110 ${
          pink ? 'text-pink-100' : 'text-sky-100'
        }`}
      />
      <div className="relative">
        {member.photo ? (
          <span className="block h-16 w-16 overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/10">
            <img
              src={member.photo}
              alt={`${member.name}, ${member.role} of WACWAU`}
              width="64"
              height="64"
              loading="lazy"
              style={{ objectPosition: member.focus || '50% 30%' }}
              className="h-full w-full object-cover transition-transform duration-500 ease-spring group-hover:scale-105"
            />
          </span>
        ) : (
          <span
            className={`grid h-16 w-16 place-items-center rounded-2xl font-display text-[1.4rem] font-extrabold text-white transition-transform duration-500 ease-spring group-hover:scale-105 ${
              pink ? 'bg-pink-500' : 'bg-sky-500'
            }`}
          >
            {initials(member.name)}
          </span>
        )}
        <h3 className="mt-6 font-display text-[1.18rem] font-bold leading-snug text-ink">
          {member.name}
        </h3>
        <p
          className={`mt-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] ${
            pink ? 'text-pink-500' : 'text-sky-600'
          }`}
        >
          {member.role}
        </p>
        {member.tel ? (
          <a
            href={`tel:${member.tel}`}
            className="mt-5 inline-flex items-center gap-2.5 text-[0.92rem] font-medium text-clay transition-colors duration-300 hover:text-ink"
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 ${
                pink
                  ? 'bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white'
                  : 'bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white'
              }`}
            >
              <Phone size={15} />
            </span>
            {member.phone}
          </a>
        ) : null}
      </div>
    </StaggerItem>
  )
}

export default function Team() {
  const [lead, ...rest] = team
  return (
    <section id="team" className="relative scroll-mt-24 bg-sand py-24 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-sky-500" />
                Leadership
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] text-ink sm:text-[3rem] lg:text-[3.3rem]">
                The people who
                <span className="text-sky-500"> pick up the phone</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="text-[1.02rem] leading-[1.75] text-clay">
                Call the office and ask for the person whose work it is.
              </p>
            </Reveal>
          </div>
        </div>

        {/* featured — Executive Director */}
        <Reveal delay={0.06}>
          <article className="group mt-14 overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-card transition-shadow duration-500 hover:shadow-lift">
            <div className="grid md:grid-cols-12">
              <div className="relative md:col-span-5 lg:col-span-4">
                <div className="aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[26rem]">
                  <img
                    src={lead.photo}
                    alt={`${lead.name}, ${lead.role} of WACWAU`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.04]"
                    style={{ objectPosition: lead.focus }}
                  />
                </div>
              </div>

              <div className="relative flex flex-col justify-center p-8 md:col-span-7 sm:p-10 lg:col-span-8 lg:p-14">
                <RingMark
                  size={150}
                  variant="mono"
                  className="pointer-events-none absolute -right-6 -top-6 text-pink-100"
                />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-pink-500 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white">
                    {lead.role}
                  </span>
                  <h3 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.06] text-ink sm:text-[2.5rem]">
                    {lead.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-[1rem] leading-[1.7] text-clay">
                    Doreen leads WACWAU's advocacy, from household visits at home to the regional
                    tables where the rights of persons with albinism are argued.
                  </p>
                  <p className="mt-3 text-[0.8rem] text-clay/80">
                    Pictured at the Africa Albinism Network learning event, Harare.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href={`tel:${lead.tel}`} className="btn-ink !px-6">
                      <Phone size={17} />
                      <span>{lead.phone}</span>
                    </a>
                    <a href="#contact" className="group/link inline-flex items-center gap-2 text-[0.92rem] font-semibold text-ink">
                      <span className="border-b-2 border-pink-500/40 pb-0.5 transition-colors group-hover/link:border-pink-500">
                        Write to the office
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {rest.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
