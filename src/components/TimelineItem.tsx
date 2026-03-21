interface Props {
  year: string
  text: string
  isLast?: boolean
}

export default function TimelineItem({ year, text, isLast }: Props) {
  return (
    <div
      className="r"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '24px',
        paddingBottom: '40px',
        position: 'relative',
      }}
    >
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: '39px',
            top: '10px',
            bottom: 0,
            width: '1px',
            background: 'rgba(232,57,26,.12)',
          }}
        />
      )}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem',
          fontWeight: 300,
          color: '#e8391a',
          letterSpacing: '.05em',
          position: 'relative',
        }}
      >
        {year}
        <span
          style={{
            position: 'absolute',
            right: '-16px',
            top: '8px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#e8391a',
            display: 'block',
          }}
        />
      </div>
      <div style={{ fontSize: '.85rem', lineHeight: 1.7, fontWeight: 200, color: 'rgba(245,237,232,.45)' }}>
        {text}
      </div>
    </div>
  )
}
