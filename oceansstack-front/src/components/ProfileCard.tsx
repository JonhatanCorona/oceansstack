import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ProfileCardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  overlayColor: string;
}

export default function ProfileCard({
  title,
  description,
  link,
  bgColor,
  hoverColor,
  textColor,
  overlayColor,
}: ProfileCardProps) {
  return (
    <Link
      to={link}
      className={`group relative ${bgColor} ${hoverColor} text-white rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden`}
    >
      <div className={`absolute -inset-1 ${overlayColor} opacity-20 blur-xl rounded-2xl`}></div>
      <h2 className={`text-3xl font-bold mb-4 z-10 relative`}>{title}</h2>
      <p className={`mb-6 z-10 relative ${textColor}`}>{description}</p>
      <div className={`flex items-center justify-center gap-2 font-medium group-hover:underline z-10 relative ${textColor}`}>
        Ingresar <ArrowRightIcon className="w-5 h-5" />
      </div>
    </Link>
  );
}
