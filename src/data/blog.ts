export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  image: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'm65-jacket-guide',
    title: 'M65夹克完全选购指南：从军用到日常的经典工装',
    description: '深度解析M65野战夹克的历史、版型、面料和选购要点。从越战战场到都市街头，这件夹克为何经久不衰？',
    date: '2026-03-01',
    readTime: '8 分钟',
    image: '/images/ali-harrington.webp',
    category: '选购指南',
  },
  {
    slug: 'gat-sneaker-style',
    title: '德训鞋穿搭手册：最百搭的工装鞋款怎么穿？',
    description: '德国陆军训练鞋（GAT）为什么成了阿美咔叽的必备？10种穿搭场景，从春夏到秋冬，手把手教你驾驭这双鞋。',
    date: '2026-02-15',
    readTime: '6 分钟',
    image: '/images/ali-boots.webp',
    category: '穿搭教程',
  },
  {
    slug: 'brand-story',
    title: '从重庆到全国的工装之路：马登15年品牌故事',
    description: '2008年，三个重庆年轻人的Americana梦想。从一间工作室到全国7家实体门店，马登工装的18年是中国本土工装品牌的缩影。',
    date: '2026-01-20',
    readTime: '10 分钟',
    image: '/images/ali-og107.webp',
    category: '品牌故事',
  },
]
