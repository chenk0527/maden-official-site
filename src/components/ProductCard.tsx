import Image from 'next/image'
import type { Product } from '@/data/products'
import { assetPath } from '@/utils/path'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="col-item">
      <Image
        src={assetPath(product.image)}
        alt={product.alt}
        fill
        sizes="(max-width: 900px) 50vw, 33vw"
      />
      <div className="col-item-text">
        <h3>{product.name}</h3>
        <span>{product.nameEn} · {product.price}</span>
      </div>
      <style>{`
        .col-item { position: relative; overflow: hidden; aspect-ratio: 3/4; cursor: none; }
        .col-item img { object-fit: cover; transition: transform 1.5s cubic-bezier(.4,0,.2,1), filter .8s; filter: brightness(.85) saturate(.9); }
        .col-item:hover img { transform: scale(1.06); filter: brightness(1) saturate(1); }
        .col-item-text { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px; background: linear-gradient(transparent, rgba(0,0,0,.7)); opacity: 0; transform: translateY(10px); transition: all .6s; }
        .col-item:hover .col-item-text { opacity: 1; transform: translateY(0); }
        .col-item-text h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 300; letter-spacing: .08em; margin-bottom: 4px; }
        .col-item-text span { font-size: .55rem; letter-spacing: .3em; opacity: 0.5; font-weight: 300; }
      `}</style>
    </div>
  )
}
