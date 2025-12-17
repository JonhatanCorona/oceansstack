// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductsAndOrdersPage from "./pages/ProductsAndOrders";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<ProductsAndOrdersPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}
