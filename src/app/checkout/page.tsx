'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import { ArrowLeft, CreditCard, Smartphone, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price)
}

type PaymentMethod = 'nequi' | 'card' | 'bre-b'
type Step = 'info' | 'payment' | 'confirmation'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const cartTotal = total()
  const [step, setStep] = useState<Step>('info')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('nequi')
  const [loading, setLoading] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    const number = `VA-${Date.now().toString().slice(-6)}`
    setOrderNumber(number)
    clearCart()
    setStep('confirmation')
    setLoading(false)
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h1 className="section-title text-4xl text-brand-charcoal mb-3">¡Pedido realizado!</h1>
          <p className="text-brand-charcoal/60 text-sm mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Número de pedido:
          </p>
          <p className="text-2xl font-bold text-brand-charcoal mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {orderNumber}
          </p>
          <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            Gracias por tu compra. Nos pondremos en contacto contigo pronto para confirmar los detalles y coordinar la instalación.
          </p>
          <a
            href={`https://wa.me/573136930259?text=${encodeURIComponent(`Hola! Acabo de realizar el pedido ${orderNumber}. Quedo pendiente de confirmación.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white py-4 rounded-xl text-sm font-medium tracking-wider uppercase mb-4 hover:bg-[#1ebe5d] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Confirmar por WhatsApp
          </a>
          <Link href="/" className="block text-brand-charcoal/50 text-sm hover:text-brand-charcoal transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/productos" className="p-2 hover:bg-brand-pink/20 rounded-full transition-colors">
            <ArrowLeft size={18} className="text-brand-charcoal" />
          </Link>
          <div>
            <p className="section-subtitle">Finalizar compra</p>
            <h1 className="section-title text-4xl text-brand-charcoal">Checkout</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">

            {/* Customer info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-pink/10">
              <h2 className="text-lg font-semibold text-brand-charcoal mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Datos de entrega
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                  { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'correo@email.com' },
                  { name: 'phone', label: 'Teléfono / WhatsApp', type: 'tel', placeholder: '300 000 0000' },
                  { name: 'city', label: 'Ciudad', type: 'text', placeholder: 'Pereira, Armenia...' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-brand-charcoal/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-pink/30 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/25 focus:outline-none focus:border-brand-pink-dark transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-xs text-brand-charcoal/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Calle, carrera, barrio..."
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-pink/30 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/25 focus:outline-none focus:border-brand-pink-dark transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-brand-charcoal/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Notas adicionales (opcional)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Dimensiones, instrucciones especiales..."
                    rows={3}
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-pink/30 rounded-xl text-sm text-brand-charcoal placeholder:text-brand-charcoal/25 focus:outline-none focus:border-brand-pink-dark transition-colors resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-pink/10">
              <h2 className="text-lg font-semibold text-brand-charcoal mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Método de pago
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'nequi' as PaymentMethod,
                    name: 'Nequi',
                    icon: '📱',
                    description: 'Pago inmediato',
                    color: '#6B2D8B',
                  },
                  {
                    id: 'card' as PaymentMethod,
                    name: 'Tarjeta',
                    icon: '💳',
                    description: 'Débito / Crédito',
                    color: '#1A5276',
                  },
                  {
                    id: 'bre-b' as PaymentMethod,
                    name: 'Bre-b',
                    icon: '🟠',
                    description: 'Transferencia QR',
                    color: '#E67E22',
                  },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      paymentMethod === method.id
                        ? 'border-brand-charcoal bg-brand-charcoal/5'
                        : 'border-brand-pink/20 hover:border-brand-pink'
                    }`}
                  >
                    <span className="text-2xl block mb-2">{method.icon}</span>
                    <p className="font-semibold text-sm text-brand-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {method.name}
                    </p>
                    <p className="text-[11px] text-brand-charcoal/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {method.description}
                    </p>
                    {paymentMethod === method.id && (
                      <div className="absolute top-3 right-3 w-4 h-4 bg-brand-charcoal rounded-full flex items-center justify-center">
                        <span className="text-white text-[8px]">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Payment instructions */}
              <div className="mt-4 p-4 bg-brand-pink-light rounded-xl">
                {paymentMethod === 'nequi' && (
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Instrucciones Nequi</p>
                    <p className="text-xs text-brand-charcoal/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Realiza el pago al número <strong>313 693 0259</strong> en Nequi. Envía el comprobante por WhatsApp para confirmar tu pedido.
                    </p>
                  </div>
                )}
                {paymentMethod === 'card' && (
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Pago con Tarjeta</p>
                    <p className="text-xs text-brand-charcoal/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Te enviaremos un enlace de pago seguro por WhatsApp después de confirmar tu pedido. Aceptamos Visa, Mastercard y PSE.
                    </p>
                  </div>
                )}
                {paymentMethod === 'bre-b' && (
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Instrucciones Bre-b</p>
                    <p className="text-xs text-brand-charcoal/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Escanea nuestro código QR de Bre-b para transferir. Lo recibirás por WhatsApp al confirmar tu pedido.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-pink/10 sticky top-24">
              <h2 className="text-lg font-semibold text-brand-charcoal mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Resumen
              </h2>

              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-brand-pink-light flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-brand-charcoal truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.name}
                      </p>
                      <p className="text-[10px] text-brand-charcoal/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        x{item.quantity}
                      </p>
                      <p className="text-xs font-semibold text-brand-charcoal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-brand-pink/20 pt-4">
                <div className="flex justify-between text-sm text-brand-charcoal/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-brand-charcoal/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <span>Envío</span>
                  <span>A cotizar</span>
                </div>
                <div className="flex justify-between font-semibold text-brand-charcoal pt-2 border-t border-brand-pink/20 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleOrder}
                disabled={loading || items.length === 0 || !form.name || !form.phone}
                className={`mt-6 w-full py-4 rounded-xl text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  loading
                    ? 'bg-brand-charcoal/50 text-white cursor-not-allowed'
                    : items.length === 0 || !form.name || !form.phone
                    ? 'bg-brand-charcoal/30 text-white cursor-not-allowed'
                    : 'bg-brand-charcoal hover:bg-brand-charcoal-light text-white hover:shadow-lg'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Procesando...
                  </span>
                ) : (
                  'Confirmar pedido'
                )}
              </button>

              <p className="text-[10px] text-brand-charcoal/30 text-center mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                🔒 Transacción segura y encriptada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
