import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Motion'
import { ArrowRight, ArrowUpRight, Location } from '../components/ui/Icons'
import {
  fetchFundraisers,
  fetchProjects,
  formatMoney,
  isConfigured,
  progressOf,
} from '../lib/supabase'

const prettyDate = (value) =>
  value
    ? new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

function Progress({ raised, goal, currency }) {
  const pct = progressOf(raised, goal)
  if (pct == null) return null
  return (
    <div className="mt-5">
      <div className="h-2 overflow-hidden rounded-full bg-sand">
        <div className="h-full rounded-full bg-pink-500 transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2.5 text-[0.85rem] text-clay">
        <span className="font-semibold text-ink">{formatMoney(raised, currency)}</span> raised of{' '}
        {formatMoney(goal, currency)}
      </p>
    </div>
  )
}

function FundraiserCard({ item }) {
  return (
    <StaggerItem as="article" className="card card-hover group overflow-hidden">
      <Link to={`/fundraisers/${item.slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden bg-sand">
          {item.cover_url ? (
            <img
              src={item.cover_url}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-spring group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="p-7">
          <span className="chip-pink">
            {item.status === 'closed' ? 'Closed' : 'Open appeal'}
          </span>
          <h3 className="mt-4 font-display text-[1.3rem] font-bold leading-snug text-ink">{item.title}</h3>
          {item.summary && <p className="mt-2.5 text-[0.95rem] leading-relaxed text-clay">{item.summary}</p>}
          <Progress raised={item.raised_amount} goal={item.goal_amount} currency={item.currency} />
          <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-ink">
            Read the appeal
            <ArrowUpRight size={17} className="text-pink-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </StaggerItem>
  )
}

function ProjectCard({ item }) {
  const meta = [item.location, prettyDate(item.happened_on)].filter(Boolean).join(' · ')
  return (
    <StaggerItem as="article" className="card card-hover group overflow-hidden">
      <Link to={`/projects/${item.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-sand">
          {item.cover_url ? (
            <img
              src={item.cover_url}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-spring group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="p-6">
          {meta && (
            <p className="flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-clay">
              <Location size={14} className="text-pink-600" />
              {meta}
            </p>
          )}
          <h3 className="mt-3 font-display text-[1.18rem] font-bold leading-snug text-ink">{item.title}</h3>
          {item.summary && <p className="mt-2 text-[0.92rem] leading-relaxed text-clay">{item.summary}</p>}
        </div>
      </Link>
    </StaggerItem>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [fundraisers, setFundraisers] = useState([])
  const [state, setState] = useState(isConfigured ? 'loading' : 'unconfigured')

  useEffect(() => {
    if (!isConfigured) return
    Promise.all([fetchProjects(), fetchFundraisers()])
      .then(([p, f]) => {
        setProjects(p)
        setFundraisers(f)
        setState('ready')
      })
      .catch(() => setState('error'))
  }, [])

  const nothingYet = state === 'ready' && projects.length === 0 && fundraisers.length === 0

  return (
    <main id="main" className="pt-28 lg:pt-36">
      <section className="container-x">
        <Reveal>
          <span className="eyebrow">Our work</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] text-ink sm:text-[3.4rem]">
            Projects and <span className="text-sky-500">appeals</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.75] text-clay">
            What we have done lately, and what we are raising for now. Every appeal here is for a
            specific need, with a figure attached to it.
          </p>
        </Reveal>
      </section>

      {(state === 'loading' || state === 'unconfigured' || state === 'error' || nothingYet) && (
        <section className="container-x py-20">
          <div className="rounded-[1.9rem] border border-ink/10 bg-white p-10 text-center">
            <p className="font-display text-[1.2rem] font-bold text-ink">
              {state === 'loading' ? 'Loading…' : 'Nothing here just yet'}
            </p>
            <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-clay">
              {state === 'loading'
                ? 'Fetching the latest work.'
                : 'Projects and appeals will appear here as soon as they are published. In the meantime, the work itself is described across the rest of the site.'}
            </p>
            {state !== 'loading' && (
              <Link to="/#objectives" className="btn-outline mt-7">
                <span>See what we do</span>
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </section>
      )}

      {fundraisers.length > 0 && (
        <section className="container-x py-16 sm:py-20">
          <Reveal>
            <h2 className="font-display text-[1.9rem] font-extrabold leading-tight text-ink sm:text-[2.3rem]">
              Open <span className="text-pink-500">appeals</span>.
            </h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-6 lg:grid-cols-2">
            {fundraisers.map((item) => (
              <FundraiserCard key={item.id} item={item} />
            ))}
          </Stagger>
        </section>
      )}

      {projects.length > 0 && (
        <section className="container-x py-16 sm:py-20">
          <Reveal>
            <h2 className="font-display text-[1.9rem] font-extrabold leading-tight text-ink sm:text-[2.3rem]">
              Recent <span className="text-sky-500">projects</span>.
            </h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Stagger>
        </section>
      )}

      <section className="container-x pb-24 pt-4">
        <div className="flex flex-col items-start gap-5 rounded-[1.9rem] bg-ink p-9 text-paper sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-[1.3rem] font-bold leading-snug sm:text-[1.5rem]">
            Every project on this page began with someone deciding to fund it.
          </p>
          <Link to="/#support" className="btn-light shrink-0">
            <span>Support our work</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
