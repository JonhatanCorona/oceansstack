import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fetchProducts, fetchOrders, createProduct } from "../services/api";
import ProductSection from "../components/ProductSection";
import OrderSection from "../components/OrderSection";
import Toast from "../components/Toast";
import HomeButton from "../components/HomeButton";
export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [toast, setToast] = useState(null);
    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };
    useEffect(() => {
        const loadData = async () => {
            try {
                setProducts(await fetchProducts());
                setOrders(await fetchOrders());
            }
            catch (err) {
                console.error(err);
            }
        };
        loadData();
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12", children: [_jsx(HomeButton, { label: "Volver al Inicio", colorClass: "bg-purple-500" }), _jsx("h1", { className: "text-5xl font-extrabold text-center mb-4", children: "Dashboard Administrador" }), toast && _jsx(Toast, { message: toast.message, type: toast.type }), _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start text-center", children: [_jsx(ProductSection, { products: products, setProducts: setProducts, createProduct: createProduct, showToast: showToast }), _jsx(OrderSection, { orders: orders })] })] }));
}
