import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { CartDrawer } from '@/components/CartDrawer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Variedades Atenea | Hogares con Estilo',
  description: 'Cortinas y persianas de alta calidad para tu hogar. Distribuidor en el Eje Cafetero.',
  keywords: 'cortinas, persianas, decoración, hogar, Pereira, Eje Cafetero, Variedades Atenea',
  openGraph: {
    title: 'Variedades Atenea | Hogares con Estilo',
    description: 'Cortinas y persianas de alta calidad para tu hogar en el Eje Cafetero.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-brand-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
