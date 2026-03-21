import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/utils/path'
import Hero from '@/components/Hero'
import TimelineItem from '@/components/TimelineItem'
import { IconHammer, IconCompass, IconBird } from '@/components/Icons'
import StoreCard from '@/components/StoreCard'
import ShopChannel from '@/components/ShopChannel'
import LookbookStrip from '@/components/LookbookStrip'
import CountUp from '@/components/CountUp'
import ProductCard from '@/components/ProductCard'
import { products, shopChannels } from '@/data/products'
import { cityStores } from '@/data/stores'
import { timeline } from '@/data/timeline'

export const metadata: Metadata = {
  title: '马登工装 MADEN — 美式复古工装品牌 | 始于重庆 忠于工装 Since 2008',
  description: '马登工装 MADEN，中国领先的美式复古工装品牌。创立于2008年重庆，坚持Americana精神，提供工装夹克、复古裤装、牛仔、针织、鞋靴等全品类产品。全国7家实体门店，70+线上店铺。',
  alternates: { canonical: 'https://madenfushi.com' },
  openGraph: {
    title: '马登工装 MADEN — 美式复古工装品牌',
    description: '始于重庆，忠于工装。中国领先的美式复古工装品牌，Since 2008。',
    url: 'https://madenfushi.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '马登工装是什么品牌？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '马登工装（MADEN）是中国领先的美式复古工装品牌，创立于2008年重庆。品牌坚持Americana精神，专注于工装夹克、复古裤装、牛仔、针织等产品。目前拥有全国7家实体门店和70+线上店铺。',
      },
    },
    {
      '@type': 'Question',
      name: '马登工装在哪里可以买到？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '马登工装在天猫、淘宝、京东、抖音、拼多多、得物、小红书、快手均有官方旗舰店。线下在重庆有5家门店（解放碑旗舰店、观音桥店、三峡广场店、南坪万达店、杨家坪店），成都有2家门店（春熙路店、太古里店）。',
      },
    },
    {
      '@type': 'Question',
      name: '马登工装的价格区间是多少？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '马登工装产品价格覆盖¥59-¥999，T恤类¥59-¥199，衬衫类¥99-¥299，夹克外套¥199-¥599，羽绒服¥399-¥999，鞋靴¥199-¥599。',
      },
    },
    {
      '@type': 'Question',
      name: '什么是阿美咔叽风格？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '阿美咔叽（Amekaji）是日语中"美式休闲"的音译，指以美国工装、军装、学院风为灵感的日式复古穿搭风格。马登工装正是这一风格的代表品牌，融合美式工装的坚韧与日式复古的精致。',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero />

      {/* About */}
      <section id="about" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          <div className="r-left" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={assetPath("/images/ali-jeans.jpg")}
              alt="马登工装 赤耳牛仔裤 手工缝制"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }}
            />
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', background: 'rgba(201,169,110,.9)', color: '#0a0a0a', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '.15em', padding: '10px 18px' }}>
              Since 2008
            </div>
          </div>

          <div className="r-right">
            <p style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌故事</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
              始于重庆，<br />忠于工装。
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.72)', marginBottom: '20px' }}>
              2008年，三位热爱美式复古文化的年轻人在重庆创立了马登。从一间小工作室到如今全渠道<strong style={{ color: '#c9a96e', fontWeight: 400 }}>70+店铺</strong>、<strong style={{ color: '#c9a96e', fontWeight: 400 }}>7家实体门店</strong>的品牌版图，马登始终只做一件事——<strong style={{ color: '#c9a96e', fontWeight: 400 }}>最纯正的美式复古工装</strong>。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.72)', marginBottom: '20px' }}>
              每一件马登工装都承载着 Americana 精神：坚韧、务实、不妥协。我们从底特律工厂、德州牛仔、越战军服中汲取灵感，用当代工艺还原经典的美式穿着哲学。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.72)', marginBottom: '20px' }}>
              不追逐潮流，因为<strong style={{ color: '#c9a96e', fontWeight: 400 }}>经典从不过时</strong>。
            </p>
            <div style={{ marginTop: '40px', fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.3, display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ width: '40px', height: '1px', background: 'rgba(201,169,110,.3)', display: 'inline-block' }} />
              重庆 · 2008年创立
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌理念</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            三个关键词，定义马登
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '56px' }}>
            {[
              { title: '坚韧', text: 'Americana精神的核心。每一件工装都经得起时间考验——重磅面料、加固缝线、耐用五金。不是穿一季的快时尚，而是陪你走过十年的老伙计。', Icon: IconHammer },
              { title: '复古', text: '从1940年代的M-43野战服到1970年代的OG-107工装裤，马登从美国工业黄金年代汲取灵感。每一个版型、每一处细节，都有历史原型。', Icon: IconCompass },
              { title: '自在', text: '工装的本质是为劳动而生——宽松的版型、实用的口袋、不挑身材的包容性。穿上马登，不需要刻意凹造型，自在就是最好的状态。', Icon: IconBird },
            ].map(item => (
              <div key={item.title} className="r">
                <div style={{ marginBottom: '20px', color: '#c9a96e', opacity: 0.7 }}>
                  <item.Icon size={44} color="currentColor" strokeWidth={1.1} />
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 400, letterSpacing: '.08em', marginBottom: '16px', color: '#c9a96e' }}>{item.title}</h4>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 400, color: 'rgba(232,228,223,.7)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>产品系列</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            全品类工装
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" style={{ padding: '140px 0' }}>
        <div style={{ padding: '0 48px' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>穿搭灵感</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            2026 春夏系列
          </h2>
        </div>
        <LookbookStrip />
      </section>

      {/* Statement */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 48px' }}>
        <div className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '.03em', maxWidth: '800px', color: 'rgba(232,228,223,.6)' }}>
          &ldquo;不追逐潮流，<br />因为<em style={{ fontStyle: 'italic', color: '#c9a96e' }}>经典</em>从不过时。&rdquo;
        </div>
      </section>

      {/* Timeline */}
      <section id="history" style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌历程</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            18年，一件事
          </h2>
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} year={item.year} text={item.text} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section style={{ padding: '140px 48px' }}>
        <div id="numbers-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', padding: '80px 0' }}>
          {[
            { count: 18, suffix: '', label: '年品牌历史' },
            { count: 70, suffix: '+', label: '线上店铺' },
            { count: 8, suffix: '', label: '实体门店' },
            { count: 135, suffix: '万+', label: '抖音粉丝' },
          ].map(item => (
            <div key={item.label} className="r">
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: '#c9a96e', lineHeight: 1, letterSpacing: '.05em', marginBottom: '12px' }}>
                <CountUp target={item.count} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.3, fontWeight: 300 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stores */}
      <section id="stores" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>线下门店</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            实体门店
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            {cityStores.map((city, i) => (
              <StoreCard key={city.city} cityData={city} direction={i % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop Channels */}
      <section id="shop" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>立即购买</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            全渠道官方旗舰店
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,.04)' }}>
          {shopChannels.map(ch => (
            <ShopChannel key={ch.name} name={ch.name} sub={ch.sub} href={ch.href} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={assetPath("/images/ali-sweater.jpg")} alt="马登工装" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.2)' }} />
        </div>
        <div className="r" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 300, letterSpacing: '.12em', marginBottom: '12px' }}>
            加入马登
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.65, marginBottom: '32px' }}>
            始于重庆，忠于工装。探索全系列美式复古工装。
          </p>
          <Link
            href="/#shop"
            className="cta-btn-link"
          >
            立即选购
          </Link>
        </div>
      </section>

      <style>{`
        .cta-btn-link {
          display: inline-block;
          padding: 14px 48px;
          border: 1px solid rgba(201,169,110,.4);
          font-size: .65rem;
          letter-spacing: .4em;
          font-weight: 300;
          transition: all .6s;
        }
        .cta-btn-link:hover {
          background: #c9a96e;
          color: #0a0a0a;
          border-color: #c9a96e;
        }
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #philosophy > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
          #collection > div > div { grid-template-columns: 1fr 1fr !important; gap: 3px !important; }
          .lookbook-strip .lk-img { flex: 0 0 80vw !important; height: 50vh !important; }
          #numbers-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; padding: 60px 24px !important; }
          #stores > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #shop > div + div { grid-template-columns: 1fr 1fr !important; }
          section { padding: 80px 24px !important; }
        }
        @media (max-width: 480px) {
          #collection > div > div { grid-template-columns: 1fr !important; }
          #shop > div + div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
