-- Variedades Atenea - Database Schema
-- Run this in your Supabase SQL editor

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- in COP cents
  original_price INTEGER,
  category VARCHAR(50) NOT NULL CHECK (category IN ('roller', 'venecianas', 'panel', 'blackout')),
  images TEXT[] DEFAULT '{}',
  colors TEXT[] DEFAULT '{}',
  sizes TEXT[] DEFAULT '{}',
  stock INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number VARCHAR(20) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20) NOT NULL,
  customer_address TEXT,
  customer_city VARCHAR(100),
  items JSONB NOT NULL DEFAULT '[]',
  subtotal INTEGER NOT NULL,
  total INTEGER NOT NULL,
  payment_method VARCHAR(20) NOT NULL CHECK (payment_method IN ('nequi', 'card', 'bre-b')),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  order_status VARCHAR(20) DEFAULT 'pending' CHECK (order_status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products: anyone can read active products
CREATE POLICY "Public can view active products" ON products
  FOR SELECT USING (active = true);

-- Orders: anyone can insert (create order)
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT WITH CHECK (true);

-- Orders: users can view their own orders (by phone/email)
CREATE POLICY "Public read own orders" ON orders
  FOR SELECT USING (true);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Storage bucket for product images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT DO NOTHING;

CREATE POLICY "Public read product images" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

-- Sample products
INSERT INTO products (name, slug, description, price, original_price, category, images, colors, stock, featured) VALUES
(
  'Roller Blackout Gris Perla',
  'roller-blackout-gris-perla',
  'Persiana roller con tela blackout de alta densidad. Control total de la luz solar. Disponible en múltiples colores.',
  189000,
  230000,
  'roller',
  ARRAY['https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600'],
  ARRAY['#E8E8E8', '#4A4A4A', '#2C2C2C', '#F2C4CE'],
  15,
  true
),
(
  'Veneciana Aluminio Beige',
  'veneciana-aluminio-beige',
  'Veneciana de aluminio resistente. Láminas de 25mm. Fácil limpieza y mantenimiento.',
  145000,
  NULL,
  'venecianas',
  ARRAY['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600'],
  ARRAY['#E8D5B0', '#C9A96E', '#D4C0A0'],
  20,
  true
),
(
  'Panel Japonés Lino Natural',
  'panel-japones-lino-natural',
  'Panel japonés en tela lino natural. Elegante y sofisticado. Sistema corredizo suave.',
  210000,
  260000,
  'panel',
  ARRAY['https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600'],
  ARRAY['#FAF7F5', '#E8E0D8', '#D0C8C0'],
  8,
  true
),
(
  'Cortina Blackout Negro Absoluto',
  'cortina-blackout-negro-absoluto',
  'Cortina blackout total. Ideal para dormitorios y salas de cine. Máxima privacidad.',
  165000,
  195000,
  'blackout',
  ARRAY['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600'],
  ARRAY['#2C2C2C', '#1A1A1A', '#4A4A4A'],
  25,
  true
);
