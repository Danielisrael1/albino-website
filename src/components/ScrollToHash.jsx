import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** The router does not move the page on its own, so anchor links coming from
 *  another page (for example /#support) are handled here. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    const id = hash.slice(1)
    let tries = 0
    const find = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries++ < 20) {
        requestAnimationFrame(find)
      }
    }
    find()
  }, [pathname, hash])

  return null
}
