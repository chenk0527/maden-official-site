'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ padding: '80px 48px 40px', borderTop: '1px solid rgba(255,255,255,.04)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px' }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 300, letterSpacing: '.2em' }}>MADEN</div>
          <small style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '.55rem', letterSpacing: '.3em', opacity: 0.25, marginTop: '8px', fontWeight: 300 }}>
            马登工装 · 美式复古 · 始于2008
          </small>
        </div>

        <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
          <div>
            <h5 style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.25, marginBottom: '16px', fontWeight: 400 }}>导航</h5>
            {[
              { href: '/#about', label: '品牌故事' },
              { href: '/about', label: '关于我们' },
              { href: '/products', label: '产品系列' },
              { href: '/guide', label: '工装指南' },
              { href: '/stores', label: '门店' },
              { href: '/blog', label: '博客' },
              { href: '/careers', label: '加入我们' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: '.75rem', fontWeight: 200, opacity: 0.35, padding: '4px 0', transition: 'opacity .3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '.35')}>
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.25, marginBottom: '16px', fontWeight: 400 }}>购买渠道</h5>
            {[
              { href: 'https://kana52030.taobao.com', label: '淘宝旗舰店' },
              { href: 'https://kana52030.tmall.com', label: '天猫旗舰店' },
              { href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0', label: '抖音旗舰店' },
              { href: 'https://mall.jd.com/index-10987346.html', label: '京东旗舰店' },
            ].map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" style={{ display: 'block', fontSize: '.75rem', fontWeight: 200, opacity: 0.35, padding: '4px 0', transition: 'opacity .3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '.35')}>
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h5 style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.25, marginBottom: '16px', fontWeight: 400 }}>关注我们</h5>
            {[
              { href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0', label: '抖音 @马登工装官方旗舰店' },
              { href: '#', label: '小红书 @马登工装' },
              { href: '#', label: '微信公众号' },
              { href: '#', label: '微博' },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href !== '#' ? '_blank' : undefined} rel="noopener" style={{ display: 'block', fontSize: '.75rem', fontWeight: 200, opacity: 0.35, padding: '4px 0', transition: 'opacity .3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '.35')}>
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h5 style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.25, marginBottom: '16px', fontWeight: 400 }}>联系我们</h5>
            {[
              { href: '#', label: '重庆 · 中国' },
              { href: 'mailto:service@madenfushi.com', label: 'service@madenfushi.com' },
              { href: '#', label: '客服热线' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{ display: 'block', fontSize: '.75rem', fontWeight: 200, opacity: 0.35, padding: '4px 0', transition: 'opacity .3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '.35')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginTop: '56px', fontSize: '.55rem', letterSpacing: '.2em', opacity: 0.15 }}>
        &copy; 2008–2026 马登工装 MADEN. All rights reserved. 美式复古工装品牌
      </div>
    </footer>
  )
}
