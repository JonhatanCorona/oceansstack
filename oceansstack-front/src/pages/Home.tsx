import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white px-6">
      <div className="w-full max-w-3xl text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2">OceansStack</h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-8">
          Aplicación web moderna para la gestión de órdenes en un restaurante
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Selecciona tu perfil para acceder a la aplicación
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProfileCard
            title="Mesero"
            description="Visualiza todos los productos disponibles y crea nuevas órdenes."
            link="/orders"
            bgColor="bg-green-600"
            hoverColor="hover:bg-green-700"
            overlayColor="bg-green-500"
            textColor="text-green-100"
          />

          <ProfileCard
            title="Administrador"
            description="Crea nuevos productos y visualiza el dashboard completo de órdenes y productos."
            link="/dashboard"
            bgColor="bg-purple-600"
            hoverColor="hover:bg-purple-700"
            overlayColor="bg-purple-500"
            textColor="text-purple-100"
          />
        </div>
      </div>
    </div>
  );
}
