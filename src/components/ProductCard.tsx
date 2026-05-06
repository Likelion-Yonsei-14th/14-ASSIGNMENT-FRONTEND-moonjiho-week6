import type { Product } from "../types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  currentCategory: string;
}

export default function ProductCard({ product, currentCategory }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      state={{ category: currentCategory }}
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-blue-600 font-bold mt-1">
          {product.price.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}