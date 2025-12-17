import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Product } from "../types/Product";

interface ProductSelectProps {
  products: Product[];
  selectedProducts: Product[];
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  total: number;
  onCreateOrder: () => void;
}

export default function ProductSelect({
  products,
  selectedProducts,
  selectedProductId,
  setSelectedProductId,
  onAdd,
  onRemove,
  total,
  onCreateOrder,
}: ProductSelectProps) {
  return (
    <div className="relative z-10 flex flex-col gap-4">
      <label className="font-semibold">Selecciona productos:</label>
      <div className="flex gap-2">
        <select
          className="p-2 rounded text-black flex-1"
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
        >
          <option value="">Selecciona un producto</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} - ${p.price.toFixed(2)}
            </option>
          ))}
        </select>
        <button
          onClick={onAdd}
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded"
        >
          Agregar
        </button>
      </div>

      {selectedProducts.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Productos seleccionados:</h3>
          <ul className="space-y-1">
            {selectedProducts.map((p, i) => (
              <li
                key={i}
                className="flex justify-between items-center border p-2 rounded bg-green-900"
              >
                <span>{p.name}</span>
                <div className="flex items-center gap-4 min-w-[80px] justify-end">
                  <span className="w-16 text-right">${p.price.toFixed(2)}</span>
                  <button
                    className="text-red-400 hover:text-red-600 w-5 h-5"
                    onClick={() => onRemove(i)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2 text-right">Total: ${total.toFixed(2)}</p>
          <div className="flex justify-center mt-2">
            <button
              onClick={onCreateOrder}
              className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded"
            >
              Crear Orden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
