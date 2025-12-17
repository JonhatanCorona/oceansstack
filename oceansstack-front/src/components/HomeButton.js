import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
export default function HomeButton({ label = "Inicio", colorClass = "bg-blue-600" }) {
    return (_jsxs(Link, { to: "/", className: `fixed top-4 right-4 inline-flex items-center gap-2 ${colorClass} hover:${colorClass.replace("-500", "-600")} text-white font-bold py-2 px-4 rounded shadow transition-transform transform hover:scale-105`, children: [_jsx(ArrowLeftIcon, { className: "w-5 h-5" }), label] }));
}
