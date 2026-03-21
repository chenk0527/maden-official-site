'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/#about', label: '品牌故事' },
  { href: '/about', label: '关于我们' },
  { href: '/products', label: '产品系列' },
  { href: '/guide', label: '工装指南' },
  { href: '/stores', label: '门店' },
  { href: '/#shop', label: '购买' },
  { href: '/careers', label: '加入我们' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '28px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mixBlendMode: 'normal',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '1.1rem',
            letterSpacing: '.45em',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          Maden
        </Link>

        <div
          className="nav-right"
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '.8rem',
                letterSpacing: '.18em',
                fontWeight: 400,
                opacity: 0.8,
                transition: 'opacity .4s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`hamburger${open ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="菜单"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'none',
            width: '24px',
            height: '16px',
            position: 'relative',
            zIndex: 1001,
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        style={{
          display: open ? 'flex' : 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(255,255,255,.97)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
          backdropFilter: 'blur(20px)',
        }}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{
              fontSize: '1.1rem',
              letterSpacing: '.3em',
              fontWeight: 300,
              opacity: 0.6,
              transition: 'opacity .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          nav { padding: 20px 24px !important; }
          .nav-right { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 480px) {
          nav { padding: 16px 20px !important; }
        }
      `}</style>
    </>
  )
}
