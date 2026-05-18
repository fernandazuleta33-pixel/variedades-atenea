'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.setProperty('--parallax-y', `${scrollY * 0.3}px`)
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAE8EC 0%, #FAF7F5 40%, #F2C4CE 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large VA monogram watermark */}
        <div
          className="absolute -right-20 top-0 text-[45vw] font-bold opacity-[0.04] select-none leading-none"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#D4869A',
            transform: 'translateY(var(--parallax-y, 0))',
          }}
        >
          VA
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full border border-brand-pink/30 opacity-40" />
        <div className="absolute top-32 left-[12%] w-44 h-44 rounded-full border border-brand-pink/20 opacity-30" />
        <div className="absolute bottom-40 right-[5%] w-96 h-96 rounded-full border border-brand-pink/20 opacity-20" />

        {/* Gradient blobs */}
        <div
          className="absolute top-1/3 left-0 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F2C4CE, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 bg-brand-pink/40 text-brand-charcoal px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: 'DM Sans, sans-serif', animationDelay: '0.1s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink-dark" />
              Eje Cafetero · Colombia
            </div>

            <div>
              <p
                className="text-sm tracking-[0.3em] uppercase text-brand-charcoal/50 mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Bienvenida a
              </p>
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl leading-none text-brand-charcoal"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, letterSpacing: '-0.03em' }}
              >
                Variedades
                <br />
                <span style={{ color: '#D4869A' }}>Atenea.</span>
              </h1>
              <p
                className="mt-4 text-sm tracking-[0.35em] text-brand-charcoal/50 uppercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Hogares con Estilo 🐾
              </p>
            </div>

            <p
              className="text-lg text-brand-charcoal/70 max-w-md leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Cortinas y persianas de alta calidad que transforman cada espacio en un refugio de elegancia. 
              Distribuimos en todo el Eje Cafetero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/productos" className="btn-primary flex items-center gap-2 justify-center">
                Ver Colección
                <ArrowRight size={16} />
              </Link>
              <Link href="#contacto" className="btn-secondary flex items-center gap-2 justify-center">
                Cotizar
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-brand-pink/30">
              {[
                { value: '+200', label: 'Clientes felices' },
                { value: '5★', label: 'Calificación' },
                { value: 'Eje', label: 'Cafetero' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-semibold text-brand-charcoal"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs text-brand-charcoal/50 tracking-wider mt-1 uppercase"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product image mosaic */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Main large image */}
              <div
                className="col-span-2 h-72 rounded-2xl overflow-hidden shadow-2xl relative"
                style={{ background: 'linear-gradient(135deg, #E8D5D5, #D4C0C0)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                  alt="Cortinas elegantes"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <p className="text-xs text-brand-charcoal/60 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Destacado</p>
                  <p className="text-sm font-semibold text-brand-charcoal" style={{ fontFamily: 'Playfair Display, serif' }}>Persiana Romana Premium</p>
                </div>
              </div>

              {/* Two smaller images */}
              <div
                className="h-44 rounded-xl overflow-hidden shadow-lg"
                style={{ background: '#E8D5D5' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&q=80"
                  alt="Persianas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="h-44 rounded-xl overflow-hidden shadow-lg relative"
                style={{ background: '#D4C0C0' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                  alt="Cortinas"
                  className="w-full h-full object-cover"
                />
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-brand-pink text-brand-charcoal px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                  Nuevo
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div
              className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-4 w-40"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <div className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center mb-2">
                <span className="text-sm">✓</span>
              </div>
              <p className="text-xs font-semibold text-brand-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Instalación incluida
              </p>
              <p className="text-[10px] text-brand-charcoal/50 mt-0.5">En compras mayores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase text-brand-charcoal/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>Scroll</span>
        <ChevronDown size={16} className="text-brand-charcoal/40" />
      </div>
    </section>
  )
}
