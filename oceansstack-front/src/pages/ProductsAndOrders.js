import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { fetchProducts, fetchOrders, createOrder } from "../services/api";
import ProductSelect from "../components/ProductSelect";
import ProductList from "../components/ProductList";
import Toast from "../components/Toast";
import HomeButton from "../components/HomeButton";
export default function ProductsAndOrdersPage() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductId, setSelectedProductId] = useState("");
    const [toast, setToast] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const prods = await fetchProducts();
                setProducts(prods);
                const ords = await fetchOrders();
                setOrders(ords);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    const handleSelectProduct = () => {
        if (!selectedProductId)
            return;
        const prod = products.find((p) => p.id === Number(selectedProductId));
        if (prod) {
            setSelectedProducts([...selectedProducts, prod]);
            setSelectedProductId("");
        }
    };
    const handleRemoveProduct = (index) => {
        const newSelected = [...selectedProducts];
        newSelected.splice(index, 1);
        setSelectedProducts(newSelected);
    };
    const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);
    const handleCreateOrder = async () => {
        if (selectedProducts.length === 0) {
            showToast("Debes seleccionar al menos un producto", "error");
            return;
        }
        const newOrder = { products: selectedProducts, total };
        try {
            const created = await createOrder(newOrder);
            setOrders([...orders, created]);
            setSelectedProducts([]);
            showToast("Orden creada correctamente", "success");
        }
        catch (err) {
            console.error("Error al crear orden:", err);
            showToast("Error al crear la orden", "error");
        }
    };
    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };
    if (loading)
        return _jsx("p", { className: "text-white text-center mt-20", children: "Cargando..." });
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12 relative", children: [_jsx(HomeButton, { label: "Volver al Inicio", colorClass: "bg-green-500" }), _jsx("h1", { className: "text-5xl font-extrabold text-center mb-8", children: "Gesti\u00F3n de \u00D3rdenes" }), toast && _jsx(Toast, { message: toast.message, type: toast.type }), _jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start", children: [_jsxs("section", { className: "relative bg-green-600 bg-opacity-20 p-8 rounded-2xl shadow-2xl flex-1 flex flex-col", children: [_jsx("div", { className: "absolute -inset-1 bg-green-500 opacity-20 blur-xl rounded-2xl" }), _jsx("h2", { className: "text-3xl font-bold mb-4 relative z-10 text-center", children: "Crear Orden" }), _jsx(ProductSelect, { products: products, selectedProducts: selectedProducts, selectedProductId: selectedProductId, setSelectedProductId: setSelectedProductId, onAdd: handleSelectProduct, onRemove: handleRemoveProduct, total: total, onCreateOrder: handleCreateOrder })] }), _jsxs("section", { className: "relative bg-green-600 bg-opacity-20 p-8 rounded-2xl shadow-2xl flex-1 flex flex-col", children: [_jsx("div", { className: "absolute -inset-1 bg-green-500 opacity-20 blur-xl rounded-2xl" }), _jsx("h2", { className: "text-3xl font-bold mb-4 relative z-10 text-center", children: "Productos Disponibles" }), _jsx(ProductList, { products: products })] })] })] }));
}
