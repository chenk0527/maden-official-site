import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { assetPath } from '@/utils/path'

export const metadata: Metadata = {
  title: '博客 | 马登工装 — 工装知识与穿搭灵感',
  description: '马登工装博客：工装选购指南、穿搭教程、品牌故事。深度内容，带你了解美式复古工装的世界。',
  alternates: { canonical: 'https://madenfushi.com/blog' },
  openGraph: {
    title: '马登工装博客 — 工装知识与穿搭灵感',
    description: '工装选购指南、穿搭教程、品牌故事，一切关于美式复古工装的内容。',
    url: 'https://madenfushi.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <section style={{ padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>马登日志</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          JOURNAL
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.4)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          工装知识、穿搭灵感、品牌故事
        </p>
      </section>

      <section style={{ padding: '40px 48px 140px' }}>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="r blog-card">
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={assetPath(post.image)} alt={post.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(.7)' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '.55rem', letterSpacing: '.3em', color: '#c9a96e', fontWeight: 300 }}>{post.category}</span>
                  <span style={{ fontSize: '.55rem', letterSpacing: '.15em', opacity: 0.3, fontWeight: 300 }}>{post.readTime} 阅读</span>
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 300, letterSpacing: '.03em', marginBottom: '12px', lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '.8rem', lineHeight: 1.7, fontWeight: 200, color: 'rgba(232,228,223,.4)', marginBottom: '16px' }}>
                  {post.description}
                </p>
                <div style={{ fontSize: '.55rem', letterSpacing: '.2em', opacity: 0.25, fontWeight: 300 }}>{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .blog-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .blog-card { display: block; background: #0e0e0e; overflow: hidden; transition: transform .4s; }
        .blog-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          section { padding: 80px 24px !important; }
        }
      `}</style>
    </>
  )
}
