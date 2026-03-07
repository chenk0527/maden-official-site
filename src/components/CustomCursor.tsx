'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mx = 0, my = 0, cx = 0, cy = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const loop = () => {
      cx += (mx - cx) * 0.12
      cy += (my - cy) * 0.12
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      animId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(loop)

    const hoverEls = document.querySelectorAll('a, .col-item, .lk-img, .cta-btn, .ch-item, .ch-btn, button')
    const addHover = () => cursor.classList.add('hover')
    const removeHover = () => cursor.classList.remove('hover')

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor" />
      <div ref={dotRef} className="cursor-dot" id="cursorDot" />
    </>
  )
}
