import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { assetPath } from '@/utils/path'

const blogContent: Record<string, React.ReactNode> = {
  'm65-jacket-guide': (
    <>
      <p>M65野战夹克，或许是美式工装中传奇性最强的单品。它不只是一件夹克，它是越战的历史，是反战运动的符号，是无数电影里主角的标配。</p>

      <h2>什么是M65？</h2>
      <p>M65是美国陆军于1965年正式列装的野战夹克（Field Jacket，M-1965）。它在此前M51和M60版本的基础上改进而来，是一件高度实用的军用外衣：</p>
      <ul>
        <li><strong>四个大口袋</strong>：两个胸口斜拉链袋 + 两个腰部翻盖袋，容量极大</li>
        <li><strong>藏帽领口</strong>：领口内藏一顶折叠风帽，拉开即可使用</li>
        <li><strong>双重前门襟</strong>：拉链 + 对扣，防风防雨双重保障</li>
        <li><strong>收紧腰部</strong>：腰部有内置束带，可以收腰或放松</li>
        <li><strong>袖口收紧</strong>：袖口有细绳收紧设计，防止寒风灌入</li>
      </ul>

      <h2>M65的历史</h2>
      <p>M65大量使用于越南战争（1965-1975年）。越南的热带丛林气候让这件夹克经历了极端测试——高温、暴雨、泥泞。它的实用性在战场上得到了充分验证。</p>
      <p>越战结束后，大量剩余军用M65通过二手店流入民间。嬉皮士、摇滚青年、反战运动参与者开始穿上这件夹克，赋予了它新的文化含义——这是对战争的反思，也是对建制的叛逆。</p>
      <p>电影《出租车司机》（1976）中，罗伯特·德尼罗穿着一件破旧的M65，成了这个时代最标志性的影像之一。</p>

      <h2>选购要点</h2>
      <h3>面料与重量</h3>
      <p>正版M65面料为棉/尼龙混纺斜纹布（Cotton Ripstop），克重在200-250g之间。这种面料轻薄而耐磨，有一定的防风防泼水能力。现代复刻版通常使用纯棉面料，更厚重但也更有质感。</p>

      <h3>版型</h3>
      <p>M65的版型偏宽松，腰部可以通过束带调节。选购时建议选择比平时大一号的尺码，方便里面套上厚卫衣或毛衣。标准穿法是把腰部束带系起来，形成收腰的轮廓，而不是完全放开的箱型。</p>

      <h3>颜色选择</h3>
      <p>原版M65有三种颜色：OD（橄榄绿，最经典）、黑色、迷彩（Woodland迷彩，越战后期和冷战时期）。日常搭配首选橄榄绿，百搭度最高；黑色更城市化；迷彩需要全身较低调的搭配才能hold住。</p>

      <h3>细节检查</h3>
      <ul>
        <li>口袋铆钉是否完整</li>
        <li>拉链顺滑度（YKK或同等级）</li>
        <li>藏帽是否完好（很多廉价版本省略了这个设计）</li>
        <li>缝线是否均匀，有无脱线</li>
      </ul>

      <h2>马登工装的M65</h2>
      <p>马登工装的M65复刻版型忠实于越战时期原版，采用200g重磅棉斜纹面料，保留了藏帽设计和全套口袋配置。价格在¥299-¥399区间，是入门M65的高性价比选择。</p>

      <p style={{ textAlign: 'center', marginTop: '48px' }}>
        <Link href="/products" style={{ display: 'inline-block', padding: '14px 48px', border: '1px solid rgba(201,169,110,.4)', fontSize: '.65rem', letterSpacing: '.4em', fontWeight: 300, color: '#e8e4df' }}>
          查看全系列工装夹克
        </Link>
      </p>
    </>
  ),

  'gat-sneaker-style': (
    <>
      <p>如果只能推荐一双工装风必备鞋款，那一定是德训鞋（GAT，German Army Trainer）。它简洁、百搭、有历史背景，是阿美咔叽圈里公认的"万能鞋"。</p>

      <h2>德训鞋的来历</h2>
      <p>德训鞋全称"德国陆军训练鞋"（German Army Trainer），1970年代由Adidas为西德军队设计，供士兵日常训练使用。设计极简：白色麂皮鞋面、帆布加固、三横杠标志、平底橡胶大底。功能先于形式，却无意间创造了一个经典。</p>
      <p>冷战结束后，大量德训鞋通过军用剩余渠道流入欧洲市场。英国、日本的复古店率先发现了这双鞋的美——它干净、耐磨、不张扬，完美契合工装、军装、学院风的整体气质。</p>

      <h2>10种穿搭场景</h2>

      <h3>场景1：日常通勤（最简单）</h3>
      <p>白色德训鞋 + 橄榄绿工装裤 + 白色T恤 + 哈灵顿夹克。整套不超过4件单品，颜色控制在3色以内。德训鞋的白色作为视觉焦点，让整套穿搭提亮。</p>

      <h3>场景2：秋冬层叠</h3>
      <p>德训鞋 + OG-107工装裤 + 法兰绒格纹衬衫（敞开穿） + 白色基础卫衣 + M65夹克。工装裤的厚度压住德训鞋，比配休闲裤更有质感。</p>

      <h3>场景3：轻量户外</h3>
      <p>德训鞋 + 宽松卡其棉裤 + 半拉链针织衫 + 渔夫帽。适合周末公园、咖啡馆、图书馆等场合。</p>

      <h2>保养方法</h2>
      <p>白色麂皮容易脏，建议购买麂皮专用清洁剂和防污喷雾。沾灰用软毛刷轻拂，不要用湿布直接擦拭麂皮部分。帆布部分可以用中性肥皂加软毛牙刷轻刷。</p>

      <h2>选购指南</h2>
      <p>正宗的GAT复刻由Adidas出品（Adidas GSG-9、Adidas Trainer等型号），价格在¥500-¥800。马登工装也有类似设计的训练鞋，¥199起，适合入门尝试。</p>
    </>
  ),

  'brand-story': (
    <>
      <p>2008年，重庆解放碑附近，一间不足50平方米的小工作室里，三个二十多岁的年轻人正在讨论如何做出一件真正像样的美式工装夹克。</p>
      <p>十八年后，那三个年轻人的品牌——马登工装——已经拥有全国7家实体门店，70+线上店铺，和135万抖音粉丝。但他们说，从来没有想过要"成功"。只是想做好一件夹克而已。</p>

      <h2>起点：一件哈灵顿夹克</h2>
      <p>2008年，中国的美式复古工装市场几乎是空白。想买一件像样的哈灵顿夹克，要么买国外进口（贵且难买），要么买国内仿制（做工粗糙、版型走样）。</p>
      <p>马登的三位创始人——都是美式复古文化的深度爱好者——决定自己动手。他们走访了重庆本地的服装厂，研究了大量原版军服和工装的版型，历经反复打样，做出了第一件哈灵顿夹克。</p>
      <p>在网上一发出来，几天内就售罄了。</p>

      <h2>建立品牌：「马登工装」正式诞生</h2>
      <p>2011年，随着产品线逐渐丰富，「马登工装」品牌正式注册成立。此时品牌已经建立了工装夹克、裤装、衬衫三个品类，在淘宝上积累了第一批忠实客户。</p>
      <p>品牌名"马登"并非英文直译，而是创始人自己起的。他们想要一个听起来有力量感、同时朗朗上口的名字。MADEN，像是一个工人的名字，又像是英文"Made in"（制造于）的变体——始于中国，做世界水准的工装。</p>

      <h2>扩张：从线上到实体</h2>
      <p>2018年，品牌创立十周年，马登在重庆解放碑开出了第一家实体店。这是一个关键节点——实体店意味着消费者可以摸到面料、看到版型、感受做工，而不只是看图购买。</p>
      <p>实体店的销售远超预期。工装的质感需要亲身感受——当顾客第一次摸到200g重磅棉的分量，第一次看到手工缝线的细节，购买的意愿就会大幅提升。</p>
      <p>2022年，成都太古里和春熙路两家门店开业。西南市场的反应同样热烈。</p>

      <h2>数字时代：135万粉丝</h2>
      <p>2020年后，抖音成为马登品牌传播最重要的渠道之一。比起图文，视频能更直观地展示工装的面料质感、穿搭效果和品牌故事。</p>
      <p>马登的抖音账号从不做"爆款"逻辑，而是专注于内容深度：工装历史科普、单品开箱、创始人讲品牌故事。这种做法获得了忠实粉丝的认可，到2024年抖音粉丝突破135万。</p>

      <h2>未来：始于重庆，走向世界</h2>
      <p>2026年，马登官网上线，同时开启国际化布局的初步探索。创始人说，他们不着急。</p>
      <p>"我们做了18年工装，只学会了一件事：好东西不怕慢。"</p>
    </>
  ),
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: '文章未找到' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://madenfushi.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://madenfushi.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [assetPath(post.image)],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const content = blogContent[slug]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: '马登工装 MADEN',
      logo: 'https://madenfushi.com/images/avatar.jpg',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src={assetPath(post.image)} alt={post.title} fill style={{ objectFit: 'cover', filter: 'brightness(.3)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '48px', maxWidth: '900px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <span style={{ fontSize: '.55rem', letterSpacing: '.3em', color: '#c9a96e', fontWeight: 300 }}>{post.category}</span>
            <span style={{ fontSize: '.55rem', letterSpacing: '.15em', opacity: 0.3, fontWeight: 300 }}>{post.readTime} 阅读</span>
            <span style={{ fontSize: '.55rem', letterSpacing: '.15em', opacity: 0.3, fontWeight: 300 }}>{post.date}</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '.04em', lineHeight: 1.3 }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '80px 48px 140px' }}>
        <p style={{ fontSize: '1rem', lineHeight: 2, fontWeight: 200, color: 'rgba(232,228,223,.5)', marginBottom: '48px', fontStyle: 'italic' }}>
          {post.description}
        </p>

        <div className="blog-content" style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.65)' }}>
          {content}
        </div>

        {/* Nav */}
        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/blog" style={{ fontSize: '.65rem', letterSpacing: '.3em', opacity: 0.4, fontWeight: 300 }}>
            ← 返回博客
          </Link>
          <Link href="/products" style={{ fontSize: '.65rem', letterSpacing: '.3em', color: '#c9a96e', fontWeight: 300 }}>
            探索产品系列 →
          </Link>
        </div>
      </div>

      <style>{`
        article h2, div[style*="fontSize: '.9rem'"] h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: #c9a96e;
          letter-spacing: .05em;
          margin: 48px 0 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(201,169,110,.15);
        }
        .blog-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: #c9a96e;
          letter-spacing: .05em;
          margin: 48px 0 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(201,169,110,.15);
        }
        .blog-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          color: #e8e4df;
          letter-spacing: .03em;
          margin: 32px 0 12px;
        }
        .blog-content p { margin-bottom: 20px; }
        .blog-content ul { margin: 16px 0 20px 24px; }
        .blog-content ul li { 
          list-style: disc; 
          margin-bottom: 8px; 
          color: rgba(232,228,223,.5);
        }
        .blog-content strong { color: #e8e4df; font-weight: 400; }
        @media (max-width: 900px) {
          div[style*="max-width: 780px"] { padding: 60px 24px 80px !important; }
          section[style*="60vh"] div[style*="padding: 48px"] { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  )
}
