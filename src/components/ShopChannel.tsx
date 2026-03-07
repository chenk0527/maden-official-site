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
        background: '#0a0a0a',
        padding: '40px 24px',
        textAlign: 'center',
        transition: 'background .6s',
        display: 'block',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#111'
        const btn = e.currentTarget.querySelector('.ch-btn') as HTMLElement
        if (btn) {
          btn.style.borderColor = '#c9a96e'
          btn.style.color = '#c9a96e'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#0a0a0a'
        const btn = e.currentTarget.querySelector('.ch-btn') as HTMLElement
        if (btn) {
          btn.style.borderColor = 'rgba(201,169,110,.25)'
          btn.style.color = '#e8e4df'
        }
      }}
    >
      <h4 style={{ fontSize: '1rem', fontWeight: 400, letterSpacing: '.05em', marginBottom: '4px' }}>{name}</h4>
      <span style={{ fontSize: '.55rem', letterSpacing: '.3em', opacity: 0.3, display: 'block', marginBottom: '12px' }}>{sub}</span>
      <div
        className="ch-btn"
        style={{
          display: 'inline-block',
          padding: '8px 24px',
          border: '1px solid rgba(201,169,110,.25)',
          fontSize: '.6rem',
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
