import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import type { Order } from "../types/Order";
import { fetchProducts, fetchOrders, createProduct } from "../services/api";
import ProductSection from "../components/ProductSection";
import OrderSection from "../components/OrderSection";
import Toast from "../components/Toast";
import HomeButton from "../components/HomeButton";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setProducts(await fetchProducts());
        setOrders(await fetchOrders());
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
   <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12">
  <HomeButton label="Volver al Inicio" colorClass="bg-purple-500" />

  <h1 className="text-5xl font-extrabold text-center mb-4">Dashboard Administrador</h1>

  {toast && <Toast message={toast.message} type={toast.type} />}

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start text-center">
    <ProductSection
      products={products}
      setProducts={setProducts}
      createProduct={createProduct}
      showToast={showToast}
    />
    <OrderSection orders={orders} />
  </div>
</div>
  );
}
