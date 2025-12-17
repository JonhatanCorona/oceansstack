import { useState } from "react";
import * as Yup from "yup";
import type { Product } from "../types/Product";

interface ProductSectionProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (product: Product) => Promise<Product>;
  showToast: (message: string, type: "success" | "error") => void;
}

export default function ProductSection({ products, setProducts, createProduct, showToast }: ProductSectionProps) {
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
    } catch (err: any) {
      showToast(err.message || "Error creando producto", "error");
    }
  };

  return (
    <section className="relative bg-purple-600 bg-opacity-20 p-8 rounded-2xl shadow-2xl flex-1 flex flex-col">
      <div className="absolute -inset-1 bg-purple-500 opacity-20 blur-xl rounded-2xl"></div>
      <h2 className="text-3xl font-bold mb-4 relative z-10">Productos</h2>
      <div className="relative z-10 flex flex-col gap-4">
        <ul className="space-y-2">
          {products.map((p) => (
            <li key={p.id} className="flex justify-between border p-2 rounded bg-purple-900">
              <span>{p.name}</span>
              <span>${Number(p.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
        >
          {showForm ? "Cancelar" : "Agregar Producto"}
        </button>

        {showForm && (
          <div className="flex flex-col gap-2 bg-purple-800 p-4 rounded">
            <input
              type="text"
              placeholder="Nombre del producto"
              className="p-2 rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Precio"
              className="p-2 rounded text-black"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              onClick={handleAddProduct}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Crear Producto
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
