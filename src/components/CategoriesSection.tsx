'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'roller',
    name: 'Enrollables',
    description: 'Elegancia minimalista con control total de la luz',
    image: 'https://chatgpt.com/backend-api/estuary/content?id=file_000000006d6471f5a8ba27ecede27c57&ts=494212&p=fs&cid=1&sig=6da24e8dbcdd1d4d016da74dba939595605a14e855fadb3fce9c73a675c16af4&v=0  ',  
    count: '12 productos',
    color: '#F2C4CE',
  },
  {
    id: 'venecianas',
    name: 'Persianas Verticales',
    description: 'Versatilidad y estilo para cualquier espacio',
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpmNDQ1NjljNWI5NmM5YjcyOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyNGEzMDkwMzM2ODowMDA2NTIyMjg1MDdmOWVmEAIYAQ==',
    count: '8 productos',
    color: '#E8D5B0',
  },
  {
    id: 'bombay',
    name: 'Bombay',
    description: 'Clásico atemporal para cualquier ambiente',
    image: 'https://chatgpt.com/backend-api/estuary/content?id=file_00000000520c71fb8ec8257ea1ca1170&ts=494212&p=fs&cid=1&sig=ccb3c3d4652570959e089612a28819c858e87a94f999575d09a3515c26b77ec0&v=0',
    count: '8 productos',
    color: '#4A6FA5',
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
