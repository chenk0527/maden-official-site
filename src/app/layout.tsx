import type { Metadata } from 'next'
import { assetPath } from '@/utils/path'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import Loader from '@/components/Loader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  metadataBase: new URL('https://madenfushi.com'),
  title: {
    default: '马登工装 MADEN — 美式复古工装品牌 | 始于重庆 忠于工装 Since 2008',
    template: '%s | 马登工装 MADEN',
  },
  description: '马登工装 MADEN，中国领先的美式复古工装品牌。创立于2008年重庆，坚持Americana精神，提供工装夹克、复古裤装、牛仔、针织、鞋靴等全品类产品。全国7家实体门店，70+线上店铺。',
  keywords: ['马登工装', 'MADEN', '美式复古', '工装品牌', '工装夹克', '复古裤装', '阿美咔叽', 'Americana', '重庆品牌', '底特律夹克', '工装靴', '赤耳牛仔'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '马登工装 MADEN',
    images: [assetPath('/images/ali-harrington.jpg')],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  // Google Search Console / 百度站长验证（填入真实验证码）
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   other: { 'baidu-site-verification': 'YOUR_BAIDU_VERIFICATION_CODE' },
  // },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '马登工装 MADEN',
  url: 'https://madenfushi.com',
  logo: 'https://madenfushi.com/images/avatar.jpg',
  foundingDate: '2008',
  foundingLocation: { '@type': 'Place', name: '重庆' },
  description: '中国领先的美式复古工装品牌，坚持Americana精神，提供工装夹克、复古裤装、牛仔、针织、鞋靴等全品类产品。',
  sameAs: ['https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0'],
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 100 },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Loader />
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
