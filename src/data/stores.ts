export interface Store {
  name: string
  city: string
  district?: string
  address?: string
  type: 'direct' | 'franchise'  // 直营 | 联营
}

export interface CityStores {
  city: string
  count: number
  type: string
  stores: Store[]
}

export const cityStores: CityStores[] = [
  {
    city: '重庆',
    count: 6,
    type: '直营店',
    stores: [
      { name: '十八梯店', city: '重庆', district: '渝中区', address: '十八梯传统风貌区', type: 'direct' },
      { name: '鹅岭二厂店', city: '重庆', district: '渝中区', address: '鹅岭贰厂文创公园', type: 'direct' },
      { name: '时代天街C馆店', city: '重庆', district: '渝北区', address: '龙湖时代天街C馆', type: 'direct' },
      { name: '观音桥阳光世纪店', city: '重庆', district: '江北区', address: '观音桥阳光世纪购物中心', type: 'direct' },
      { name: '大石坝悦荟店', city: '重庆', district: '江北区', address: '大石坝悦荟新天地', type: 'direct' },
      { name: '南坪万达店', city: '重庆', district: '南岸区', address: '南坪万达广场', type: 'direct' },
    ],
  },
  {
    city: '成都',
    count: 2,
    type: '联营店',
    stores: [
      { name: '春熙路店', city: '成都', district: '锦江区', address: '春熙路商圈', type: 'franchise' },
      { name: '东郊记忆店', city: '成都', district: '成华区', address: '东郊记忆·国际时尚产业园', type: 'franchise' },
    ],
  },
]
