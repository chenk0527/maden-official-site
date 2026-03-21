'use client'

import Link from 'next/link'
import { assetPath } from '@/utils/path'

const celebrities = [
  { name: '朱赞锦', item: 'N-1甲板棉服', model: 'Deck Jacket', img: '/images/celebrity/zhu-zanji.webp', work: '《兰若浮生》' },
  { name: '郑运南', item: '复古赛车夹克', model: 'Racing Jacket', img: '/images/celebrity/zheng-yunnan.webp', work: '热剧男主' },
  { name: '蒋奇明', item: '灯芯绒工装夹克', model: 'Detroit Jacket', img: '/images/celebrity/star8.webp', work: '综艺节目' },
  { name: '傅青', item: '工装套装', model: 'Cargo Set', img: '/images/celebrity/fu-qing.webp', work: '日常穿搭' },
]

export default function CelebritySection() {
  return (
    <section id="celebrity" style={{ padding: '140px 0', background: '#111' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>CELEBRITY PICKS</p>
        <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '16px' }}>
          明星都在穿
        </h2>
        <p className="r" style={{ fontSize: '1rem', color: 'rgba(232,228,223,.5)', marginBottom: '72px', fontWeight: 400 }}>
          从影视明星到综艺嘉宾，马登工装成为他们日常的穿搭首选。
        </p>
      </div>

      {/* 满宽图片网格 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px' }}>
        {celebrities.map((cel) => (
          <div key={cel.name} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={assetPath(cel.img)}
              alt={`${cel.name} 同款 ${cel.model}`}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(.6) contrast(1.05) saturate(0.9)',
                transition: 'transform .9s cubic-bezier(.4,0,.2,1), filter .6s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.filter = 'brightness(.75) contrast(1.02) saturate(1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.filter = 'brightness(.6) contrast(1.05) saturate(0.9)'
              }}
            />
            {/* 渐变遮罩 */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,.8) 0%, rgba(0,0,0,.2) 50%, transparent 75%)',
              pointerEvents: 'none',
            }} />
            {/* 文字信息 */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '28px 24px',
              pointerEvents: 'none',
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '.52rem', letterSpacing: '.18em',
                color: '#c9a96e', marginBottom: '10px',
              }}>
                <span style={{ width: '16px', height: '1px', background: '#c9a96e', display: 'inline-block' }} />
                {cel.name} 同款
              </div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.25rem', fontWeight: 300,
                letterSpacing: '.05em', marginBottom: '4px',
                lineHeight: 1.3,
              }}>
                {cel.item}
              </h4>
              <p style={{ fontSize: '.58rem', letterSpacing: '.12em', opacity: 0.4, fontWeight: 300 }}>
                {cel.model} · {cel.work}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div className="r" style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              fontSize: '.65rem', letterSpacing: '.35em',
              color: '#c9a96e',
              borderBottom: '1px solid rgba(201,169,110,.3)',
              paddingBottom: '5px',
              transition: 'opacity .3s',
            }}
          >
            选购明星同款 →
          </Link>
        </div>
      </div>
    </section>
  )
}
