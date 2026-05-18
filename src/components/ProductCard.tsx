'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, Star, Eye } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'

interface Product {
  id: string
  name: string
  price: number
  original_price: number | null
  image: string
  category: string
  rating: number
  reviews: number
  colors: string[]
  badge: string | null
  description: string
  stock: number
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price)
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCartStore()
  const [liked, setLiked] = useState(false)
  const [adding, setAdding] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const handleAddToCart = () => {
    setAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: selectedColor,
    })
    setTimeout(() => {
      setAdding(false)
      openCart()
    }, 600)
  }

  const discount = product.original_price
    ? Math.round((1 - product.price / product.original_price) * 100)
    : null

  return (
    <article className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-pink-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badges */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-pink-dark text-white text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-12 bg-brand-charcoal text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {/* Like */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110"
        >
          <Heart size={13} className={liked ? 'fill-brand-pink-dark text-brand-pink-dark' : 'text-brand-charcoal/40'} />
        </button>

        {/* Overlay actions */}
        <div className="absolute inset-x-0 bottom-0 bg-brand-charcoal/80 py-3 flex items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link
            href={`/productos/${product.id}`}
            className="flex items-center gap-1.5 text-white text-xs tracking-wider uppercase hover:text-brand-pink transition-colors"
          >
            <Eye size={13} />
            Detalles
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.2em] text-brand-charcoal/40 uppercase mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {product.category}
        </p>
        <h3 className="text-base font-semibold text-brand-charcoal leading-snug mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {product.name}
        </h3>
        <p className="text-xs text-brand-charcoal/50 mb-3 line-clamp-2" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
          {product.description}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < product.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-charcoal/15'} />
          ))}
          <span className="text-[10px] text-brand-charcoal/40 ml-1">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2 mb-4">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border-2 transition-transform hover:scale-125 ${
                selectedColor === color ? 'border-brand-charcoal scale-125' : 'border-white shadow-sm'
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold text-brand-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {formatPrice(product.price)}
            </span>
            {product.original_price && (
              <span className="block text-xs text-brand-charcoal/35 line-through" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {formatPrice(product.original_price)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={adding}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              adding
                ? 'bg-green-500 text-white scale-95'
                : 'bg-brand-charcoal hover:bg-brand-pink-dark text-white'
            }`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {adding ? (
              <>✓ Agregado</>
            ) : (
              <>
                <ShoppingBag size={12} />
                Añadir
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
