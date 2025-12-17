import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface HomeButtonProps {
  label?: string;            
  colorClass?: string;      
}

export default function HomeButton({ label = "Inicio", colorClass = "bg-blue-600" }: HomeButtonProps) {
  return (
    <Link
      to="/"
      className={`fixed top-4 right-4 inline-flex items-center gap-2 ${colorClass} hover:${colorClass.replace("-500", "-600")} text-white font-bold py-2 px-4 rounded shadow transition-transform transform hover:scale-105`}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      {label}
    </Link>
  );
}
