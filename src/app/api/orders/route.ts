import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const orderNumber = `VA-${Date.now().toString().slice(-6)}`

    const { data, error } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        customer_name: body.name,
        customer_email: body.email,
        customer_phone: body.phone,
        customer_address: body.address,
        customer_city: body.city,
        items: body.items,
        subtotal: body.subtotal,
        total: body.total,
        payment_method: body.paymentMethod,
        notes: body.notes,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ order: data, orderNumber })
  } catch (err) {
    console.error('Order creation error:', err)
    return NextResponse.json({ error: 'Error al crear el pedido' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Variedades Atenea Orders API' })
}
