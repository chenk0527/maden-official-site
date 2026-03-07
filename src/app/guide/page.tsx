import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '美式复古工装完全指南 | 阿美咔叽 Americana 穿搭',
  description: '5000字深度解析美式复古工装（阿美咔叽/Americana）：历史起源、核心单品M65/MA1/工装裤/德训鞋、穿搭技巧，以及马登工装的品牌定位。',
  keywords: ['美式复古工装', '阿美咔叽', 'Americana', 'M65夹克', 'MA1飞行夹克', '工装裤', '德训鞋', '马丁靴', '工装穿搭指南'],
  alternates: { canonical: 'https://madenfushi.com/guide' },
  openGraph: {
    title: '美式复古工装完全指南 — 从入门到精通',
    description: '5000字深度解析阿美咔叽风格：历史、单品、搭配、选购，一文读懂美式工装。',
    url: 'https://madenfushi.com/guide',
  },
}

const faqItems = [
  { q: '阿美咔叽和美式复古有什么区别？', a: '阿美咔叽（Amekaji）是日本人对"美式休闲"的音译称呼，特指经过日本人筛选、精炼后的美式复古风格——更注重细节、版型和面料。Americana则是更广泛的美国复古文化总称。简单说，阿美咔叽是Americana通过日本滤镜的产物。' },
  { q: 'M65和MA-1有什么区别？', a: 'M65是美国陆军1965年列装的野战夹克，四个大口袋设计，帽子可藏于领口。MA-1是美国空军飞行员夹克，橙色里衬是标志性设计（方便落水后被搜救）。前者更陆战风，后者更航空风。' },
  { q: '工装裤怎么区分好坏？', a: '看面料克重（200g+为重磅）、缝线是否为双线加固、口袋是否有铆钉固定、版型是否有历史原型。好的工装裤版型宽松、落裆略低，穿起来有工人感而不是普通休闲裤。' },
  { q: '德训鞋适合什么季节穿？', a: '德训鞋（GAT，德国陆军训练鞋）四季皆宜。春夏搭配工装裤轻盈通透，秋冬搭配厚料长裤压住鞋身。白色底色百搭，不挑肤色不挑裤型。' },
  { q: '第一次入手工装应该买什么？', a: '推荐从一件工装夹克开始——比如哈灵顿夹克或M65。上身容错率高，能驾驭大多数休闲场合。搭配一条宽松直筒工装裤，基础工装look就完成了。' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function GuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ paddingTop: '180px', padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>品类指南</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '.08em', lineHeight: 1.1, marginBottom: '24px' }}>
          美式复古工装<br />完全指南
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.4)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
          从阿美咔叽的历史起源，到M65、MA-1、工装裤、德训鞋的选购要点，再到如何构建你的第一套工装搭配。
        </p>
      </section>

      {/* Article */}
      <article style={{ padding: '40px 48px 140px', maxWidth: '900px', margin: '0 auto' }}>

        <section style={{ marginBottom: '80px' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            一、什么是美式复古工装（阿美咔叽/Americana）
          </h2>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            <strong style={{ color: '#e8e4df' }}>阿美咔叽（Amekaji）</strong>是"American Casual"的日语音译，字面意为"美式休闲"。但这个词远不只是字面意思——它代表了一种起源于美国、经由日本人精炼后再传回亚洲的复古穿衣哲学。
          </p>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            <strong style={{ color: '#e8e4df' }}>Americana</strong>则是更广泛的概念，泛指一切具有美国文化属性的事物：蓝领工人的工装、西部牛仔的牛仔裤、二战军人的军服、常青藤校园的学院风……这些服装类型在20世纪中叶的美国日常中随处可见，如今却成了全球复古爱好者趋之若鹜的经典。
          </p>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)' }}>
            马登工装做的，正是这件事——用中国的工艺和价格，还原最纯正的美国工装精神。
          </p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            二、工装的历史起源
          </h2>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.04em', marginBottom: '16px', marginTop: '32px' }}>
            二战军服（1940s）
          </h3>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            现代工装最重要的源头之一来自二战。美国军队大量列装M43野战夹克、OD（橄榄绿）工装裤、卡其棉布衬衫。这些服装要求极致耐用、功能实用，诞生了多口袋设计、加固缝线、金属铆钉等至今仍是工装标配的设计语言。
          </p>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            战争结束后，大量剩余军服流入民间，成为蓝领工人的日常穿着。军装的实用主义基因就此转化为工装文化的核心。
          </p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.04em', marginBottom: '16px', marginTop: '32px' }}>
            工厂劳工（1950s-1960s）
          </h3>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            五六十年代是美国制造业的黄金时代。底特律的汽车工人、匹兹堡的钢铁工人、德州的石油工人——他们穿着Levi's工装裤、Lee牛仔夹克在生产线上劳动。这一时期的工装以耐磨、实用、宽松为特点，原色帆布、厚牛仔布、棉质斜纹布是主要面料。
          </p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.04em', marginBottom: '16px', marginTop: '32px' }}>
            亚文化运动（1970s-1980s）
          </h3>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            七八十年代，工装开始被青年亚文化挪用。摩托车帮、朋克、街头滑板族开始穿着工装夹克和军靴，赋予这些实用主义服装更多反叛色彩。MA-1飞行夹克从军用转为街头标志，工装靴（Dr. Martens）成为朋克符号。
          </p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '.04em', marginBottom: '16px', marginTop: '32px' }}>
            日本的精炼与传播（1980s至今）
          </h3>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)' }}>
            日本人对美国流行文化的热爱催生了一批专注于Americana复刻的品牌（Buzz Rickson's、The Real McCoy's、Warehouse等）。他们走访美国各地，研究原版军服和工装的面料、版型、工艺，用超越原版的精细程度进行复刻。这股风潮在90年代通过杂志、唱片扩散到整个亚洲，孕育了今天的阿美咔叽文化圈。
          </p>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            三、核心单品指南
          </h2>

          {[
            {
              title: 'M65 野战夹克',
              content: 'M65于1965年正式列装美国陆军，越战时期大量使用。经典设计：四个大口袋（两个胸袋两个腰袋）、藏帽领口、拉链+对扣双保险前襟、袖口和下摆收紧束带。面料为棉质斜纹布，早期版本为OD橄榄绿，后期出现黑色、迷彩版本。\n\n选购要点：看口袋铆钉是否齐全、束带是否完好、面料克重（200g+为佳）。版型应宽松，可以在夹克里面套上毛衣或卫衣。',
            },
            {
              title: 'MA-1 飞行夹克',
              content: 'MA-1是美国空军飞行员夹克，1950年代开始列装。最标志性的设计是橙色里衬——飞行员落水后翻出里衬增加可见度。其他特征：左肩的工具包口袋、金属YKK拉链、针织领口袖口腰口。\n\n选购要点：正版MA-1应有"sage green"（鼠尾草绿）或黑色外壳配橙色里衬。市面上很多"MA-1"省略了橙色里衬，是不正宗的简化版。',
            },
            {
              title: 'OG-107 工装裤',
              content: 'OG-107（Olive Green 107）是越战时期美军的标准工装裤型。直筒宽松版型、多口袋设计（两个侧缝斜口袋 + 两个大腿口袋 + 后口袋）、棉质斜纹面料。"OG"既是颜色编号也是"original"的缩写，在工装圈代指这类军事风工装裤。\n\n选购要点：版型要够宽松（大腿围要有余量），口袋要够大（能放手机钱包），面料要厚实（200g以上）。',
            },
            {
              title: '德训鞋（GAT）',
              content: '德训鞋全称"德国陆军训练鞋"（German Army Trainer），1970年代由Adidas为西德军队设计。简洁的三横杠设计、白色麂皮+帆布鞋面、平底橡胶大底，是最百搭的工装单品之一。\n\n选购要点：正版GAT鞋底有一定厚度，鞋面挺括不塌。注意辨别仿款，真正的德训鞋在鞋楦上有独特的宽度，穿起来脚感宽松舒适。',
            },
            {
              title: '工装靴/马丁靴',
              content: '工装靴起源于工厂和矿山，要求坚固、防护、耐磨。8孔马丁靴（Dr. Martens 1460）是其中最具代表性的款式。厚实橡胶大底、黄色缝线、气垫底，从工人装备变成了全球青年文化的符号。\n\n选购要点：真皮鞋面经久耐用，正版Dr. Martens有AirWair气垫标志。初次穿需要一段时间磨合，建议穿厚袜子开鞋。',
            },
          ].map(item => (
            <div key={item.title} className="r" style={{ marginBottom: '48px', padding: '32px', background: '#0e0e0e', borderLeft: '2px solid rgba(201,169,110,.3)' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '16px' }}>
                {item.title}
              </h3>
              {item.content.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '.9rem', lineHeight: 2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '12px' }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            四、如何搭配工装风
          </h2>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '24px' }}>
            工装搭配的核心原则只有一个：<strong style={{ color: '#e8e4df' }}>宽松 + 同色系 + 细节呼应</strong>。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
            {[
              {
                title: '基础搭配公式',
                items: ['工装夹克 + 宽松直筒裤 + 德训鞋 = 经典日常', 'MA-1 + 粗棉卫衣 + OG-107 + 马丁靴 = 军事风', '油蜡猎装 + 格纹法兰绒衬衫 + 工装裤 = 英美混搭'],
              },
              {
                title: '色彩法则',
                items: ['主色调以橄榄绿、卡其、深海军蓝、黑为主', '避免超过3种颜色同时出现', '金属配件（皮带扣、铆钉）统一色系'],
              },
              {
                title: '面料层次',
                items: ['里层：棉T或基础白衬衫', '中层：法兰绒衬衫或毛衣', '外层：工装夹克或大衣'],
              },
              {
                title: '常见误区',
                items: ['工装裤不要穿得太紧（失去版型美感）', '不要全身迷彩（太过军装化）', '避免把工装夹克当西装穿（不正式场合）'],
              },
            ].map(block => (
              <div key={block.title} className="r" style={{ padding: '24px', background: '#0e0e0e' }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 300, color: '#c9a96e', marginBottom: '16px' }}>
                  {block.title}
                </h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '.85rem', lineHeight: 1.8, fontWeight: 200, color: 'rgba(232,228,223,.5)', marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#c9a96e' }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            五、马登工装的品牌定位
          </h2>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            马登工装创立于2008年重庆，是中国最早专注于美式复古工装的品牌之一。在大多数国内品牌还在追逐快时尚的年代，马登选择了一条更难走的路：深耕Americana，做有历史原型的工装单品。
          </p>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)', marginBottom: '20px' }}>
            经过18年发展，马登建立了覆盖工装夹克、裤装、针织、鞋靴的完整产品线，全国7家实体门店，70+线上店铺，135万抖音粉丝。在价格上，马登填补了进口复古品牌（动辄3000+）和快时尚低价品之间的空白，提供¥99-¥999的高性价比工装选择。
          </p>
          <p style={{ fontSize: '.9rem', lineHeight: 2.2, fontWeight: 200, color: 'rgba(232,228,223,.6)' }}>
            对于想要入门工装风的中国消费者来说，马登是最值得信赖的起点之一。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#c9a96e', letterSpacing: '.05em', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,169,110,.2)' }}>
            常见问题 FAQ
          </h2>
          {faqItems.map((item, i) => (
            <div key={i} className="r" style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '.03em', marginBottom: '12px', color: '#e8e4df' }}>
                Q: {item.q}
              </h3>
              <p style={{ fontSize: '.85rem', lineHeight: 1.9, fontWeight: 200, color: 'rgba(232,228,223,.5)' }}>
                A: {item.a}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="r" style={{ marginTop: '80px', textAlign: 'center', padding: '60px 32px', background: '#0e0e0e', borderTop: '1px solid rgba(201,169,110,.2)' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, marginBottom: '16px', letterSpacing: '.05em' }}>
            准备好开始你的工装之旅了吗？
          </h3>
          <p style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(232,228,223,.4)', marginBottom: '32px' }}>
            探索马登工装全系列，找到属于你的经典单品
          </p>
          <Link
            href="/products"
            className="btn-gold"
          >
            浏览产品系列
          </Link>
        </div>
      </article>

      <style>{`
        @media (max-width: 900px) {
          section { padding: 80px 24px !important; }
          article { padding: 20px 24px 80px !important; }
          article section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
