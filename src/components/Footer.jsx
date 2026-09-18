import { ArrowDown, Facebook, Mail, Phone } from './ui/Icons'
import { org } from '../data/site'

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'objectives', label: 'Our work' },
  { id: 'team', label: 'Team' },
  { id: 'partners', label: 'Partners' },
  { id: 'support', label: 'Support' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <div className="flex items-center gap-4">
              <img src="/images/wacwau-logo.png" alt="" width="64" height="64" className="h-16 w-16" />
              <div>
                <p className="font-display text-[1.4rem] font-extrabold leading-none">WACWAU</p>
                <p className="mt-1.5 text-[0.76rem] font-medium uppercase tracking-[0.14em] text-paper/60">
                  {org.motto}
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-[0.98rem] leading-[1.7] text-paper/70">
              {org.name}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={org.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-all duration-300 hover:border-pink-500 hover:bg-pink-500"
                aria-label="WACWAU on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`mailto:${org.email}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-all duration-300 hover:border-sky-500 hover:bg-sky-500"
                aria-label="Email WACWAU"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${org.phones[0].tel}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 text-paper transition-all duration-300 hover:border-pink-500 hover:bg-pink-500"
                aria-label="Call WACWAU"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-paper/65">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group inline-flex items-center gap-2 text-[0.98rem] text-paper/75 transition-colors hover:text-pink-300"
                  >
                    <span className="h-px w-0 bg-pink-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-4">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-paper/65">
              Reach the office
            </h3>
            <ul className="mt-5 space-y-3.5 text-[0.96rem]">
              <li>
                <a href={`mailto:${org.email}`} className="break-all text-[0.92rem] text-paper/75 transition-colors hover:text-pink-300">
                  {org.email}
                </a>
              </li>
              {org.phones.map((phone) => (
                <li key={phone.tel} className="text-paper/75">
                  <a href={`tel:${phone.tel}`} className="transition-colors hover:text-pink-300">
                    {phone.display}
                  </a>
                  <span className="ml-2 text-[0.78rem] text-paper/55">{phone.who}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-paper/15 p-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-paper/65">
                Bank
              </p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-paper/75">
                {org.bank.bankName} · A/C {org.bank.accountNumber}
                <br />
                <span className="text-paper/55">{org.bank.accountName}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.84rem] text-paper/60">
            © {new Date().getFullYear()} {org.name} (WACWAU). All rights reserved.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-paper"
          >
            Back to top
            <span className="grid h-10 w-10 place-items-center rounded-full border border-paper/20 transition-all duration-300 group-hover:border-pink-500 group-hover:bg-pink-500">
              <ArrowDown size={16} className="rotate-180" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
