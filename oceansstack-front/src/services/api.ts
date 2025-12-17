import type { Product } from "../types/Product";
import type { Order } from "../types/Order";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002"; 

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Error al obtener productos");
  const data = await res.json();

  console.log("fetchProducts:", data);

  // Convertir price a número
  return data.map((p: Product) => ({ ...p, price: Number(p.price) }));
};

export const fetchOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) throw new Error("Error al obtener órdenes");
  const data = await res.json();

  console.log("fetchOrders:", data);

  return data.map((o: Order) => ({
    ...o,
    total: Number(o.total),
  }));
};

export const createProduct = async (product: Product): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Error creando producto");

  const data = await res.json();
  console.log("createProduct:", data);

  return { ...data, price: Number(data.price) };
};

export const createOrder = async (order: Order): Promise<Order> => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error("Error creando orden");

  const data = await res.json();
  console.log("createOrder:", data);

  return { ...data, total: Number(data.total) };
};
