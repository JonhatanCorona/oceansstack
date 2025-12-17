import type { Order } from "../types/Order";

interface OrderSectionProps {
  orders: Order[];
}

export default function OrderSection({ orders }: OrderSectionProps) {
  return (
    <section className="relative bg-purple-600 bg-opacity-20 p-8 rounded-2xl shadow-2xl flex-1 flex flex-col">
      <div className="absolute -inset-1 bg-purple-500 opacity-20 blur-xl rounded-2xl"></div>
      <h2 className="text-3xl font-bold mb-4 relative z-10">Órdenes</h2>
      <div className="relative z-10 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded p-4 bg-purple-900">
            <h4 className="font-bold mb-2">Orden #{order.id}</h4>
            <ul className="mb-2 space-y-1">
              {order.products.map((p: any, i: number) => (
                <li key={i} className="flex justify-between border-b pb-1">
                  <span>{p.name}</span>
                  <span>${Number(p.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-right">Total: ${Number(order.total).toFixed(2)}</p>
            <p className="text-sm text-gray-300 text-center">
              Fecha: {order.createdAt ? new Date(order.createdAt).toLocaleString() : "No disponible"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
