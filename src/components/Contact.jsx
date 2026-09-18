import { useState } from 'react'
import { Reveal } from './ui/Motion'
import { RingMark } from './ui/Decor'
import { ArrowUpRight, Check, Facebook, Location, Mail, Phone } from './ui/Icons'
import { org } from '../data/site'

const topics = [
  'General enquiry',
  'A family that needs help',
  'Partnership or funding',
  'Volunteering',
  'Media and speaking',
]

function ContactRow({ icon: Icon, label, value, href, external, tone = 'pink', tight = false }) {
  const chip =
    tone === 'sky'
      ? 'bg-sky-50 text-sky-600 group-hover:bg-sky-500'
      : 'bg-pink-50 text-pink-600 group-hover:bg-pink-500'
  const inner = (
    <>
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-400 ease-spring group-hover:scale-105 group-hover:text-white ${chip}`}
      >
        <Icon size={19} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clay">
          {label}
        </span>
        <span
          className={`mt-1 block font-display font-semibold text-ink ${
            tight
              ? 'break-all font-sans text-[0.88rem] tracking-tight'
              : 'break-words text-[1.02rem]'
          }`}
        >
          {value}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          size={17}
          className="ml-auto mt-1 shrink-0 self-start text-clay transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink-500"
        />
      )}
    </>
  )

  const cls =
    'group flex items-start gap-4 border-b border-ink/10 py-5 first:pt-0 last:border-b-0'

  return href ? (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: topics[0],
    message: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `${form.topic}: ${form.name || 'website enquiry'}`
    const body = `${form.message}\n\n---\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\nSent from the WACWAU website`
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'w-full rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-[0.98rem] text-ink placeholder:text-clay/60 transition-colors duration-200 focus:border-pink-500 focus:outline-none'

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-sand py-24 sm:py-28 lg:py-32">
      <RingMark
        size={360}
        variant="mono"
        className="pointer-events-none absolute -left-36 bottom-4 text-white/70"
      />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* details */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-pink-500" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] text-ink sm:text-[2.9rem]">
                Talk to us
                <span className="text-pink-500">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[1.02rem] leading-[1.7] text-clay">
                Families looking for help, and organisations looking to partner. Start here.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 rounded-[1.9rem] border border-ink/10 bg-white p-7 sm:p-8">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={org.email}
                  href={`mailto:${org.email}`}
                  tight
                />
                {org.phones.map((phone, i) => (
                  <ContactRow
                    key={phone.tel}
                    icon={Phone}
                    label={phone.who}
                    value={phone.display}
                    href={`tel:${phone.tel}`}
                    tone={i === 0 ? 'sky' : 'pink'}
                  />
                ))}
                <ContactRow
                  icon={Facebook}
                  label="Facebook"
                  value={org.facebook.label}
                  href={org.facebook.url}
                  tone="sky"
                  external
                />
                <ContactRow icon={Location} label="Where we work" value="Uganda" />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-card sm:p-10"
              >
                <h3 className="font-display text-[1.4rem] font-bold text-ink">Send a message</h3>
                <p className="mt-2 text-[0.92rem] text-clay">
                  This opens your email app with the message ready to send.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-clay">
                      Your name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Name"
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-clay">
                      Your email
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className={field}
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-clay">
                    What is it about?
                  </span>
                  <select value={form.topic} onChange={update('topic')} className={field}>
                    {topics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-clay">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us what you need, or what you can offer."
                    className={`${field} resize-y`}
                  />
                </label>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-pink">
                    <span>Send message</span>
                    <ArrowUpRight size={18} />
                  </button>
                  {sent && (
                    <span className="inline-flex items-start gap-2 text-[0.9rem] font-medium text-sky-700">
                      <Check size={17} className="mt-0.5 shrink-0" />
                      <span>
                        Your email app should now be open. If nothing happened, write to{' '}
                        <a href={`mailto:${org.email}`} className="underline underline-offset-2">
                          {org.email}
                        </a>
                        .
                      </span>
                    </span>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
