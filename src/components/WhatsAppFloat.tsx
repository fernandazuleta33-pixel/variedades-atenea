'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)
  const message = encodeURIComponent('Hola! Me interesa cotizar cortinas/persianas.')
  const url = `https://wa.me/573136930259?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup message */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-56 border border-brand-pink/20 animate-fade-up">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-brand-charcoal/30 hover:text-brand-charcoal"
          >
            <X size={14} />
          </button>
          <p
            className="text-xs text-brand-charcoal/60 mb-1"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ¡Hola! 👋
          </p>
          <p
            className="text-sm font-semibold text-brand-charcoal mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ¿Buscas cortinas o persianas?
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-center text-xs font-medium py-2 rounded-xl transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Chatear ahora →
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        {isExpanded ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  )
}
