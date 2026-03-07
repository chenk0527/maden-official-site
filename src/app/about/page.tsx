import type { Metadata } from 'next'
import Image from 'next/image'
import TimelineItem from '@/components/TimelineItem'
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

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingTop: '180px', padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>关于我们</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          始于重庆<br />忠于工装
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.4)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          Since 2008 · Americana Spirit · Made in China
        </p>
      </section>

      <section style={{ padding: '80px 48px 140px' }}>
        <div className="about-split">
          <div className="r-left about-img" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
            <Image src="/images/ali-harrington.jpg" alt="马登工装品牌故事" fill style={{ objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }} />
          </div>
          <div className="r-right">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '.04em', marginBottom: '32px' }}>
              三个人，一间工作室，<br />一个关于工装的梦
            </h2>
            <p style={{ fontSize: '.9rem', lineHeight: 2, fontWeight: 200, color: 'rgba(232,228,223,.5)', marginBottom: '20px' }}>
              2008年，重庆，三位二十出头的年轻人，因为共同热爱美式复古文化走到了一起。那个年代，中国市场几乎找不到一件像样的美式工装。于是他们决定自己做。
            </p>
            <p style={{ fontSize: '.9rem', lineHeight: 2, fontWeight: 200, color: 'rgba(232,228,223,.5)', marginBottom: '20px' }}>
              从一件哈灵顿夹克开始，马登逐渐建立起自己的产品体系。不追快时尚，不做爆款逻辑，只做经典的、有历史原型的、能穿十年的好衣服。
            </p>
            <p style={{ fontSize: '.9rem', lineHeight: 2, fontWeight: 200, color: 'rgba(232,228,223,.5)' }}>
              如今，马登已成为中国美式复古工装领域的代表品牌之一。全国7家实体门店，70+线上店铺，135万抖音粉丝。但无论规模怎么变，那股对Americana精神的执念从未改变。
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 48px', background: '#0e0e0e' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品牌理念</p>
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
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.05em', marginBottom: '16px', color: '#c9a96e' }}>{item.title}</h3>
                <p style={{ fontSize: '.85rem', lineHeight: 1.8, fontWeight: 200, color: 'rgba(232,228,223,.4)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 48px' }}>
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

      <style>{`
        .about-split { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .phil-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .phil-3col { grid-template-columns: 1fr !important; gap: 32px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </>
  )
}
