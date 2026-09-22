import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { DotField, RingMark } from './ui/Decor'
import { Bank, Check, Copy, Mail, Phone } from './ui/Icons'
import { useCopy } from '../hooks/useUi'
import { org } from '../data/site'

const waysToHelp = [
  {
    title: 'Sun protection',
    body: 'Sunscreen, wide-brimmed hats, sunglasses and long-sleeved clothes.',
  },
  {
    title: 'School and skilling',
    body: 'Fees, scholastic materials, sewing machines, soap-making supplies.',
  },
  {
    title: 'Health costs',
    body: 'Skin screening, surgery, cancer treatment and eye care.',
  },
  {
    title: 'Time and voice',
    body: 'Volunteer at an outreach, or carry accurate information about albinism.',
  },
]

function DetailRow({ label, value, copyId, copied, onCopy }) {
  const isCopied = copied === copyId
  return (
    <div className="group flex items-start justify-between gap-4 border-b border-ink/10 py-4 last:border-b-0">
      <div className="min-w-0">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clay">{label}</p>
        <p className="mt-1.5 break-words font-display text-[1.05rem] font-bold text-ink">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => onCopy(value, copyId)}
        className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
          isCopied
            ? 'border-pink-500 bg-pink-500 text-white'
            : 'border-ink/15 text-clay hover:border-pink-500 hover:bg-pink-500 hover:text-white'
        }`}
        aria-label={isCopied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      >
        {isCopied ? <Check size={16} /> : <Copy size={15} />}
      </button>
    </div>
  )
}

export default function Support() {
  const { copied, copy } = useCopy()

  return (
    <section
      id="support"
      className="grain relative scroll-mt-24 overflow-hidden bg-sky-500 py-24 text-white sm:py-28 lg:py-32"
    >
      <DotField className="inset-0 text-white/25" opacity={0.3} />
      <RingMark
        size={420}
        variant="mono"
        className="pointer-events-none absolute -right-40 top-6 text-white/15"
      />

      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-white/85">
                Support our work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.02] sm:text-[3rem] lg:text-[3.4rem]">
                How to <span className="text-ink">give</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.14}>
              <p className="text-[1.02rem] leading-[1.75] text-white/85">
                Support goes straight into sun protection, school and skilling, health care and
                outreach.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* bank details */}
          <Reveal delay={0.06} className="lg:col-span-5">
            <div className="h-full rounded-[1.9rem] bg-white p-8 text-ink shadow-lift sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-50 text-pink-600">
                  <Bank size={21} />
                </span>
                <h3 className="font-display text-[1.25rem] font-bold">Give by bank transfer</h3>
              </div>

              <div className="mt-6">
                <DetailRow
                  label="Account name"
                  value={org.bank.accountName}
                  copyId="acc-name"
                  copied={copied}
                  onCopy={copy}
                />
                <DetailRow
                  label="Account number"
                  value={org.bank.accountNumber}
                  copyId="acc-no"
                  copied={copied}
                  onCopy={copy}
                />
                <DetailRow
                  label="Bank"
                  value={org.bank.bankName}
                  copyId="acc-bank"
                  copied={copied}
                  onCopy={copy}
                />
              </div>

              <p className="mt-6 border-l-2 border-pink-500 bg-sand py-3 pl-4 pr-4 text-[0.86rem] leading-relaxed text-clay">
                To give in kind, call or write first, so it reaches the family that needs it most.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${org.phones[0].tel}`} className="btn-pink !px-5 !py-3 text-[0.86rem]">
                  <Phone size={16} />
                  <span>{org.phones[0].display}</span>
                </a>
                <a href={`mailto:${org.email}`} className="btn-outline !px-5 !py-3 text-[0.86rem]">
                  <Mail size={16} />
                  <span>Email us</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* ways to help */}
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7" stagger={0.08}>
            {waysToHelp.map((way, i) => (
              <StaggerItem
                key={way.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/25 bg-white/10 p-7 backdrop-blur-sm transition-all duration-500 ease-spring hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/15"
              >
                <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/75">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-[1.2rem] font-bold leading-snug">
                  {way.title}
                </h3>
                <p className="mt-2.5 text-[0.93rem] leading-[1.68] text-white/80">{way.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
