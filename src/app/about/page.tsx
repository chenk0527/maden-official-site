import type { Metadata } from 'next'
import TimelineItem from '@/components/TimelineItem'
import { assetPath } from '@/utils/path'
import { timeline } from '@/data/timeline'

export const metadata: Metadata = {
  title: '关于我们 | 马登工装品牌故事',
  description: '马登工装MADEN品牌故事——三位重庆年轻人的Americana梦想。从2008年到今天，18年专注美式复古工装，始于重庆，忠于工装。',
  alternates: { canonical: 'https://madenfushi.com/about' },
  openGraph: {
    title: '关于马登工装 MADEN — 始于重庆，忠于工装',
    description: '三位重庆年轻人的Americana梦想。2008年创立，18年专注美式复古工装。',
    url: 'https://madenfushi.com/about',
  },
}

const brands = [
  {
    name: '马登工装',
    en: 'MADEN WORKWEAR',
    desc: '品牌核心产品线，专注男装美式复古工装。工装夹克、军旅裤装、重磅针织，Americana精神的完整表达。',
    tag: '男装 · 主线',
  },
  {
    name: '马登 MADEN',
    en: 'MADEN',
    desc: '延伸副线，覆盖更宽泛的美式休闲风格。融入阿美咔叽元素，年轻化表达，天猫/抖音双渠道发力。',
    tag: '男装 · 副线',
  },
  {
    name: '蝉社',
    en: 'CHANSHE',
    desc: '马登旗下女装品牌，延续复古工装基因，融入女性视角的设计语言，主打精致复古日常穿搭。',
    tag: '女装 · 独立品牌',
  },
]

