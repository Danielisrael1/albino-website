import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Close, Facebook, Mail, Menu, Phone } from './ui/Icons'
import { useActiveSection, useScrolled, useScrollLock } from '../hooks/useUi'
import { org } from '../data/site'

const links = [
  { id: 'about', label: 'About' },
  { id: 'objectives', label: 'Our work' },
  { id: 'team', label: 'Team' },
  { id: 'partners', label: 'Partners' },
  { id: 'support', label: 'Support' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(30)
  const active = useActiveSection(links.map((l) => l.id))
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.25 })
  useScrollLock(open)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-pink-500 via-pink-400 to-sky-500"
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-spring ${
          scrolled
            ? 'border-b border-ink/10 bg-paper/85 py-2.5 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a href="#hero" className="group flex items-center gap-3" aria-label="WACWAU home">
            <img
              src="/images/wacwau-logo.png"
              alt=""
              width="48"
              height="48"
              className={`shrink-0 transition-all duration-500 ease-spring group-hover:rotate-[14deg] ${
                scrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}
            />
            <span className="leading-none">
              <span className="block font-display text-[1.32rem] font-extrabold tracking-tightest text-ink">
                WACWAU
              </span>
              <span className="mt-1 hidden text-[0.64rem] font-medium uppercase tracking-[0.16em] text-clay sm:block">
                Changing the image
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                data-active={active === link.id}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#support" className="btn-pink hidden !px-6 !py-3 text-[0.88rem] sm:inline-flex">
              <span>Support our work</span>
              <ArrowRight size={17} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink text-paper lg:hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 92% 6%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-x flex h-full flex-col overflow-y-auto py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/images/wacwau-logo.png" alt="" className="h-11 w-11" />
                  <span className="font-display text-xl font-extrabold">WACWAU</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-paper/25 transition-colors hover:bg-paper hover:text-ink"
                  aria-label="Close menu"
                >
                  <Close size={21} />
                </button>
              </div>

              <nav className="mt-8 flex flex-1 flex-col justify-center gap-0.5" aria-label="Mobile">
                {links.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-4 border-b border-paper/10 py-3.5 font-display text-[1.7rem] font-bold tracking-tightest transition-colors hover:text-pink-300 sm:text-[2rem]"
                  >
                    <span className="font-sans text-[0.7rem] font-semibold text-pink-400">
                      0{i + 1}
                    </span>
                    {link.label}
                    <ArrowRight
                      size={22}
                      className="ml-auto self-center opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-6 shrink-0 space-y-4 pb-2">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper/75">
                  <a className="flex items-center gap-2 hover:text-pink-300" href={`tel:${org.phones[0].tel}`}>
                    <Phone size={17} /> {org.phones[0].display}
                  </a>
                  <a className="flex items-center gap-2 hover:text-pink-300" href={`mailto:${org.email}`}>
                    <Mail size={17} /> Email us
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-pink-300"
                    href={org.facebook.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook size={17} /> Facebook
                  </a>
                </div>
                <a href="#support" onClick={() => setOpen(false)} className="btn-light w-full">
                  <span>Support our work</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
