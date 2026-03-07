export interface Store {
  name: string
  city: string
  district?: string
  address?: string
}

export interface CityStores {
  city: string
  count: number
  stores: Store[]
}

export const cityStores: CityStores[] = [
  {
    city: '重庆',
    count: 5,
    stores: [
      { name: '解放碑旗舰店', city: '重庆', district: '渝中区', address: '解放碑商圈' },
      { name: '观音桥店', city: '重庆', district: '江北区', address: '观音桥商圈' },
      { name: '三峡广场店', city: '重庆', district: '沙坪坝区', address: '三峡广场' },
      { name: '南坪万达店', city: '重庆', district: '南岸区', address: '南坪万达广场' },
      { name: '杨家坪店', city: '重庆', district: '九龙坡区', address: '杨家坪商圈' },
    ],
  },
  {
    city: '成都',
    count: 2,
    stores: [
      { name: '春熙路店', city: '成都', district: '锦江区', address: '春熙路商圈' },
      { name: '太古里店', city: '成都', district: '锦江区', address: '成都远洋太古里' },
    ],
  },
]
