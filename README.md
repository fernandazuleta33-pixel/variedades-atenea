# 🌸 Variedades Atenea — Tienda Online

> Cortinas y persianas para hogares con estilo · Eje Cafetero, Colombia

## Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Storage)
- **Deploy**: Vercel
- **Cart**: Zustand (persistente en localStorage)
- **Pagos**: Nequi · Tarjeta · Bre-b (flujo manual via WhatsApp)

---

## 🚀 Despliegue en Vercel + Supabase

### 1. Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea un proyecto.
2. En el SQL Editor, ejecuta el archivo `supabase/migrations/001_initial_schema.sql`.
3. Copia las credenciales:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SERVICE_ROLE_KEY`

### 2. Variables de entorno

Crea un archivo `.env.local` (basado en `.env.local.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxx...
NEXT_PUBLIC_WHATSAPP_NUMBER=573136930259
```

### 3. Instalar y correr localmente

```bash
npm install
npm run dev
# → http://localhost:3000
```

### 4. Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno en Vercel Dashboard o:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

O simplemente conecta el repo de GitHub en [vercel.com](https://vercel.com) y agrega las env vars en Settings → Environment Variables.

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global con Navbar + Footer + Cart
│   ├── page.tsx            # Home: Hero + Categorías + Productos + Banner
│   ├── productos/
│   │   └── page.tsx        # Catálogo con filtros y búsqueda
│   ├── checkout/
│   │   └── page.tsx        # Checkout con Nequi / Tarjeta / Bre-b
│   └── api/
│       ├── products/       # GET productos desde Supabase
│       └── orders/         # POST crear pedido en Supabase
├── components/
│   ├── Navbar.tsx          # Barra de navegación + carrito
│   ├── HeroSection.tsx     # Sección hero principal
│   ├── CategoriesSection.tsx
│   ├── FeaturedProducts.tsx
│   ├── BrandBanner.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   ├── CartDrawer.tsx      # Carrito lateral deslizante
│   ├── ProductCard.tsx     # Tarjeta de producto reutilizable
│   ├── WhatsAppFloat.tsx   # Botón flotante WhatsApp
│   └── Footer.tsx
├── lib/
│   ├── store/cart.ts       # Estado del carrito (Zustand)
│   ├── supabase/
│   │   ├── client.ts       # Cliente Supabase (browser)
│   │   └── server.ts       # Cliente Supabase (server)
│   └── types.ts            # TypeScript types
└── styles/
    └── globals.css         # Estilos globales + variables de marca
```

---

## 🎨 Identidad de marca

| Elemento | Valor |
|----------|-------|
| Rosa principal | `#F2C4CE` |
| Rosa oscuro | `#D4869A` |
| Carbón | `#2C2C2C` |
| Crema | `#FAF7F5` |
| Dorado | `#C9A96E` |
| Fuente display | Playfair Display |
| Fuente cuerpo | DM Sans |

---

## 📱 Contacto / Redes

- **WhatsApp**: +57 313 693 0259
- **Instagram**: Configurar URL en `Navbar.tsx` y `Footer.tsx`
- **Facebook**: Configurar URL en `Navbar.tsx` y `Footer.tsx`

---

## 💳 Métodos de pago

Los pagos son confirmados manualmente por WhatsApp:

- **Nequi**: El cliente paga al número registrado y envía comprobante
- **Tarjeta**: Se envía enlace de cobro (PSE/Wompi/Bold) por WhatsApp  
- **Bre-b**: Se comparte código QR por WhatsApp

Para integrar pagos automáticos, considera: **Bold**, **Wompi**, o **PayU** (proveedores colombianos).
