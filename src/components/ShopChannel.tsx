'use client'

interface Props {
  name: string
  sub: string
  href: string
}

export default function ShopChannel({ name, sub, href }: Props) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className="ch-item"
      style={{
        background: '#f5f3ef',
        padding: '40px 24px',
        textAlign: 'center',
        transition: 'background .6s',
        display: 'block',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#e8e5e0'
        const btn = e.currentTarget.querySelector('.ch-btn') as HTMLElement
        if (btn) {
          btn.style.borderColor = '#1a1a1a'
          btn.style.color = '#1a1a1a'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#f5f3ef'
        const btn = e.currentTarget.querySelector('.ch-btn') as HTMLElement
        if (btn) {
          btn.style.borderColor = 'rgba(26,26,26,.25)'
          btn.style.color = '#1a1a1a'
        }
      }}
    >
      <h4 style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '.05em', marginBottom: '4px' }}>{name}</h4>
      <span style={{ fontSize: '.72rem', letterSpacing: '.3em', opacity: 0.3, display: 'block', marginBottom: '12px' }}>{sub}</span>
      <div
        className="ch-btn"
        style={{
          display: 'inline-block',
          padding: '8px 24px',
          border: '1px solid rgba(26,26,26,.25)',
          fontSize: '.75rem',
          letterSpacing: '.2em',
          fontWeight: 300,
          transition: 'all .4s',
          marginTop: '8px',
        }}
      >
        进入店铺 →
      </div>
    </a>
  )
}
