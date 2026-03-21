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
import CelebritySection from '@/components/CelebritySection'
import { cityStores } from '@/data/stores'
import { timeline } from '@/data/timeline'

const brands = [
  {
    name: '马登',
    en: 'MADEN',
    desc: '创立于2010年，以极致性价比切入男鞋赛道。工装、复古、休闲三大风格，历经15年深耕，现为淘宝/天猫男鞋类目 TOP3。',
    tag: '男鞋 · 2010',
    badge: '淘宝/天猫 TOP3',
  },
  {
    name: '马登工装',
    en: 'MADEN WORKWEAR',
    desc: '2017年正式上线，专注美式复古工装男装。淘宝男装 TOP1、京东男装 TOP1，累计店铺粉丝 300万+，Americana精神的核心表达。',
    tag: '男装 · 2017',
    badge: '淘宝男装 TOP1',
  },
  {
    name: '马登女装',
    en: 'MADEN WOMEN',
    desc: '2022年4月上线，首日3000件库存售罄率90%，10天入选【必逛好店】。复古·工装·酷女孩风格，好评率99.97%。',
    tag: '女装 · 2022',
    badge: '好评率 99.97%',
  },
]

const charities = [
  { year: '2017', title: '白岩村小白鞋计划', desc: '为山区孩子捐赠白色运动鞋，让每个孩子都能穿上干净整洁的鞋子走进课堂。' },
  { year: '2018', title: '吉安小学梦想家计划', desc: '走进吉安小学，为孩子们搭建梦想空间，捐赠学习物资，陪伴成长。' },
  { year: '2019', title: '七分村小净水计划', desc: '为偏远山村小学捐赠净水设备，让孩子们喝上干净安全的饮用水。' },
  { year: '2020', title: '洞塘小学防疫关爱', desc: '疫情期间深入基层，向洞塘小学捐赠防护物资，守护孩子们的健康安全。' },
  { year: '2021', title: '海军希望小学伴学计划', desc: '走进希望小学，与孩子们结对伴学，用陪伴点亮山区孩子的求知热情。' },
  { year: '2022', title: '山区崇兴小学伴学计划', desc: '深入崇兴小学开展伴学活动，捐赠书包文具，助力山区教育事业发展。' },
  { year: '2023', title: '岩东乡小学伴学计划', desc: '前往岩东乡小学，持续推进伴学公益，让知识和关爱在山区生根发芽。' },
  { year: '2024', title: '两岔村小学梦想家电影院', desc: '为两岔村小学建立公益电影院，让大山里的孩子用光影看见更广阔的世界。' },
  { year: '2025', title: '洞塘小学伴学计划', desc: '再度走进洞塘小学，延续伴学承诺，与孩子们共同书写新的成长故事。' },
]

