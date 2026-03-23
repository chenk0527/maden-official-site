import { lookbookItems } from '@/data/products'
import { assetPath } from '@/utils/path'

export default function LookbookStrip() {
  return (
    <div className="lookbook-grid">
      {lookbookItems.map((item, i) => (
        <div
          key={i}
          className="lk-img"
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '4/5',
          }}
        >
          <img
            src={assetPath(item.image)}
            alt={item.alt}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(.78)',
              transition: 'filter .8s, transform .8s',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              fontSize: '.75rem',
              letterSpacing: '.3em',
              color: 'rgba(255,255,255,.75)',
              fontWeight: 300,
              zIndex: 2,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
      <style>{`
        .lookbook-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          padding: 0 48px;
        }
        .lk-img:hover img { filter: brightness(.92) !important; transform: scale(1.04); }
        @media (max-width: 900px) {
          .lookbook-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          .lookbook-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
