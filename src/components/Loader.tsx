'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loader${done ? ' done' : ''}`} id="loader">
      <div className="loader-text">MADEN</div>
      <div className="loader-line" />
    </div>
  )
}
