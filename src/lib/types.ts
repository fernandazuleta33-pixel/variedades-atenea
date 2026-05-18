export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  original_price?: number
  category: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  featured: boolean
  created_at: string
}

export interface Order {
  id: string
  user_id?: string
  customer_name: string
  customer_email: string
  customer_phone: string
  customer_address: string
  customer_city: string
  items: OrderItem[]
  total: number
  payment_method: 'nequi' | 'card' | 'bre-b'
  payment_status: 'pending' | 'paid' | 'failed'
  order_status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
}

export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price: number
  color?: string
  size?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
}
