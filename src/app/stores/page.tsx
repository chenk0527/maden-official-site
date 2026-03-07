import type { Metadata } from 'next'
import StoreCard from '@/components/StoreCard'
import { cityStores } from '@/data/stores'

export const metadata: Metadata = {
  title: '实体门店 | 马登工装全国门店地址',
  description: '马登工装全国7家实体门店：重庆5家（解放碑旗舰店、观音桥、三峡广场、南坪万达、杨家坪）+ 成都2家（春熙路、太古里）。欢迎到店体验。',
  keywords: ['马登工装门店', '马登工装重庆', '马登工装成都', '解放碑旗舰店', '春熙路店'],
  alternates: { canonical: 'https://madenfushi.com/stores' },
  openGraph: {
    title: '马登工装实体门店 — 重庆5家 · 成都2家',
    description: '全国7家实体门店，欢迎到店体验美式复古工装。',
    url: 'https://madenfushi.com/stores',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: '马登工装 解放碑旗舰店',
  address: { '@type': 'PostalAddress', streetAddress: '解放碑', addressLocality: '重庆', addressCountry: 'CN' },
  brand: { '@type': 'Brand', name: 'MADEN 马登工装' },
  priceRange: '¥99-¥999',
}

export default function StoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section style={{ padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>线下门店</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          实体门店
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.4)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          重庆5家 · 成都2家 · 全国7家实体门店<br />欢迎到店体验，感受真实的美式工装质感
        </p>
      </section>

      <section style={{ padding: '80px 48px 80px' }}>
        <div className="stores-2col">
          {cityStores.map((city, i) => (
            <StoreCard key={city.city} cityData={city} direction={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </section>

      <section style={{ padding: '0 48px 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="r" style={{ background: '#0e0e0e', padding: '60px', textAlign: 'center', borderTop: '1px solid rgba(201,169,110,.15)', borderBottom: '1px solid rgba(201,169,110,.15)' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, color: '#c9a96e', marginBottom: '12px', letterSpacing: '.05em' }}>
              地图导航
            </p>
            <p style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.3)', lineHeight: 1.8 }}>
              在高德地图 / 百度地图搜索「马登工装」即可找到最近门店<br />
              或拨打门店电话提前预约
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 48px 140px' }}>
        <div className="stores-3col">
          {[
            { title: '营业时间', text: '周一至周日 10:00 - 22:00\n节假日正常营业' },
            { title: '到店须知', text: '可直接到店选购，无需预约\n支持试穿，专业店员提供搭配建议' },
            { title: '联系方式', text: '全国客服：service@madenfushi.com\n微信公众号：马登工装' },
          ].map(item => (
            <div key={item.title} className="r" style={{ padding: '32px', background: '#0e0e0e' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 300, color: '#c9a96e', marginBottom: '16px' }}>{item.title}</h3>
              <p style={{ fontSize: '.85rem', lineHeight: 1.9, fontWeight: 200, color: 'rgba(232,228,223,.4)', whiteSpace: 'pre-line' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .stores-2col { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        .stores-3col { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px; }
        @media (max-width: 900px) {
          .stores-2col, .stores-3col { grid-template-columns: 1fr !important; gap: 40px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </>
  )
}
