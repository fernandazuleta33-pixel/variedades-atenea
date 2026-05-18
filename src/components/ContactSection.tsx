'use client'

import { MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'

export function ContactSection() {
  const whatsappMessage = encodeURIComponent('Hola! Me interesa cotizar cortinas/persianas para mi hogar.')
  const whatsappUrl = `https://wa.me/573136930259?text=${whatsappMessage}`

  return (
    <section id="contacto" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #F2C4CE, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A96E, transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p
              className="text-brand-pink text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Contáctanos
            </p>
            <h2
              className="text-5xl text-white mb-6 leading-none"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, letterSpacing: '-0.02em' }}
            >
              Hablemos de
              <br />
              <span style={{ color: '#F2C4CE' }}>tu proyecto</span>
            </h2>
            <p
              className="text-white/50 text-base leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Cuéntanos las dimensiones y el estilo que buscas. 
              Te ayudamos a encontrar la opción perfecta para tu hogar.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-brand-pink" />
                </div>
                <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Eje Cafetero, Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={14} className="text-brand-pink" />
                </div>
                <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>+57 313 693 0259</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-brand-pink transition-colors text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-brand-pink transition-colors text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
            <div
              className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <MessageCircle size={36} className="text-white" />
            </div>

            <h3
              className="text-2xl text-white mb-3"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
            >
              Cotiza por WhatsApp
            </h3>
            <p
              className="text-white/50 text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Respuesta inmediata. Comparte fotos de tu espacio y te ayudamos a elegir el estilo perfecto.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium text-sm tracking-wider uppercase py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-[1.02]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              📱 Escribir en WhatsApp
            </a>

            <p
              className="text-white/30 text-xs mt-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Lunes a Sábado · 8am - 6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
