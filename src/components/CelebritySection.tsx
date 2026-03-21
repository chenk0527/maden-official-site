'use client'

import Link from 'next/link'
import { assetPath } from '@/utils/path'

const celebrities = [
  { name: '朱赞锦', item: '复古工装夹克', model: 'M65 Field Jacket', img: '/images/ali-harrington.webp' },
  { name: '朱一龙', item: '牛仔工装衬衫', model: 'Denim Shirt', img: '/images/ali-jeans.webp' },
  { name: '蒋奇明', item: 'OG-107工装裤', model: 'OG-107 Fatigue Pant', img: '/images/ali-og107.webp' },
  { name: '宋威龙', item: '复古针织衫', model: 'Heavy Tee', img: '/images/ali-sweater.webp' },
]

export default function CelebritySection() {
  return (
    <section id="celebrity" style={{ padding: '140px 48px', background: '#0e0e0e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>明星同款</p>
        <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '16px' }}>
          明星都在穿
        </h2>
        <p className="r" style={{ fontSize: '1rem', color: 'rgba(232,228,223,.45)', marginBottom: '64px', fontWeight: 400 }}>
          从影视明星到时尚博主，马登工装成为他们日常穿搭的首选。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
          {celebrities.map((cel) => (
            <div key={cel.name} className="r" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src={assetPath(cel.img)}
                alt={`${cel.name} 同款 ${cel.model}`}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'brightness(.55) contrast(1.1)',
                  transition: 'transform .8s cubic-bezier(.4,0,.2,1), filter .6s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'brightness(.7)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(.55) contrast(1.1)'; }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 55%)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '24px',
                pointerEvents: 'none',
              }}>
                <div style={{
                  display: 'inline-block', fontSize: '.55rem', letterSpacing: '.2em',
                  color: '#c9a96e', border: '1px solid rgba(201,169,110,.4)',
                  padding: '3px 8px', marginBottom: '10px', width: 'fit-content',
                }}>
                  {cel.name} 同款
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 300, letterSpacing: '.05em', marginBottom: '4px' }}>{cel.item}</h4>
                <p style={{ fontSize: '.6rem', letterSpacing: '.15em', opacity: 0.45 }}>{cel.model}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="r" style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/#shop" style={{ fontSize: '.65rem', letterSpacing: '.35em', color: '#c9a96e', opacity: 0.65, borderBottom: '1px solid rgba(201,169,110,.3)', paddingBottom: '4px' }}>
            选购同款 →
          </Link>
        </div>
      </div>
    </section>
  )
}
