'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(x => {
          if (x.isIntersecting) {
            x.target.classList.add('v')
            obs.unobserve(x.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.r, .r-left, .r-right')
    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return null
}
