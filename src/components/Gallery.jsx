import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './ui/Motion'
import { Marquee } from './ui/Decor'
import { faces, gallery } from '../data/site'

function Frame({ item }) {
  return (
    <StaggerItem
      as="figure"
      className={`group relative ${item.span || 'lg:col-span-4'} lg:row-span-3`}
    >
      <div
        className="tint relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-coal lg:aspect-auto lg:h-full"
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.07]"
        />
        {/* caption panel rises on hover */}
        <figcaption className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-ink via-ink/95 to-transparent px-5 pb-5 pt-10 transition-transform duration-[600ms] ease-spring group-hover:translate-y-0">
          <p className="font-display text-[1rem] font-bold leading-snug text-paper">
            {item.caption}
          </p>
          {item.note && <p className="mt-1.5 text-[0.8rem] text-paper/70">{item.note}</p>}
        </figcaption>
      </div>
      <p aria-hidden="true" className="mt-3 text-[0.83rem] text-paper/60 lg:hidden">
        {item.caption}
      </p>
    </StaggerItem>
  )
}

export default function Gallery() {
  // Portraits inside a continuously translating marquee cannot rely on lazy
  // loading: the browser may never treat them as visible, leaving gaps in the
  // row. Load them eagerly as soon as the section approaches the viewport.
  const facesRef = useRef(null)
  const facesNear = useInView(facesRef, { once: true, margin: '400px' })

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-32">
        <div className="container-x relative">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow text-paper/70">
                  From the work
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] sm:text-[3rem] lg:text-[3.3rem]">
                  In the <span className="text-sky-400">field</span>.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.14}>
                <p className="text-[1rem] leading-[1.75] text-paper/70">
                  Awareness days, home visits, skin checks and hands-on skilling.
                </p>
              </Reveal>
            </div>
          </div>

          <Stagger
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:auto-rows-[152px] lg:grid-cols-12"
            stagger={0.06}
          >
            {gallery.map((item) => (
              <Frame key={item.src} item={item} />
            ))}
          </Stagger>

        </div>
      </section>

      {/* ---------------- faces ---------------- */}
      <section className="relative overflow-hidden bg-paper py-24 sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              Our people
            </span>
            <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.04] text-ink sm:text-[3rem]">
              Faces, <span className="text-pink-500">not cases</span>.
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.7] text-clay">
              Members of the WACWAU community.
            </p>
          </Reveal>
        </div>

        <div ref={facesRef} className="mt-14 space-y-5">
          {[false, true].map((reverse, row) => (
            <Marquee
              key={row}
              reverse={reverse}
              speed="animate-marqueeSlow"
              className="mask-fade-x"
              separator={<span className="w-4 shrink-0 sm:w-5" aria-hidden="true" />}
              items={faces
                .slice(row === 0 ? 0 : 4)
                .concat(row === 0 ? [] : faces.slice(0, 4))
                .map((face) => (
                  <span
                    key={face.src}
                    className="group relative block h-52 w-auto overflow-hidden rounded-2xl border-[4px] border-white bg-sand shadow-card transition-transform duration-500 ease-spring hover:-translate-y-1.5 sm:h-64"
                  >
                    <img
                      src={face.src}
                      alt={face.alt}
                      width={face.w}
                      height={face.h}
                      loading={facesNear ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-full w-auto max-w-none object-cover"
                    />
                  </span>
                ))}
            />
          ))}
        </div>
      </section>
    </>
  )
}
