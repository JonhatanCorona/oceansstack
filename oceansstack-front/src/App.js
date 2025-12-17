import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsAndOrdersPage from "./pages/ProductsAndOrders";
import Dashboard from "./pages/Dashboard";
export default function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/orders", element: _jsx(ProductsAndOrdersPage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) })] }));
}
