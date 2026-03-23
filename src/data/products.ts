export interface Product {
  id: string
  name: string
  nameEn: string
  category: string
  price: string
  image: string
  alt: string
  description: string
}

export const products: Product[] = [
  {
    id: 'jackets',
    name: '工装夹克',
    nameEn: 'Jackets',
    category: '外套',
    price: '¥199起',
    image: '/images/ali-harrington.webp',
    alt: '马登工装 哈灵顿G9夹克',
    description: '以美国工业黄金年代为灵感，重磅面料加固缝线，经典版型不过时。哈灵顿夹克、M65野战夹克、底特律工装夹克，件件有历史原型。',
  },
  {
    id: 'pants',
    name: '复古裤装',
    nameEn: 'Pants',
    category: '裤装',
    price: '¥129起',
    image: '/images/ali-og107.webp',
    alt: '马登工装 OG-107军事风工装裤',
    description: 'OG-107工装裤、宽松直筒百搭款，复刻二战军用版型，实用多口袋设计，宽松舒适不挑身材。',
  },
  {
    id: 'knitwear',
    name: '针织系列',
    nameEn: 'Knitwear',
    category: '针织',
    price: '¥149起',
    image: '/images/ali-sweater.webp',
    alt: '马登工装 印第安图腾提花毛衣',
    description: '北美印第安图腾提花、费尔岛几何纹样，手工感十足的重磅针织，秋冬必备单品。',
  },
  {
    id: 'outerwear',
    name: '猎装外套',
    nameEn: 'Outerwear',
    category: '外套',
    price: '¥249起',
    image: '/images/ali-wax-jacket.webp',
    alt: '马登工装 油蜡猎装夹克',
    description: '英伦油蜡棉布猎装，防风防雨，越穿越有味道。Barbour同款工艺，在中国找到真实的英式户外精神。',
  },
  {
    id: 'denim',
    name: '牛仔系列',
    nameEn: 'Denim',
    category: '牛仔',
    price: '¥169起',
    image: '/images/ali-jeans.webp',
    alt: '马登工装 赤耳牛仔裤',
    description: '日本赤耳牛仔布，左织自边，经典502直筒裤型。越穿越有感情的工装裤，传承美国牛仔工人精神。',
  },
  {
    id: 'footwear',
    name: '鞋靴系列',
    nameEn: 'Footwear',
    category: '鞋靴',
    price: '¥199起',
    image: '/images/ali-boots.webp',
    alt: '马登男鞋 复古工装靴马丁靴',
    description: '工装靴、马丁靴、德训鞋，从脚开始的复古态度。真皮鞋面、橡胶大底，耐穿又耐看。',
  },
  {
    id: 'shirts',
    name: '衬衫系列',
    nameEn: 'Shirts',
    category: '衬衫',
    price: '¥99起',
    image: '/images/ali-cuban-shirt.webp',
    alt: '马登工装 古巴领短袖衬衫',
    description: '古巴领短袖、法兰绒格纹、牛仔衬衫，全面覆盖工装衬衫品类。宽松版型，穿脱随意。',
  },
  {
    id: 'hoodies',
    name: '卫衣系列',
    nameEn: 'Hoodies',
    category: '卫衣',
    price: '¥119起',
    image: '/images/ali-hoodie-deck.webp',
    alt: '马登工装 甲板连帽卫衣',
    description: '甲板卫衣、运动卫衣、半拉链套头，美国海军蓝领工人的日常穿着，重磅克重，有型有料。',
  },
  {
    id: 'down',
    name: '羽绒系列',
    nameEn: 'Down',
    category: '羽绒',
    price: '¥299起',
    image: '/images/ali-down-vest.webp',
    alt: '马登工装 羽绒马甲背心',
    description: '羽绒马甲、短款羽绒夹克，军事风廓形设计，保暖不臃肿，冬季工装搭配的点睛之笔。',
  },
]

export const lookbookItems = [
  { image: '/images/ali-gorpcore.webp', alt: '马登工装 冲锋衣穿搭', label: '造型 01 · 山系机能' },
  { image: '/images/ali-coat.webp', alt: '马登工装 牛角扣大衣穿搭', label: '造型 02 · 毛呢大衣' },
  { image: '/images/ali-ma1.webp', alt: '马登工装 MA-1飞行夹克穿搭', label: '造型 03 · MA-1飞行' },
  { image: '/images/ali-halfzip.webp', alt: '马登工装 灯芯绒半拉链穿搭', label: '造型 04 · 灯芯绒' },
  { image: '/images/ali-fleece.webp', alt: '马登工装 抓绒卫衣穿搭', label: '造型 05 · 抓绒卫衣' },
  { image: '/images/ali-down-vest.webp', alt: '马登工装 羽绒马甲穿搭', label: '造型 06 · 羽绒马甲' },
  { image: '/images/ali-cuban-shirt.webp', alt: '马登工装 古巴领衬衫穿搭', label: '造型 07 · 古巴领衬衫' },
  { image: '/images/ali-hoodie-deck.webp', alt: '马登工装 甲板卫衣穿搭', label: '造型 08 · 甲板卫衣' },
]

export const shopChannels = [
  { name: '淘宝', sub: '马登工装淘宝店', href: 'https://kana52030.taobao.com' },
  { name: '天猫', sub: '马登旗舰店', href: 'https://kana52030.tmall.com' },
  { name: '抖音', sub: '马登官方旗舰店', href: 'https://www.douyin.com/user/MS4wLjABAAAAJIU0tHMNE7wBLvlwa30WmALTMhsrvdcrHlryVMEB9n0' },
  { name: '京东', sub: '马登京东旗舰店', href: 'https://mall.jd.com/index-10987346.html' },
  { name: '拼多多', sub: '马登旗舰店', href: 'https://mobile.yangkeduo.com/mall_page.html?mall_id=13333156' },
  { name: '得物', sub: '马登官方', href: 'https://www.dewu.com/brand/brand-detail?brandId=1001429' },
  { name: '小红书', sub: '马登工装旗舰店', href: 'https://www.xiaohongshu.com/user/profile/5d39eb4b0000000011012e58' },
  { name: '实体门店', sub: '重庆6店 · 成都2店', href: '/stores' },
]
