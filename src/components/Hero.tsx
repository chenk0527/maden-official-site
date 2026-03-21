'use client'

import Link from 'next/link'
import { assetPath } from '@/utils/path'
import CountUp from './CountUp'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* 主内容区 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'calc(100vh - 120px)',
      }}>

        {/* 左侧：品牌信息 */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px 64px 64px',
          zIndex: 2,
        }}>
          {/* 背景图 */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={assetPath("/images/ali-harrington.webp")}
              alt="马登工装"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(.18) contrast(1.1)',
                transform: 'scale(1.05)',
                animation: 'hz 20s ease-in-out infinite alternate',
              }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '.65rem', letterSpacing: '.55em', opacity: 0.5, marginBottom: '24px', fontWeight: 400 }}>
              美式复古工装 · Since 2008
            </p>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              fontWeight: 300,
              letterSpacing: '.12em',
              lineHeight: 0.88,
              marginBottom: '32px',
              opacity: 0,
              animation: 'fu 1.5s 2.2s cubic-bezier(.4,0,.2,1) forwards',
            }}>
              MADEN
            </h1>

            <p style={{
              fontSize: 'clamp(.9rem, 1.5vw, 1.1rem)',
              lineHeight: 1.8,
              fontWeight: 400,
              color: 'rgba(232,228,223,.65)',
              maxWidth: '360px',
              marginBottom: '40px',
              opacity: 0,
              animation: 'fu 1.2s 2.6s cubic-bezier(.4,0,.2,1) forwards',
            }}>
              始于重庆，忠于工装。<br />
              中国领先的美式复古工装品牌，<br />
              全品类覆盖，全渠道旗舰。
            </p>

            {/* 快速购买按钮组 */}
            <div style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap',
              opacity: 0, animation: 'fu 1s 3s cubic-bezier(.4,0,.2,1) forwards',
            }}>
              <Link href="/#shop" className="btn-gold">立即选购</Link>
              <Link href="/products" style={{
                display: 'inline-block', padding: '14px 28px',
                border: '1px solid rgba(255,255,255,.15)',
                fontSize: '.65rem', letterSpacing: '.3em', fontWeight: 300,
                transition: 'all .4s',
              }}>
                产品系列
              </Link>
            </div>

            {/* 渠道快捷入口 */}
            <div style={{
              marginTop: '48px',
              display: 'flex', gap: '20px', alignItems: 'center',
              opacity: 0, animation: 'fu 1s 3.3s cubic-bezier(.4,0,.2,1) forwards',
            }}>
              <span style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.35 }}>选购渠道</span>
              {[
                { name: '天猫', href: 'https://kana52030.tmall.com' },
                { name: '抖音', href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0' },
                { name: '京东', href: 'https://mall.jd.com/index-10987346.html' },
                { name: '拼多多', href: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=13333156' },
              ].map(ch => (
                <a key={ch.name} href={ch.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '.65rem', letterSpacing: '.15em', opacity: 0.5,
                  transition: 'opacity .3s', fontWeight: 400,
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
                >
                  {ch.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：产品分类入口 */}
        <div style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gap: '2px',
          paddingTop: '80px',
        }}>
          {/* 上：男装工装 */}
          <Link href="/products" style={{
            position: 'relative', overflow: 'hidden', display: 'block',
          }}>
            <img
              src={assetPath("/images/ali-og107.webp")}
              alt="马登工装 男装系列"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                objectPosition: 'center 20%',
                filter: 'brightness(.55)',
                transition: 'transform .8s cubic-bezier(.4,0,.2,1)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'flex-end', padding: '28px',
            }}>
              <p style={{ fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.5, marginBottom: '6px' }}>男装工装</p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.8rem', fontWeight: 300, letterSpacing: '.1em',
              }}>夹克 · 工装裤 · 衬衫</h3>
              <p style={{ fontSize: '.7rem', letterSpacing: '.2em', opacity: 0.4, marginTop: '4px' }}>SHOP NOW →</p>
            </div>
          </Link>

          {/* 下：两列 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {/* 鞋靴 */}
            <Link href="/products" style={{
              position: 'relative', overflow: 'hidden', display: 'block',
            }}>
              <img
                src={assetPath("/images/ali-jeans.webp")}
                alt="马登 鞋靴系列"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'brightness(.5)',
                  transition: 'transform .8s cubic-bezier(.4,0,.2,1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '20px',
              }}>
                <p style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.5, marginBottom: '4px' }}>鞋靴</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 300, letterSpacing: '.1em' }}>GAT · 工装靴</h3>
              </div>
            </Link>

            {/* 线下门店 */}
            <Link href="/stores" style={{
              position: 'relative', overflow: 'hidden', display: 'block',
              background: '#111',
            }}>
              <img
                src={assetPath("/images/ali-sweater.webp")}
                alt="马登 门店"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'brightness(.35)',
                  transition: 'transform .8s cubic-bezier(.4,0,.2,1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: '20px',
              }}>
                <p style={{ fontSize: '.6rem', letterSpacing: '.3em', opacity: 0.5, marginBottom: '4px' }}>线下门店</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 300, letterSpacing: '.1em' }}>重庆 · 成都 · 杭州</h3>
                <p style={{ fontSize: '.65rem', letterSpacing: '.15em', opacity: 0.4, marginTop: '4px' }}>9家实体门店 →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 底部数字统计条 */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.06)',
        background: 'rgba(0,0,0,.4)',
        backdropFilter: 'blur(12px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        zIndex: 10,
      }}>
        {[
          { count: 18, suffix: '年', label: '品牌历史' },
          { count: 443, suffix: '+', label: '团队成员' },
          { count: 9, suffix: '家', label: '实体门店' },
          { count: 1000, suffix: '万+', label: '全网粉丝' },
        ].map((item, i) => (
          <div key={item.label} style={{
            padding: '20px 0',
            textAlign: 'center',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 300, color: '#c9a96e',
              lineHeight: 1, letterSpacing: '.05em',
            }}>
              <CountUp target={item.count} suffix={item.suffix} />
            </div>
            <div style={{ fontSize: '.65rem', letterSpacing: '.25em', opacity: 0.45, marginTop: '6px' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* scroll hint */}
      <div style={{
        position: 'absolute', bottom: '130px', left: '64px', zIndex: 5,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px',
      }}>
        <span style={{ fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.3, fontWeight: 400, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(201,169,110,.4), transparent)' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero > div:first-child {
            grid-template-columns: 1fr !important;
          }
          #hero > div:first-child > div:last-child {
            display: none !important;
          }
          #hero > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