const charities = [
  { year: '2018', title: '蒲公英计划', desc: '捐助 1,000 套书包及学习用品，送往贫困山区孩子手中。' },
  { year: '2019', title: '爱心捐助', desc: '捐助价值 1 万元物资，支持困难群体生活保障。' },
  { year: '2020', title: '抗疫公益', desc: '疫情暴发之初，第一时间捐助价值 12 万元防护物资，驰援一线。' },
  { year: '2021', title: '爱心捐款', desc: '向公益机构捐款 10 万元，持续推动社会公益事业。' },
  { year: '2022', title: '重庆山火救援', desc: '重庆山火肆虐，捐助 5 万元救援物资，支持消防救援行动。' },
  { year: '2023', title: '扶贫公益', desc: '深入贫困地区，捐助价值 1 万元生活物资，助力乡村振兴。' },
  { year: '2024', title: '公益图书馆', desc: '发起公益图书馆项目，为偏远地区孩子建立阅读空间，点亮知识之光。' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '180px', padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '20px', fontWeight: 400 }}>关于我们</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          始于重庆<br />忠于工装
        </h1>
        <p className="r" style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(232,228,223,.55)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          Since 2008 · Americana Spirit · Made in China
        </p>
      </section>

      {/* 品牌故事 */}
      <section style={{ padding: '80px 48px 140px' }}>
        <div className="about-split">
          <div className="r-left about-img" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={assetPath("/images/ali-harrington.jpg")}
              alt="马登工装品牌故事"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }}
            />
          </div>
          <div className="r-right">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '.04em', marginBottom: '32px' }}>
              三个人，一间工作室，<br />一个关于工装的梦
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)', marginBottom: '20px' }}>
              2008年，重庆，三位二十出头的年轻人，因为共同热爱美式复古文化走到了一起。那个年代，中国市场几乎找不到一件像样的美式工装。于是他们决定自己做。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)', marginBottom: '20px' }}>
              从一件哈灵顿夹克开始，马登逐渐建立起自己的产品体系。不追快时尚，不做爆款逻辑，只做经典的、有历史原型的、能穿十年的好衣服。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)' }}>
              如今，马登已成为中国美式复古工装领域的代表品牌之一。全国9家实体门店，70+线上店铺，135万抖音粉丝。但无论规模怎么变，那股对Americana精神的执念从未改变。
            </p>
          </div>
        </div>
      </section>

      {/* 旗下品牌 */}
      <section style={{ padding: '120px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '16px', fontWeight: 400 }}>旗下品牌</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '64px' }}>
            Sub Brands
          </h2>
          <div className="brands-grid">
            {brands.map((b, i) => (
              <div key={b.name} className="r brand-card" style={{
                border: '1px solid rgba(201,169,110,.15)',
                padding: '48px 40px',
                position: 'relative',
                transition: 'border-color .4s',
              }}>
                {/* 序号 */}
                <span style={{
                  position: 'absolute', top: '24px', right: '28px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '3rem', fontWeight: 300,
                  color: '#c9a96e', opacity: 0.12, lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: '.65rem', letterSpacing: '.3em', color: '#c9a96e', opacity: 0.6, marginBottom: '16px', fontWeight: 400 }}>{b.tag}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, letterSpacing: '.08em', marginBottom: '6px', color: 'rgba(232,228,223,.95)' }}>{b.name}</h3>
                <p style={{ fontSize: '.65rem', letterSpacing: '.25em', color: 'rgba(232,228,223,.25)', marginBottom: '24px', fontWeight: 400 }}>{b.en}</p>
                <p style={{ fontSize: '.95rem', lineHeight: 1.9, fontWeight: 400, color: 'rgba(232,228,223,.6)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '20px', fontWeight: 400 }}>品牌理念</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '64px' }}>
            我们相信什么
          </h2>
          <div className="phil-3col">
            {[
              { title: '工装不是风格，是精神', text: '工装诞生于劳动，服务于实用。我们尊重这个起点——每一件马登工装都有真实的功能，而不只是好看的外表。' },
              { title: '经典胜过潮流', text: '流行每季都变，经典永远在那里。马登不做当季爆款，做的是20年后还能穿出去的衣服。' },
              { title: '中国品牌的Americana', text: '我们在重庆，做的是美国工装文化。这不矛盾——文化没有国界，对品质的追求是全人类共通的语言。' },
            ].map(item => (
              <div key={item.title} className="r">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, letterSpacing: '.05em', marginBottom: '16px', color: '#c9a96e' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, fontWeight: 400, color: 'rgba(232,228,223,.65)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 公益足迹 */}
      <section style={{ padding: '120px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '16px', fontWeight: 400 }}>公益足迹</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '16px' }}>
            马登·公益足迹
          </h2>
          <p className="r" style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(232,228,223,.5)', marginBottom: '64px', lineHeight: 1.8 }}>
            我们相信，一个好品牌不只卖衣服。<br />从2018年起，马登持续参与公益，用行动回馈社会。
          </p>

          <div style={{ position: 'relative' }}>
            {/* 竖线 */}
            <div style={{ position: 'absolute', left: '52px', top: 0, bottom: 0, width: '1px', background: 'rgba(201,169,110,.15)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {charities.map((c, i) => (
                <div key={c.year} className="r charity-row" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', paddingBottom: i === charities.length - 1 ? 0 : '48px' }}>
                  {/* 年份 + 圆点 */}
                  <div style={{ flexShrink: 0, width: '104px', textAlign: 'right', paddingTop: '4px', position: 'relative' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em' }}>{c.year}</span>
                    {/* 圆点 */}
                    <span style={{ position: 'absolute', right: '-28px', top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#c9a96e', opacity: 0.6, display: 'block' }} />
                  </div>
                  {/* 内容 */}
                  <div style={{ paddingLeft: '24px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'rgba(232,228,223,.9)', marginBottom: '8px', letterSpacing: '.03em' }}>{c.title}</h4>
                    <p style={{ fontSize: '.95rem', lineHeight: 1.8, fontWeight: 400, color: 'rgba(232,228,223,.55)' }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 品牌历程 */}
      <section style={{ padding: '140px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '20px', fontWeight: 400 }}>品牌历程</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '48px' }}>
            18年，一件事
          </h2>
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} year={item.year} text={item.text} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </section>

      <style>{`
        .about-split { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .brands-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .brand-card:hover { border-color: rgba(201,169,110,.4) !important; }
        .phil-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .brands-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .phil-3col { grid-template-columns: 1fr !important; gap: 32px !important; }
          section { padding: 80px 24px !important; }
          .charity-row { gap: 20px !important; }
        }
      `}</style>
    </>
  )
}
