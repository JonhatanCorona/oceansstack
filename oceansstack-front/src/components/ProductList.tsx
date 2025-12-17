import type { Product } from "../types/Product";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="relative z-10">
      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="border p-2 rounded flex justify-between bg-green-900"
          >
            <span>{p.name}</span>
            <span className="ml-auto">${p.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
