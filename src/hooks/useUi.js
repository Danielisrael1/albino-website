import { useCallback, useEffect, useState } from 'react'

/** True once the page has been scrolled past `threshold` pixels. */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/** Which section is currently in the middle of the viewport. */
export function useActiveSection(ids) {
  const key = ids.join('|')
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sectionIds = key.split('|')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.6, 1] },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [key])

  return active
}

/** Freeze background scrolling while the mobile menu is open. */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

/** Copy-to-clipboard with a short confirmation state. */
export function useCopy(timeout = 1800) {
  const [copied, setCopied] = useState(null)
  const copy = useCallback(
    async (value, id) => {
      try {
        await navigator.clipboard.writeText(value)
        setCopied(id ?? value)
        setTimeout(() => setCopied(null), timeout)
      } catch {
        /* clipboard blocked: the value is still visible on screen */
      }
    },
    [timeout],
  )
  return { copied, copy }
}
