'use client'

import Link from 'next/link'

export function BrandBanner() {
  return (
    <section className="my-16">
      {/* Full-width lifestyle banner */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '480px' }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #2C2C2C 0%, #4A4A4A 50%, #2C2C2C 100%)',
          }}
        />

        {/* Decorative image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80"
            alt="Cortinas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Pink accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-pink to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 gap-12">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-brand-pink text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Nuestra promesa
            </p>
            <h2
              className="text-5xl md:text-6xl text-white leading-none mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, letterSpacing: '-0.02em' }}
            >
              Transforma
              <br />
              <span style={{ color: '#F2C4CE' }}>tu espacio</span>
            </h2>
            <p
              className="text-white/60 text-base max-w-sm leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Cada cortina o persiana es una oportunidad para crear un ambiente único. 
              Trabajamos contigo para encontrar la solución perfecta.
            </p>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-brand-charcoal transition-all duration-300 px-8 py-3 text-sm tracking-wider uppercase"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              Explorar productos →
            </Link>
          </div>

          {/* Right: feature list */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {[
              { icon: '📐', title: 'Medidas exactas', desc: 'Fabricación a la medida de tu ventana' },
              { icon: '🚚', title: 'Entrega en Eje', desc: 'Pereira, Armenia, Manizales y más' },
              { icon: '🔧', title: 'Instalación', desc: 'Servicio técnico especializado' },
              { icon: '✨', title: 'Garantía', desc: '1 año en materiales y acabados' },
            ].map((feat) => (
              <div
                key={feat.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl block mb-3">{feat.icon}</span>
                <h4
                  className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feat.title}
                </h4>
                <p
                  className="text-white/50 text-xs leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
