'use client'

import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import Link from 'next/link'

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price)
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCartStore()
  const cartTotal = total()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-charcoal/50 backdrop-blur-sm z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-brand-cream z-50 shadow-2xl flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-pink/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-brand-charcoal" />
            <h2
              className="font-semibold text-brand-charcoal"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}
            >
              Mi Carrito
            </h2>
            {items.length > 0 && (
              <span className="bg-brand-pink-dark text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-brand-pink/20 rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-16 h-16 bg-brand-pink/20 rounded-full flex items-center justify-center">
                <ShoppingBag size={24} className="text-brand-pink-dark" />
              </div>
              <div>
                <p
                  className="text-brand-charcoal font-semibold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Tu carrito está vacío
                </p>
                <p
                  className="text-brand-charcoal/50 text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Descubre nuestra colección de cortinas y persianas
                </p>
              </div>
              <button
                onClick={closeCart}
                className="btn-pink text-xs mt-2"
              >
                Ver productos
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.color}`}
                className="flex gap-4 bg-white rounded-xl p-3 shadow-sm"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-brand-pink-light flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold text-brand-charcoal leading-snug mb-1 truncate"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.name}
                  </p>
                  {item.color && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <div
                        className="w-3 h-3 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[10px] text-brand-charcoal/40 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Color
                      </span>
                    </div>
                  )}
                  <p
                    className="text-sm font-semibold text-brand-charcoal"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {formatPrice(item.price)}
                  </p>

                  {/* Qty control */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-brand-pink/30 rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-brand-pink/20 transition-colors"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="w-7 text-center text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-brand-pink/20 transition-colors"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-brand-charcoal/30 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-pink/20 px-6 py-6 space-y-4 bg-white">
            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-brand-charcoal/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-brand-charcoal/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span>Envío</span>
                <span className="text-green-600">Cotizar</span>
              </div>
              <div className="flex justify-between font-semibold text-brand-charcoal pt-2 border-t border-brand-pink/20" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-brand-charcoal hover:bg-brand-charcoal-light text-white text-center py-4 text-sm font-medium tracking-widest uppercase transition-colors rounded-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Proceder al pago
            </Link>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-[10px] text-brand-charcoal/40 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Pagos:</span>
              <div className="flex gap-2">
                {['Nequi', 'Tarjeta', 'Bre-b'].map((method) => (
                  <span
                    key={method}
                    className="text-[9px] bg-brand-pink/20 text-brand-charcoal px-2 py-0.5 rounded-full font-medium"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
