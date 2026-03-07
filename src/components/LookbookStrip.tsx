'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { lookbookItems } from '@/data/products'
import { assetPath } from '@/utils/path'

export default function LookbookStrip() {
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        strip.scrollLeft += e.deltaY
      }
    }

    strip.addEventListener('wheel', onWheel, { passive: false })
    return () => strip.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div
      ref={stripRef}
      className="lookbook-strip"
    >
      {lookbookItems.map((item, i) => (
        <div
          key={i}
          className="lk-img"
          style={{
            flex: '0 0 35vw',
            height: '70vh',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={assetPath(item.image)}
            alt={item.alt}
            fill
            style={{
              objectFit: 'cover',
              filter: 'brightness(.75)',
              transition: 'filter .8s',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              fontSize: '.55rem',
              letterSpacing: '.4em',
              opacity: 0.4,
              fontWeight: 300,
              zIndex: 2,
            }}
          >
            {item.label}
          </div>
          <style>{`
            .lk-img:hover img { filter: brightness(.9) !important; }
          `}</style>
        </div>
      ))}
    </div>
  )
}
