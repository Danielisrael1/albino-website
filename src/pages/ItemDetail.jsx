import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Motion'
import { ArrowRight, Location } from '../components/ui/Icons'
import {
  fetchBySlug,
  fetchPhotos,
  formatMoney,
  isConfigured,
  progressOf,
} from '../lib/supabase'

const TABLE = { project: 'projects', fundraiser: 'fundraisers' }

const prettyDate = (value) =>
  value
    ? new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

export default function ItemDetail({ kind }) {
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  const [photos, setPhotos] = useState([])
  const [state, setState] = useState(isConfigured ? 'loading' : 'missing')

  useEffect(() => {
    if (!isConfigured) return
    let cancelled = false
    setState('loading')
    fetchBySlug(TABLE[kind], slug)
      .then(async (row) => {
        if (cancelled) return
        if (!row) {
          setState('missing')
          return
        }
        setItem(row)
        setState('ready')
        const media = await fetchPhotos(kind, row.id).catch(() => [])
        if (!cancelled) setPhotos(media)
      })
      .catch(() => setState('missing'))
    return () => {
      cancelled = true
    }
  }, [kind, slug])

  if (state !== 'ready') {
    return (
      <main id="main" className="container-x grid min-h-[60vh] place-items-center pt-28">
        <div className="text-center">
          <p className="font-display text-[1.4rem] font-bold text-ink">
            {state === 'loading' ? 'Loading…' : 'We could not find that one'}
          </p>
          {state !== 'loading' && (
            <Link to="/projects" className="btn-outline mt-6">
              <span>Back to projects</span>
            </Link>
          )}
        </div>
      </main>
    )
  }

  const isFundraiser = kind === 'fundraiser'
  const raised = isFundraiser ? item.raised_amount : item.amount_raised
  const target = isFundraiser ? item.goal_amount : item.budget
  const pct = progressOf(raised, target)
  const meta = [
    item.location,
    prettyDate(item.date_started),
    Number(item.beneficiaries) > 0
      ? `${Number(item.beneficiaries).toLocaleString('en-UG')} people reached`
      : null,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <main id="main" className="pt-28 lg:pt-36">
      <article className="container-x">
        <Reveal>
          <Link to="/projects" className="text-[0.85rem] font-semibold text-clay transition-colors hover:text-ink">
            Back to projects
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-3xl font-display text-[2.3rem] font-extrabold leading-[1.04] text-ink sm:text-[3rem]">
            {item.title}
          </h1>
        </Reveal>

        {meta && (
          <Reveal delay={0.1}>
            <p className="mt-4 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-clay">
              <Location size={15} className="text-pink-600" />
              {meta}
            </p>
          </Reveal>
        )}



        {pct != null && (
          <Reveal delay={0.16}>
            <div className="mt-9 max-w-xl rounded-[1.6rem] border border-ink/10 bg-white p-7">
              <div className="h-2.5 overflow-hidden rounded-full bg-sand">
                <div className="h-full rounded-full bg-pink-500 transition-all duration-1000" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-4 text-[0.98rem] text-clay">
                <span className="font-display text-[1.25rem] font-bold text-ink">
                  {formatMoney(raised, item.currency)}
                </span>{' '}
                raised of {formatMoney(target, item.currency)}
              </p>
              {item.deadline && (
                <p className="mt-1.5 text-[0.85rem] text-clay">Closes on {prettyDate(item.deadline)}</p>
              )}
              <Link to="/#support" className="btn-pink mt-6">
                <span>{isFundraiser ? 'Give to this appeal' : 'Support this work'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        )}

        {photos.length > 0 && (
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {photos.map((photo, i) => (
              <StaggerItem
                key={photo.id}
                as="figure"
                className={`overflow-hidden rounded-[1.6rem] bg-sand ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt || ''}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                />
              </StaggerItem>
            ))}
          </Stagger>
        )}

        {item.description && (
          <Reveal delay={0.08}>
            <div className="mt-12 max-w-2xl space-y-5 pb-20 text-[1.05rem] leading-[1.8] text-clay">
              {item.description.split(/\n{2,}/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        )}
      </article>
    </main>
  )
}