export const metadata: Metadata = {
  title: '马登工装 MADEN — 美式复古工装品牌 | 始于重庆 忠于工装 Since 2011',
  description: '马登工装 MADEN，中国领先的美式复古工装品牌。创立于2011年重庆，坚持Americana精神，提供工装夹克、复古裤装、牛仔、针织、鞋靴等全品类产品。全国7家实体门店，70+线上店铺。',
  alternates: { canonical: 'https://madenfushi.com' },
  openGraph: {
    title: '马登工装 MADEN — 美式复古工装品牌',
    description: '始于重庆，忠于工装。中国领先的美式复古工装品牌，Since 2011。',
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
        text: '马登工装（MADEN）是中国领先的美式复古工装品牌，创立于2011年重庆。品牌坚持Americana精神，专注于工装夹克、复古裤装、牛仔、针织等产品。目前拥有全国7家实体门店和70+线上店铺。',
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

      {/* Numbers — 紧跟Hero，第一屏后立即可见 */}
      <section style={{ padding: '0 48px', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div id="numbers-grid" className="nums-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', padding: '56px 0' }}>
          {[
            { count: 15, suffix: '年', label: '品牌历史' },
            { count: 443, suffix: '+', label: '团队成员' },
            { count: 8, suffix: "家", label: "实体门店" },
            { count: 1000, suffix: '万+', label: '全网粉丝' },
          ].map((item, i) => (
            <div key={item.label} className="r" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none', padding: '0 24px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: '#c9a96e', lineHeight: 1, letterSpacing: '.05em' }}>
                <CountUp target={item.count} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: '.82rem', letterSpacing: '.25em', opacity: 0.6, fontWeight: 400, marginTop: '10px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="sec-pad" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          <div className="r-left" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={assetPath("/images/ali-jeans.webp")}
              alt="马登工装 赤耳牛仔裤 手工缝制"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }}
            />
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', background: 'rgba(201,169,110,.9)', color: '#0a0a0a', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '.15em', padding: '10px 18px' }}>
              Since 2011
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
              重庆 · 2011年创立
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="sec-pad" style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌理念</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            三个关键词，定义马登
          </h2>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '56px' }}>
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
      <section id="collection" className="sec-pad" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>产品系列</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            全品类工装
          </h2>
          <div className="grid-3-products" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
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



      {/* 明星同款 */}
      <CelebritySection />

      {/* Statement */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 48px' }}>
        <div className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '.03em', maxWidth: '800px', color: 'rgba(232,228,223,.6)' }}>
          &ldquo;不追逐潮流，<br />因为<em style={{ fontStyle: 'italic', color: '#c9a96e' }}>经典</em>从不过时。&rdquo;
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="sec-pad" style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌历程</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            15年，一件事
          </h2>
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} year={item.year} text={item.text} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </section>

      {/* 旗下品牌 */}
      <section style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>旗下品牌</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '16px' }}>
            三大品牌，全品类覆盖
          </h2>
          <p className="r" style={{ fontSize: '1rem', color: 'rgba(232,228,223,.45)', marginBottom: '64px', fontWeight: 400 }}>
            男鞋 · 男装 · 女装，一个集团下的三种表达。
          </p>
          <div className="grid-3-products" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {brands.map((b, i) => (
              <div key={b.name} className="r" style={{
                background: '#111', padding: '48px 36px', position: 'relative',
                borderTop: '1px solid rgba(201,169,110,.15)',
                transition: 'background .3s',
              }}>
                <span style={{
                  position: 'absolute', top: '20px', right: '24px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3.5rem', fontWeight: 300, color: '#c9a96e', opacity: 0.08, lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <p style={{ fontSize: '.6rem', letterSpacing: '.3em', color: '#c9a96e', opacity: 0.6 }}>{b.tag}</p>
                  <span style={{ fontSize: '.55rem', letterSpacing: '.1em', color: '#c9a96e', border: '1px solid rgba(201,169,110,.25)', padding: '3px 8px' }}>{b.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.7rem', fontWeight: 300, letterSpacing: '.06em', marginBottom: '4px' }}>{b.name}</h3>
                <p style={{ fontSize: '.6rem', letterSpacing: '.25em', color: 'rgba(232,228,223,.2)', marginBottom: '20px' }}>{b.en}</p>
                <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'rgba(232,228,223,.58)', fontWeight: 400 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="r" style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/about" style={{ fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.4, borderBottom: '1px solid rgba(201,169,110,.3)', paddingBottom: '4px' }}>
              了解更多品牌故事 →
            </Link>
          </div>
        </div>
      </section>

      {/* 公益足迹 */}
      <section style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300, textAlign: 'center' }}>公益足迹</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '16px', textAlign: 'center' }}>
            马登公益足迹
          </h2>
          <p className="r" style={{ fontSize: '1rem', color: 'rgba(232,228,223,.4)', maxWidth: '540px', margin: '0 auto 80px', lineHeight: 1.8, textAlign: 'center', fontWeight: 400 }}>
            从2017年起，马登持续深入贫困山区，用行动陪伴孩子成长。
          </p>

          {/* 时间轴：交错网格 */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 32px' }}>
            {charities.map((c, i) => (
              <div key={c.year} className="r" style={{
                borderLeft: '2px solid rgba(201,169,110,.18)',
                paddingLeft: '20px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', left: '-6px', top: '4px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#c9a96e', opacity: 0.6,
                }} />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#c9a96e', opacity: 0.7, marginBottom: '8px', fontWeight: 300 }}>{c.year}</p>
                <h4 style={{ fontSize: '.95rem', fontWeight: 400, letterSpacing: '.03em', marginBottom: '8px', color: 'rgba(232,228,223,.85)' }}>{c.title}</h4>
                <p style={{ fontSize: '.85rem', lineHeight: 1.7, color: 'rgba(232,228,223,.42)', fontWeight: 400 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="r" style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontSize: '.7rem', letterSpacing: '.4em', opacity: 0.3, fontWeight: 300 }}>
              9年 · 9所学校 · 持续同行
            </p>
          </div>
        </div>
      </section>

      {/* Full-width brand divider image */}
      <div style={{ width: '100%', height: '60vh', position: 'relative', overflow: 'hidden' }}>
        <img
          src={assetPath("/images/ali-og107.webp")}
          alt="马登工装 OG-107 军旅裤"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(.55)' }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '.7rem', letterSpacing: '.6em', opacity: 0.5, fontWeight: 400 }}>有品质的生活</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '.15em', textAlign: 'center' }}>
            不需要那么贵
          </h2>
        </div>
      </div>

      {/* Stores */}
      <section id="stores" style={{ padding: '0', background: '#0a0a0a' }}>
        {/* 大图 Banner */}
        <div style={{ position: 'relative', height: 'clamp(360px, 50vw, 560px)', overflow: 'hidden' }}>
          <img
            src={assetPath('/images/stores/store-6.webp')}
            alt="马登工装实体门店"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.4)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,.8) 0%, transparent 60%)',
            display: 'flex', alignItems: 'center', padding: '0 8%',
          }}>
            <div>
              <p className="r" style={{ fontSize: '.55rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '14px', fontWeight: 300 }}>PHYSICAL STORES</p>
              <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '.04em', marginBottom: '18px' }}>
                实体门店
              </h2>
              <p style={{ fontSize: '.95rem', opacity: 0.45, fontWeight: 300, maxWidth: '340px', lineHeight: 1.9 }}>
                8家实体门店遍布重庆、成都<br />走进门店，触摸真正的工装质感
              </p>
            </div>
          </div>
        </div>
        {/* 门店列表 + 店内图 */}
        <div className="stores-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ padding: '64px', background: '#111' }}>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <h3 className="r" style={{ fontSize: '1.3rem', fontWeight: 300, letterSpacing: '.08em' }}>重庆</h3>
                <span style={{ fontSize: '.52rem', letterSpacing: '.18em', color: '#c9a96e', opacity: 0.7 }}>6 家直营</span>
              </div>
              {['十八梯店', '鹅岭二厂店', '时代天街C馆店', '观音桥阳光世纪店', '大石坝悦荟店', '南坪万达店'].map((name, i) => (
                <div key={name} className="r" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <span style={{ fontSize: '.48rem', color: '#c9a96e', opacity: 0.45, minWidth: '18px', letterSpacing: '.05em' }}>0{i+1}</span>
                  <span style={{ fontSize: '.88rem', letterSpacing: '.04em', opacity: 0.6 }}>{name}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <h3 className="r" style={{ fontSize: '1.3rem', fontWeight: 300, letterSpacing: '.08em' }}>成都</h3>
                <span style={{ fontSize: '.52rem', letterSpacing: '.18em', color: '#c9a96e', opacity: 0.7 }}>2 家联营</span>
              </div>
              {['春熙路北段店', '东郊记忆店'].map((name, i) => (
                <div key={name} className="r" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <span style={{ fontSize: '.48rem', color: '#c9a96e', opacity: 0.45, minWidth: '18px', letterSpacing: '.05em' }}>0{i+1}</span>
                  <span style={{ fontSize: '.88rem', letterSpacing: '.04em', opacity: 0.6 }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '2px', minHeight: '480px' }}>
            <img src={assetPath('/images/stores/store-1.webp')} alt="马登门店入口" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.65)' }} />
            <img src={assetPath('/images/stores/store-10.webp')} alt="马登门店陈列" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.65)' }} />
          </div>
        </div>
      </section>

      {/* Shop Channels */}
      <section id="shop" className="sec-pad" style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>立即购买</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            全渠道官方旗舰店
          </h2>
        </div>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,.04)' }}>
          {shopChannels.map(ch => (
            <ShopChannel key={ch.name} name={ch.name} sub={ch.sub} href={ch.href} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={assetPath("/images/ali-sweater.webp")} alt="马登工装" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.2)' }} />
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
