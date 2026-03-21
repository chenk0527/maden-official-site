'use client'

import Link from 'next/link'
import { assetPath } from '@/utils/path'
import CountUp from './CountUp'

// 暗红主题色系
const RED = '#e8391a'
const BG = '#1c0505'
const BG2 = '#230808'
const TEXT = '#f5ede8'
const MUTED = 'rgba(245,237,232,.55)'
const BORDER = 'rgba(232,57,26,.22)'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: BG,
      }}
    >
      {/* 背景图 + 暗红遮罩 */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={assetPath("/images/ali-harrington.webp")}
          alt="马登工装 MADEN"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'brightness(.28) contrast(1.1) saturate(.7)',
            transform: 'scale(1.05)',
            animation: 'hz 20s ease-in-out infinite alternate',
          }}
        />
        {/* 暗红渐变遮罩 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, rgba(28,5,5,.7) 0%, rgba(35,8,8,.4) 50%, rgba(28,5,5,.8) 100%)`,
        }} />
        {/* 底部渐变 */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: `linear-gradient(to top, ${BG}, transparent)`,
        }} />
      </div>

      {/* 左侧红色装饰竖线 */}
      <div style={{
        position: 'absolute', left: '40px', top: '15%', bottom: '20%',
        width: '2px',
        background: `linear-gradient(to bottom, transparent, ${RED}, transparent)`,
        opacity: 0.6, zIndex: 2,
      }} />

      {/* 主内容 */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', alignItems: 'center',
        padding: '0 80px',
      }}>
        <div>
          {/* 品牌标签 */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '32px',
            opacity: 0, animation: 'fu 1s 1.8s cubic-bezier(.4,0,.2,1) forwards',
          }}>
            <div style={{ width: '32px', height: '1.5px', background: RED }} />
            <p style={{ fontSize: '.62rem', letterSpacing: '.55em', color: RED, fontWeight: 500 }}>
              AMERICANA · SINCE 2008
            </p>
          </div>

          {/* 主标题 */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(5.5rem, 15vw, 14rem)',
            fontWeight: 300,
            letterSpacing: '.12em',
            lineHeight: 0.85,
            color: TEXT,
            marginBottom: '8px',
            opacity: 0,
            animation: 'fu 1.5s 2.2s cubic-bezier(.4,0,.2,1) forwards',
          }}>
            MADEN
          </h1>

          {/* 副标题 */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
            fontWeight: 300, fontStyle: 'italic',
            letterSpacing: '.08em',
            color: 'rgba(245,237,232,.45)',
            marginBottom: '48px',
            opacity: 0,
            animation: 'fu 1.2s 2.6s cubic-bezier(.4,0,.2,1) forwards',
          }}>
            始于重庆，忠于工装
          </p>

          {/* CTA 按钮组 */}
          <div style={{
            display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap',
            opacity: 0, animation: 'fu 1s 3s cubic-bezier(.4,0,.2,1) forwards',
          }}>
            <Link href="/#shop" className="btn-gold">立即选购</Link>
            <Link href="/products" style={{
              fontSize: '.65rem', letterSpacing: '.3em', fontWeight: 400,
              color: MUTED, borderBottom: `1px solid rgba(232,57,26,.3)`,
              paddingBottom: '3px', transition: 'all .3s',
            }}>
              探索系列 →
            </Link>
          </div>

          {/* 渠道快捷入口 */}
          <div style={{
            marginTop: '48px', display: 'flex', gap: '24px', alignItems: 'center',
            opacity: 0, animation: 'fu 1s 3.4s cubic-bezier(.4,0,.2,1) forwards',
          }}>
            <div style={{ width: '20px', height: '1px', background: BORDER }} />
            {['天猫', '抖音', '京东', '拼多多'].map(name => (
              <span key={name} style={{
                fontSize: '.6rem', letterSpacing: '.2em',
                color: 'rgba(245,237,232,.35)', fontWeight: 400,
              }}>{name}</span>
            ))}
          </div>
        </div>

        {/* 右侧大红色年份 */}
        <div style={{
          position: 'absolute', right: '64px', bottom: '120px',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(6rem, 12vw, 11rem)',
          fontWeight: 300, color: RED,
          letterSpacing: '-.02em',
          lineHeight: 1, userSelect: 'none',
          opacity: 0, animation: 'fu 1.5s 2.8s cubic-bezier(.4,0,.2,1) forwards',
        }}>
          2008
        </div>
      </div>

      {/* 底部数字统计 */}
      <div style={{
        position: 'relative', zIndex: 3,
        borderTop: `1px solid ${BORDER}`,
        background: 'rgba(28,5,5,.9)',
        backdropFilter: 'blur(8px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {[
          { count: 18, suffix: '年', label: '品牌历史' },
          { count: 443, suffix: '+', label: '团队成员' },
          { count: 8, suffix: '家', label: '实体门店' },
          { count: 1000, suffix: '万+', label: '全网粉丝' },
        ].map((item, i) => (
          <div key={item.label} style={{
            padding: '22px 0', textAlign: 'center',
            borderRight: i < 3 ? `1px solid ${BORDER}` : 'none',
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 300, color: RED, lineHeight: 1, letterSpacing: '.05em',
            }}>
              <CountUp target={item.count} suffix={item.suffix} />
            </div>
            <div style={{ fontSize: '.62rem', letterSpacing: '.25em', color: MUTED, marginTop: '6px' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '100px', right: '48px', zIndex: 4,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
      }}>
        <div className="scroll-bar" />
        <span style={{ fontSize: '.55rem', letterSpacing: '.4em', color: 'rgba(245,237,232,.3)', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div:nth-child(3) { padding: 0 32px !important; }
          #hero > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
