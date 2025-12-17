import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import * as Yup from "yup";
export default function ProductSection({ products, setProducts, createProduct, showToast }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const schema = Yup.object().shape({
        name: Yup.string().required("El nombre es obligatorio"),
        price: Yup.number().typeError("El precio debe ser un número").positive("El precio debe ser positivo").required("El precio es obligatorio"),
    });
    const handleAddProduct = async () => {
        try {
            const validated = await schema.validate({ name, price: Number(price) });
            const created = await createProduct({ id: 0, name: validated.name, price: validated.price });
            setProducts([...products, created]);
            setName("");
            setPrice("");
            setShowForm(false);
            showToast("Producto agregado correctamente", "success");
        }
        catch (err) {
            showToast(err.message || "Error creando producto", "error");
        }
    };
    return (_jsxs("section", { className: "relative bg-purple-600 bg-opacity-20 p-8 rounded-2xl shadow-2xl flex-1 flex flex-col", children: [_jsx("div", { className: "absolute -inset-1 bg-purple-500 opacity-20 blur-xl rounded-2xl" }), _jsx("h2", { className: "text-3xl font-bold mb-4 relative z-10", children: "Productos" }), _jsxs("div", { className: "relative z-10 flex flex-col gap-4", children: [_jsx("ul", { className: "space-y-2", children: products.map((p) => (_jsxs("li", { className: "flex justify-between border p-2 rounded bg-purple-900", children: [_jsx("span", { children: p.name }), _jsxs("span", { children: ["$", Number(p.price).toFixed(2)] })] }, p.id))) }), _jsx("button", { onClick: () => setShowForm(!showForm), className: "bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto", children: showForm ? "Cancelar" : "Agregar Producto" }), showForm && (_jsxs("div", { className: "flex flex-col gap-2 bg-purple-800 p-4 rounded", children: [_jsx("input", { type: "text", placeholder: "Nombre del producto", className: "p-2 rounded text-black", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { type: "number", placeholder: "Precio", className: "p-2 rounded text-black", value: price, onChange: (e) => setPrice(e.target.value) }), _jsx("button", { onClick: handleAddProduct, className: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2", children: "Crear Producto" })] }))] })] }));
}
