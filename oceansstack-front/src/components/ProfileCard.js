import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function ProfileCard({ title, description, link, bgColor, hoverColor, textColor, overlayColor, }) {
    return (_jsxs(Link, { to: link, className: `group relative ${bgColor} ${hoverColor} text-white rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden`, children: [_jsx("div", { className: `absolute -inset-1 ${overlayColor} opacity-20 blur-xl rounded-2xl` }), _jsx("h2", { className: `text-3xl font-bold mb-4 z-10 relative`, children: title }), _jsx("p", { className: `mb-6 z-10 relative ${textColor}`, children: description }), _jsxs("div", { className: `flex items-center justify-center gap-2 font-medium group-hover:underline z-10 relative ${textColor}`, children: ["Ingresar ", _jsx(ArrowRightIcon, { className: "w-5 h-5" })] })] }));
}
