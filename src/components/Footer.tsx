import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
  src="/logo.png"
  alt="Variedades Atenea"
  className="h-16 w-auto object-contain brightness-0 invert"
/>
              <p
                className="text-[10px] tracking-[0.3em] text-brand-pink uppercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Hogares con Estilo 🐾
              </p>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Distribuidores de cortinas y persianas de alta calidad en el Eje Cafetero. 
              Transformamos tu hogar con estilo y elegancia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-brand-pink/30 border border-white/10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-brand-pink/30 border border-white/10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://wa.me/573136930259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366]/20 hover:bg-[#25D366]/40 border border-[#25D366]/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-brand-pink mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Tienda
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/productos', label: 'Todos los productos' },
                { href: '/productos?categoria=roller', label: 'Persianas Roller' },
                { href: '/productos?categoria=venecianas', label: 'Venecianas' },
                { href: '/productos?categoria=panel', label: 'Panel Japonés' },
                { href: '/productos?categoria=blackout', label: 'Cortinas Blackout' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-brand-pink text-sm transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-brand-pink mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-white/50 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <MapPin size={14} className="text-brand-pink mt-0.5 flex-shrink-0" />
                Eje Cafetero, Colombia
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <Phone size={14} className="text-brand-pink flex-shrink-0" />
                +57 313 693 0259
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p
                className="text-xs text-white/40 uppercase tracking-wider mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Métodos de pago
              </p>
              <div className="flex flex-wrap gap-2">
                {['Nequi', 'Tarjeta', 'Bre-b'].map((m) => (
                  <span
                    key={m}
                    className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded-full"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} Variedades Atenea. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-white/30 hover:text-white/60 text-xs transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Privacidad
            </Link>
            <Link href="/terminos" className="text-white/30 hover:text-white/60 text-xs transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
