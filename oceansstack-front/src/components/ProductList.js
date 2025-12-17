import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ProductList({ products }) {
    return (_jsx("div", { className: "relative z-10", children: _jsx("ul", { className: "space-y-2", children: products.map((p) => (_jsxs("li", { className: "border p-2 rounded flex justify-between bg-green-900", children: [_jsx("span", { children: p.name }), _jsxs("span", { className: "ml-auto", children: ["$", p.price.toFixed(2)] })] }, p.id))) }) }));
}
