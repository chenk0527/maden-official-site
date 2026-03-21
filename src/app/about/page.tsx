import type { Metadata } from 'next'
import TimelineItem from '@/components/TimelineItem'
import { assetPath } from '@/utils/path'
import { timeline } from '@/data/timeline'

export const metadata: Metadata = {
  title: '关于我们 | 马登工装品牌故事',
  description: '马登工装MADEN品牌故事——三位重庆年轻人的Americana梦想。从2011年到今天，15年专注美式复古工装，始于重庆，忠于工装。',
  alternates: { canonical: 'https://madenfushi.com/about' },
  openGraph: {
    title: '关于马登工装 MADEN — 始于重庆，忠于工装',
    description: '三位重庆年轻人的Americana梦想。2011年创立，15年专注美式复古工装。',
    url: 'https://madenfushi.com/about',
  },
}

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
  { year: '2017', title: '白岩村小白鞋计划', desc: '为山区孩子捐赠白色运动鞋，让每个孩子都能穿上干净整洁的鞋子走进课堂。', row: 'top' },
  { year: '2018', title: '吉安小学梦想家计划', desc: '走进吉安小学，为孩子们搭建梦想空间，捐赠学习物资，陪伴成长。', row: 'bottom' },
  { year: '2019', title: '七分村小净水计划', desc: '为偏远山村小学捐赠净水设备，让孩子们喝上干净安全的饮用水。', row: 'top' },
  { year: '2020', title: '洞塘小学防疫关爱', desc: '疫情期间深入基层，向洞塘小学捐赠防护物资，守护孩子们的健康安全。', row: 'bottom' },
  { year: '2021', title: '海军希望小学伴学计划', desc: '走进希望小学，与孩子们结对伴学，用陪伴点亮山区孩子的求知热情。', row: 'top' },
  { year: '2022', title: '山区崇兴小学伴学计划', desc: '深入崇兴小学开展伴学活动，捐赠书包文具，助力山区教育事业发展。', row: 'bottom' },
  { year: '2023', title: '岩东乡小学伴学计划', desc: '前往岩东乡小学，持续推进伴学公益，让知识和关爱在山区生根发芽。', row: 'top' },
  { year: '2024', title: '两岔村小学梦想家电影院', desc: '为两岔村小学建立公益电影院，让大山里的孩子用光影看见更广阔的世界。', row: 'bottom' },
  { year: '2025', title: '洞塘小学伴学计划', desc: '再度走进洞塘小学，延续伴学承诺，与孩子们共同书写新的成长故事。', row: 'top' },
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
          Since 2011 · Americana Spirit · Made in China
        </p>
      </section>

      {/* 品牌故事 */}
      <section style={{ padding: '80px 48px 140px' }}>
        <div className="about-split">
          <div className="r-left about-img" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <img
              src={assetPath("/images/ali-harrington.webp")}
              alt="马登工装品牌故事"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }}
            />
          </div>
          <div className="r-right">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '.04em', marginBottom: '32px' }}>
              三个人，一间工作室，<br />一个关于工装的梦
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)', marginBottom: '20px' }}>
              2011年，重庆，三位二十出头的年轻人，因为共同热爱美式复古文化走到了一起。那个年代，中国市场几乎找不到一件像样的美式工装。于是他们决定自己做。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)', marginBottom: '20px' }}>
              从一件哈灵顿夹克开始，马登逐渐建立起自己的产品体系。不追快时尚，不做爆款逻辑，只做经典的、有历史原型的、能穿十年的好衣服。
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 400, color: 'rgba(232,228,223,.7)' }}>
              如今，马登已成为中国美式复古工装领域的代表品牌之一。年销售1100万件，全国8家实体门店，70+线上店铺，全网粉丝突破1000万，443人团队，80家战略工厂保障品质与交付。但无论规模怎么变，那股对Americana精神的执念从未改变。
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <p style={{ fontSize: '.65rem', letterSpacing: '.3em', color: '#c9a96e', opacity: 0.7, fontWeight: 400 }}>{b.tag}</p>
                  <span style={{ fontSize: '.6rem', letterSpacing: '.1em', color: '#c9a96e', border: '1px solid rgba(201,169,110,.3)', padding: '3px 10px', fontWeight: 400 }}>{b.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, letterSpacing: '.08em', marginBottom: '6px', color: 'rgba(232,228,223,.95)' }}>{b.name}</h3>
                <p style={{ fontSize: '.65rem', letterSpacing: '.25em', color: 'rgba(232,228,223,.25)', marginBottom: '20px', fontWeight: 400 }}>{b.en}</p>
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
      <section style={{ padding: '120px 48px', background: '#0e0e0e', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.5em', opacity: 0.4, marginBottom: '16px', fontWeight: 400, textAlign: 'center' }}>公益足迹</p>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.15, letterSpacing: '.04em', marginBottom: '8px', textAlign: 'center' }}>
            马登公益足迹
          </h2>
          <p className="r" style={{ fontSize: '.7rem', letterSpacing: '.3em', color: '#c9a96e', opacity: 0.5, marginBottom: '16px', textAlign: 'center', fontWeight: 400 }}>MADEN CHARITY FUND</p>
          <p className="r" style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(232,228,223,.45)', marginBottom: '80px', lineHeight: 1.8, textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}>
            我们相信，一个好品牌不只卖衣服。从2017年起，马登持续深入贫困山区，用行动陪伴孩子成长。
          </p>

          {/* 双排错列时间轴 */}
          <div style={{ position: 'relative' }}>
            {/* 中间横线 */}
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(201,169,110,.12)', transform: 'translateY(-50%)' }} />

            <div className="charity-grid">
              {charities.map((c) => (
                <div key={c.year} className={`r charity-item charity-${c.row}`}>
                  {c.row === 'top' ? (
                    /* 上排：内容在上，年份+圆点在下 */
                    <>
                      <div className="charity-content-top">
                        <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 400, color: 'rgba(232,228,223,.9)', marginBottom: '8px', letterSpacing: '.03em' }}>{c.title}</h4>
                        <p style={{ fontSize: '.82rem', lineHeight: 1.7, fontWeight: 400, color: 'rgba(232,228,223,.45)' }}>{c.desc}</p>
                      </div>
                      <div className="charity-node-top">
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 300, color: '#c9a96e', display: 'block', marginBottom: '8px' }}>{c.year}</span>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c9a96e', opacity: 0.7, border: '2px solid #0e0e0e', outline: '1px solid rgba(201,169,110,.4)', margin: '0 auto' }} />
                      </div>
                    </>
                  ) : (
                    /* 下排：圆点+年份在上，内容在下 */
                    <>
                      <div className="charity-node-bottom">
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c9a96e', opacity: 0.7, border: '2px solid #0e0e0e', outline: '1px solid rgba(201,169,110,.4)', margin: '0 auto 8px' }} />
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 300, color: '#c9a96e', display: 'block' }}>{c.year}</span>
                      </div>
                      <div className="charity-content-bottom">
                        <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 400, color: 'rgba(232,228,223,.9)', marginBottom: '8px', letterSpacing: '.03em' }}>{c.title}</h4>
                        <p style={{ fontSize: '.82rem', lineHeight: 1.7, fontWeight: 400, color: 'rgba(232,228,223,.45)' }}>{c.desc}</p>
                      </div>
                    </>
                  )}
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
            15年，一件事
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

        /* 公益时间轴 */
        .charity-grid {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          min-height: 420px;
          position: relative;
        }
        .charity-item {
          display: flex;
          flex-direction: column;
          padding: 0 12px;
          position: relative;
        }
        .charity-top {
          justify-content: flex-end;
        }
        .charity-bottom {
          justify-content: flex-start;
        }
        .charity-content-top {
          padding-bottom: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .charity-node-top {
          text-align: center;
          padding-top: 12px;
        }
        .charity-node-bottom {
          text-align: center;
          padding-bottom: 12px;
        }
        .charity-content-bottom {
          padding-top: 24px;
          flex: 1;
        }

        @media (max-width: 1100px) {
          .charity-grid { grid-template-columns: repeat(3, 1fr) !important; min-height: auto !important; gap: 32px; }
          .charity-item { flex-direction: column !important; }
          .charity-content-top, .charity-content-bottom { padding: 16px 0 !important; }
          .charity-node-top, .charity-node-bottom { display: none; }
        }
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .brands-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .phil-3col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .charity-grid { grid-template-columns: 1fr !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </>
  )
}
