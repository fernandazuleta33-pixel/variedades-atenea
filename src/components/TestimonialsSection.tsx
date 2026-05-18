'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Valentina Restrepo',
    city: 'Pereira',
    text: 'Las persianas quedaron perfectas en mi sala. La calidad del material es excelente y el servicio de instalación fue muy profesional.',
    rating: 5,
    product: 'Roller Blackout Gris',
  },
  {
    name: 'Carlos Jiménez',
    city: 'Armenia',
    text: 'Compré para toda la casa y quedé muy satisfecho. Buenos precios y atención personalizada. 100% recomendado en el Eje Cafetero.',
    rating: 5,
    product: 'Panel Japonés Lino',
  },
  {
    name: 'María Paula Gómez',
    city: 'Manizales',
    text: 'Excelente variedad de diseños. Me ayudaron a elegir el estilo perfecto para mi apartamento. El proceso de compra fue muy fácil.',
    rating: 5,
    product: 'Veneciana Aluminio',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="section-subtitle mb-4">Lo que dicen</p>
        <h2 className="section-title text-5xl text-brand-charcoal mb-4">
          Nuestros Clientes
        </h2>
        <div className="ornament-divider max-w-xs mx-auto mt-6">
          <span className="text-brand-pink-dark text-xl">✦</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm border border-brand-pink/10 relative group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Quote mark */}
            <div
              className="text-7xl text-brand-pink/30 absolute top-4 right-6 leading-none pointer-events-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>

            <p
              className="text-brand-charcoal/80 leading-relaxed mb-6 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              "{t.text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-semibold text-brand-charcoal text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs text-brand-charcoal/40 tracking-wider"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {t.city}
                </p>
              </div>
              <span
                className="text-[10px] bg-brand-pink-light text-brand-charcoal/60 px-2 py-1 rounded-full uppercase tracking-wider"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {t.product}
              </span>
            </div>

            {/* Accent bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-pink/0 via-brand-pink to-brand-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  )
}
