'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, Grid2X2, Grid3X3, Search } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

const allProducts = [
  {
    id: 'roller-gris-001',
    name: 'Enrollable en Blackout',
    price: 189000,
    original_price: 230000,
    image: 'https://chatgpt.com/s/m_6a0be7d51e508191a09c98cc0809d520/content?id=file_000000006d6471f5a8ba27ecede27c57&ts=494212&p=fs&cid=1&sig=6da24e8dbcdd1d4d016da74dba939595605a14e855fadb3fce9c73a675c16af4&v=0', 
    category: 'Enrollables',
    rating: 5,
    reviews: 24,
    colors: ['#E8E8E8', '#4A4A4A', '#2C2C2C', '#F2C4CE'],
    badge: 'Más vendido',
    description: 'Persiana Enrollable en Blackout. Control total de la luz.',
    stock: 15,
  },
  {
    id: 'veneciana-beige-001',
    name: 'Persiana Vertical',
    price: 145000,
    original_price: null,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpmNDQ1NjljNWI5NmM5YjcyOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyNGEzMDkwMzM2ODowMDA2NTIyMjg1MDdmOWVmEAIYAQ==',
    category: 'Verticales',
    rating: 4,
    reviews: 18,
    colors: ['#E8D5B0', '#C9A96E', '#D4C0A0'],
    badge: null,
    description: 'Persiana vertical en screen. Lamas de 9cm, elegantes y funcionales.',
    stock: 20,
  },
  {
    id: 'panel-blanco-001',
    name: 'Panel Japonés',
    price: 210000,
    original_price: 260000,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MToyNWZkMGMwOWMwM2M0NzQ1OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyNGEzMDkwMzM2ODowMDA2NTIyMjcwMWY3MDNmEAIYAQ==',
    category: 'panel',
    rating: 5,
    reviews: 31,
    colors: ['#FAF7F5', '#E8E0D8', '#D0C8C0'],
    badge: 'Nuevo',
    description: 'Panel japonés en tela lino natural. Elegante y sofisticado.',
    stock: 8,
  },
  {
    id: 'roller-azul-001',
    name: 'Bombay',
    price: 175000,
    original_price: null,
    image: 'https://chatgpt.com/backend-api/estuary/content?id=file_00000000520c71fb8ec8257ea1ca1170&ts=494212&p=fs&cid=1&sig=ccb3c3d4652570959e089612a28819c858e87a94f999575d09a3515c26b77ec0&v=0',
    category: 'Bombay ',
    rating: 4,
    reviews: 12,
    colors: ['#4A6FA5', '#2C4A7C', '#F2C4CE'],
    badge: null,
    description: 'Persiana screen que filtra rayos UV sin bloquear la vista exterior.',
    stock: 12,
  },
  {
    id: 'blackout-negro-001',
    name: 'Cortina Blackout Negro Absoluto',
    price: 165000,
    original_price: 195000,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
    category: 'blackout',
    rating: 5,
    reviews: 42,
    colors: ['#2C2C2C', '#1A1A1A', '#4A4A4A'],
    badge: 'Oferta',
    description: 'Cortina blackout total. Ideal para dormitorios y salas de cine en casa.',
    stock: 25,
  },
  {
    id: 'veneciana-blanca-001',
    name: 'Veneciana PVC Blanca',
    price: 125000,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80',
    category: 'venecianas',
    rating: 4,
    reviews: 9,
    colors: ['#FFFFFF', '#F5F5F5', '#E8E8E8'],
    badge: null,
    description: 'Veneciana de PVC resistente a la humedad. Perfecta para baños y cocinas.',
    stock: 30,
  },
  {
    id: 'roller-crema-001',
    name: 'Roller Translúcido Crema',
    price: 155000,
    original_price: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'roller',
    rating: 5,
    reviews: 19,
    colors: ['#FAF7F5', '#E8D5B0', '#D4C0A0'],
    badge: null,
    description: 'Persiana translúcida que tamiza la luz suavemente. Ambiente cálido y acogedor.',
    stock: 18,
  },
  {
    id: 'panel-gris-001',
    name: 'Panel Japonés Gris Antracita',
    price: 225000,
    original_price: 280000,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    category: 'panel',
    rating: 5,
    reviews: 14,
    colors: ['#6B6B6B', '#4A4A4A', '#2C2C2C'],
    badge: 'Premium',
    description: 'Panel japonés en tela técnica antracita. Diseño contemporáneo para espacios modernos.',
    stock: 6,
  },
]

const categories = [
  { value: '', label: 'Todos' },
  { value: 'roller', label: 'Roller' },
  { value: 'venecianas', label: 'Venecianas' },
  { value: 'panel', label: 'Panel Japonés' },
  { value: 'blackout', label: 'Blackout' },
]

const sortOptions = [
  { value: 'featured', label: 'Destacados' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Mejor Valorados' },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || '')
  const [sortBy, setSortBy] = useState('featured')
  const [search, setSearch] = useState('')
  const [gridCols, setGridCols] = useState(3)

  const filtered = allProducts
    .filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      {/* Header */}
      <div className="mb-12">
        <p className="section-subtitle mb-3">Nuestro catálogo</p>
        <h1 className="section-title text-6xl text-brand-charcoal">Productos</h1>
      </div>

      {/* Filters bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-charcoal/40" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2.5 bg-white border border-brand-pink/30 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-pink-dark w-64"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-brand-charcoal text-white'
                  : 'bg-white border border-brand-pink/30 text-brand-charcoal hover:border-brand-pink-dark'
              }`}
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort & Grid */}
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2.5 bg-white border border-brand-pink/30 rounded-xl text-xs text-brand-charcoal focus:outline-none cursor-pointer"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <div className="flex border border-brand-pink/30 rounded-xl overflow-hidden">
            <button
              onClick={() => setGridCols(2)}
              className={`p-2.5 transition-colors ${gridCols === 2 ? 'bg-brand-charcoal text-white' : 'bg-white text-brand-charcoal/50 hover:bg-brand-pink/10'}`}
            >
              <Grid2X2 size={14} />
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`p-2.5 transition-colors ${gridCols === 3 ? 'bg-brand-charcoal text-white' : 'bg-white text-brand-charcoal/50 hover:bg-brand-pink/10'}`}
            >
              <Grid3X3 size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-brand-charcoal/40 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {filtered.length} productos encontrados
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-brand-charcoal/40 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
            No encontramos productos con ese filtro.
          </p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-cream flex items-center justify-center">
      <div className="shimmer w-32 h-4 rounded" />
    </div>}>
      <ProductsContent />
    </Suspense>
  )
}
