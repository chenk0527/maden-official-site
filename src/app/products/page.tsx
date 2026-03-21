import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: '产品系列 | 马登工装全品类工装',
  description: '马登工装MADEN全品类产品：工装夹克、复古裤装、针织毛衣、猎装外套、牛仔系列、鞋靴、衬衫、卫衣、羽绒。9大品类，件件有历史原型。',
  keywords: ['工装夹克', '复古裤装', '针织毛衣', '猎装外套', '赤耳牛仔', '工装靴', '马登工装产品'],
  alternates: { canonical: 'https://madenfushi.com/products' },
  openGraph: {
    title: '马登工装 MADEN 产品系列 — 全品类美式复古工装',
    description: '9大品类，件件有历史原型。工装夹克、复古裤装、针织、猎装、牛仔、鞋靴、衬衫、卫衣、羽绒。',
    url: 'https://madenfushi.com/products',
  },
}

export default function ProductsPage() {
  return (
    <>
      <section style={{ padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>产品系列</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          全品类工装
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(240,235,232,.4)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          9大品类，每件单品都有真实的历史原型。从M65野战夹克到赤耳牛仔，从德训鞋到羽绒马甲。
        </p>
      </section>

      <section style={{ padding: '40px 48px 140px' }}>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="r product-card">
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src={product.image} alt={product.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(.4,0,.2,1)' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.05em' }}>
                    {product.name}
                  </h2>
                  <span style={{ fontSize: '.7rem', color: '#cc2200', fontWeight: 300 }}>{product.price}</span>
                </div>
                <p style={{ fontSize: '.8rem', lineHeight: 1.7, fontWeight: 200, color: 'rgba(240,235,232,.4)', marginBottom: '20px' }}>
                  {product.description}
                </p>
                <Link href="/#shop" className="btn-gold-sm">立即购买</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .products-grid { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .product-card { background: #0e0e0e; }
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: 1fr 1fr !important; }
          section { padding: 80px 24px !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
