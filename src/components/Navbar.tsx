'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Instagram, Facebook } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { itemCount, openCart } = useCartStore()
  const count = itemCount()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/categorias', label: 'Categorías' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-pink/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Social links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-charcoal hover:text-brand-pink-dark transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-charcoal hover:text-brand-pink-dark transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Logo - centered */}
          <Link href="/" className="flex-1 flex justify-center md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="text-center">
              <div className="relative">
                <span
                  className="font-display text-3xl font-semibold text-brand-charcoal"
                  style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
                >
                  Variedades Atenea
                </span>
              </div>
              <p
                className="text-[9px] tracking-[0.35em] text-brand-charcoal/60 uppercase mt-0.5"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Hogares con Estilo 🐾
              </p>
            </div>
          </Link>

          {/* Right: nav + cart */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover-underline text-sm tracking-wide text-brand-charcoal hover:text-brand-pink-dark transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2 text-brand-charcoal hover:text-brand-pink-dark transition-colors"
              aria-label="Carrito de compras"
            >
              <ShoppingBag size={22} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-pink-dark text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden p-2 text-brand-charcoal"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Menú"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-brand-cream/98 backdrop-blur-md border-t border-brand-pink/30">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-charcoal text-base tracking-wide py-2 border-b border-brand-pink/20"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="text-brand-charcoal" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="text-brand-charcoal" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
