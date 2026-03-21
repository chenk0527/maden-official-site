'use client'

import Link from 'next/link'
import { IconDouyin, IconXiaohongshu, IconWeixin, IconWeibo, IconPin, IconMail } from './Icons'

const socialLinks = [
  {
    href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0',
    label: '抖音',
    Icon: IconDouyin,
  },
  { href: '#', label: '小红书', Icon: IconXiaohongshu },
  { href: '#', label: '微信', Icon: IconWeixin },
  { href: '#', label: '微博', Icon: IconWeibo },
]

export default function Footer() {
  return (
    <footer style={{ padding: '80px 48px 40px', borderTop: '1px solid rgba(232,57,26,.2)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, letterSpacing: '.25em', marginBottom: '10px' }}>
              MADEN
            </div>
            <small style={{ display: 'block', fontSize: '.6rem', letterSpacing: '.35em', opacity: 0.3, fontWeight: 300 }}>
              马登工装 · 美式复古 · 始于2008
            </small>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '28px' }}>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener"
                  aria-label={label}
                  title={label}
                  style={{ color: 'rgba(245,237,232,.4)', transition: 'color .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8391a')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,232,.4)')}
                >
                  <Icon size={22} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            <div>
              <h5 style={{ fontSize: '.72rem', letterSpacing: '.2em', opacity: 0.5, marginBottom: '20px', fontWeight: 500 }}>导航</h5>
              {[
                { href: '/#about', label: '品牌故事' },
                { href: '/about', label: '关于我们' },
                { href: '/products', label: '产品系列' },
                { href: '/guide', label: '工装指南' },
                { href: '/stores', label: '门店' },
                { href: '/blog', label: '博客' },
                { href: '/careers', label: '加入我们' },
              ].map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ display: 'block', fontSize: '.9rem', fontWeight: 400, opacity: 0.65, padding: '6px 0', transition: 'opacity .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '.65')}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div>
              <h5 style={{ fontSize: '.72rem', letterSpacing: '.2em', opacity: 0.5, marginBottom: '20px', fontWeight: 500 }}>购买渠道</h5>
              {[
                { href: 'https://kana52030.taobao.com', label: '淘宝旗舰店' },
                { href: 'https://kana52030.tmall.com', label: '天猫旗舰店' },
                { href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0', label: '抖音旗舰店' },
                { href: 'https://mall.jd.com/index-10987346.html', label: '京东旗舰店' },
              ].map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  style={{ display: 'block', fontSize: '.9rem', fontWeight: 400, opacity: 0.65, padding: '6px 0', transition: 'opacity .3s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '.65')}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div>
              <h5 style={{ fontSize: '.72rem', letterSpacing: '.2em', opacity: 0.5, marginBottom: '20px', fontWeight: 500 }}>联系我们</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7 }}>
                  <IconPin size={16} color="rgba(245,237,232,.9)" />
                  <span style={{ fontSize: '.9rem', fontWeight: 400 }}>重庆 · 中国</span>
                </div>
                <a
                  href="mailto:service@madenfushi.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7, transition: 'opacity .3s', textDecoration: 'none', color: 'inherit' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '.7')}
                >
                  <IconMail size={16} color="rgba(245,237,232,.9)" />
                  <span style={{ fontSize: '.9rem', fontWeight: 400 }}>service@madenfushi.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(232,57,26,.12)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '.75rem', letterSpacing: '.15em', opacity: 0.35, fontWeight: 300 }}>
            &copy; 2008–2026 马登工装 MADEN · All rights reserved
          </p>
          <p style={{ fontSize: '.75rem', letterSpacing: '.12em', opacity: 0.28, fontWeight: 300 }}>
            美式复古工装品牌 · Americana Workwear
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 48px 24px 32px !important; }
        }
      `}</style>
    </footer>
  )
}
