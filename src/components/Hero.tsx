import Link from 'next/link'
import { assetPath } from '@/utils/path'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={assetPath("/images/ali-harrington.webp")}
          alt="马登工装 MADEN 美式复古工装品牌"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(.3) contrast(1.1)',
            transform: 'scale(1.05)',
            animation: 'hz 20s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
        <p style={{ fontSize: '.75rem', letterSpacing: '.5em', opacity: 0.75, marginBottom: '32px', fontWeight: 400 }}>
          美式复古工装 · 始于2008
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            fontWeight: 300,
            letterSpacing: '.15em',
            lineHeight: 0.85,
            marginBottom: '16px',
            opacity: 0,
            animation: 'fu 1.5s 2.2s cubic-bezier(.4,0,.2,1) forwards',
          }}
        >
          MADEN
        </h1>
        <p
          style={{
            fontSize: '.8rem',
            letterSpacing: '.6em',
            fontWeight: 400,
            opacity: 0,
            animation: 'fu 1.2s 2.6s cubic-bezier(.4,0,.2,1) forwards',
          }}
        >
          始于重庆 · 忠于工装
        </p>
        <div style={{ marginTop: '48px', opacity: 0, animation: 'fu 1s 3s cubic-bezier(.4,0,.2,1) forwards' }}>
          <Link href="/#shop" className="btn-gold">
            探索全系列
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span style={{ fontSize: '.65rem', letterSpacing: '.4em', opacity: 0.5, fontWeight: 400 }}>向下探索</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
