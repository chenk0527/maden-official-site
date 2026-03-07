import type { CityStores } from '@/data/stores'

interface Props {
  cityData: CityStores
  direction?: 'left' | 'right'
}

export default function StoreCard({ cityData, direction = 'left' }: Props) {
  return (
    <div className={direction === 'left' ? 'r-left' : 'r-right'}>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2rem',
          fontWeight: 300,
          letterSpacing: '.1em',
          marginBottom: '8px',
          color: '#c9a96e',
        }}
      >
        {cityData.city}
      </h3>
      <div style={{ fontSize: '.6rem', letterSpacing: '.4em', opacity: 0.3, marginBottom: '24px' }}>
        {cityData.count} 家门店
      </div>
      <ul>
        {cityData.stores.map(store => (
          <li
            key={store.name}
            style={{
              padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,.04)',
              fontSize: '.85rem',
              fontWeight: 200,
              opacity: 0.5,
            }}
          >
            {store.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
