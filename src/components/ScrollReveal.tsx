'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // 给 DOM 渲染一帧时间
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(x => {
            if (x.isIntersecting) {
              x.target.classList.add('v')
              obs.unobserve(x.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      const els = document.querySelectorAll('.r, .r-left, .r-right')
      els.forEach(el => {
        // 已在视口内的直接显示，不等 IntersectionObserver
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('v')
        } else {
          obs.observe(el)
        }
      })

      return () => obs.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname]) // pathname 变化时重新运行

  return null
}
