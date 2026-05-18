'use client'

import { useState } from 'react'
import { ShoppingBag, Heart, Star, Eye } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 'roller-gris-001',
    name: 'Roller Blackout Gris Perla',
    price: 189000,
    original_price: 230000,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80',
    category: 'Roller',
    rating: 5,
    reviews: 24,
    colors: ['#E8E8E8', '#4A4A4A', '#2C2C2C', '#F2C4CE'],
    badge: 'Más vendido',
  },
  {
    id: 'veneciana-beige-001',
    name: 'Veneciana Aluminio Beige',
    price: 145000,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    category: 'Veneciana',
    rating: 4,
    reviews: 18,
    colors: ['#E8D5B0', '#C9A96E', '#D4C0A0'],
    badge: null,
  },
  {
    id: 'panel-blanco-001',
    name: 'Panel Japonés Lino Natural',
    price: 210000,
    original_price: 260000,
    image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80',
    category: 'Panel',
    rating: 5,
    reviews: 31,
    colors: ['#FAF7F5', '#E8E0D8', '#D0C8C0'],
    badge: 'Nuevo',
  },
  {
    id: 'roller-azul-001',
    name: 'Roller Screen Solar Azul',
    price: 175000,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    category: 'Roller',
    rating: 4,
    reviews: 12,
    colors: ['#4A6FA5', '#2C4A7C', '#F2C4CE'],
    badge: null,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price)
}

export function FeaturedProducts() {
  const { addItem, openCart } = useCartStore()
  const [liked, setLiked] = useState<Set<string>>(new Set())
  const [adding, setAdding] = useState<string | null>(null)

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    setAdding(product.id)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: product.colors[0],
    })
    setTimeout(() => {
      setAdding(null)
      openCart()
    }, 600)
  }

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="py-24 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-subtitle mb-4">Selección especial</p>
            <h2 className="section-title text-5xl text-brand-charcoal">
              Productos Destacados
            </h2>
          </div>
          <Link
            href="/productos"
            className="btn-secondary self-start md:self-auto flex items-center gap-2 text-sm"
          >
            Ver todos
            <span>→</span>
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <article key={product.id} className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden bg-brand-pink-light">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-brand-pink-dark text-white text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </div>
                )}

                {/* Discount badge */}
                {product.original_price && (
                  <div className="absolute top-3 right-12 bg-brand-charcoal text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.original_price) * 100)}%
                  </div>
                )}

                {/* Like button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                  aria-label="Favorito"
                >
                  <Heart
                    size={14}
                    className={liked.has(product.id) ? 'fill-brand-pink-dark text-brand-pink-dark' : 'text-brand-charcoal/40'}
                  />
                </button>

                {/* Quick view overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-brand-charcoal/80 py-3 text-center text-white text-xs tracking-wider uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link href={`/productos/${product.id}`} className="flex items-center justify-center gap-2">
                    <Eye size={14} />
                    Vista rápida
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p
                  className="text-[10px] tracking-[0.2em] text-brand-charcoal/40 uppercase mb-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {product.category}
                </p>

                <h3
                  className="text-sm font-semibold text-brand-charcoal leading-snug mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {product.name}
                </h3>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={i < product.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-charcoal/20'}
                    />
                  ))}
                  <span className="text-[10px] text-brand-charcoal/40 ml-1">({product.reviews})</span>
                </div>

                {/* Colors */}
                <div className="flex items-center gap-1.5 mb-4">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-white shadow-sm cursor-pointer hover:scale-125 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price & Add to cart */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-lg font-semibold text-brand-charcoal"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {formatPrice(product.price)}
                    </span>
                    {product.original_price && (
                      <span
                        className="block text-xs text-brand-charcoal/40 line-through"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {formatPrice(product.original_price)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={adding === product.id}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      adding === product.id
                        ? 'bg-green-500 text-white scale-95'
                        : 'bg-brand-charcoal text-white hover:bg-brand-pink-dark'
                    }`}
                    aria-label="Agregar al carrito"
                  >
                    {adding === product.id ? (
                      <span className="text-xs">✓</span>
                    ) : (
                      <ShoppingBag size={14} />
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
