import { jsx as _jsx } from "react/jsx-runtime";
export default function Toast({ message, type }) {
    return (_jsx("div", { className: `fixed top-4 right-4 px-4 py-2 rounded shadow-lg font-semibold ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`, children: message }));
}
