'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'roller',
    name: 'Persianas Roller',
    description: 'Elegancia minimalista con control total de la luz',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80',
    count: '12 productos',
    color: '#F2C4CE',
  },
  {
    id: 'venecianas',
    name: 'Persianas Venecianas',
    description: 'Clásico atemporal para cualquier ambiente',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    count: '8 productos',
    color: '#E8D5B0',
  },
  {
    id: 'panel',
    name: 'Panel Japonés',
    description: 'Diseño contemporáneo y sofisticado',
    image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80',
    count: '6 productos',
    color: '#D4E8E0',
  },
  {
    id: 'blackout',
    name: 'Cortinas Blackout',
    description: 'Privacidad y oscuridad total para tu descanso',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    count: '10 productos',
    color: '#C4C4D4',
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-subtitle mb-4">Explorar por</p>
        <h2 className="section-title text-5xl text-brand-charcoal mb-4">
          Nuestras Categorías
        </h2>
        <div className="ornament-divider max-w-xs mx-auto mt-6">
          <span className="text-brand-pink-dark text-xl">✦</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/productos?categoria=${cat.id}`}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Color accent top */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-80"
              style={{ backgroundColor: cat.color }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {cat.count}
              </p>
              <h3
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {cat.name}
              </h3>
              <p
                className="text-xs text-white/70 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {cat.description}
              </p>
              <div className="flex items-center gap-2 text-white text-xs tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span style={{ fontFamily: 'DM Sans, sans-serif' }}>Ver más</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
