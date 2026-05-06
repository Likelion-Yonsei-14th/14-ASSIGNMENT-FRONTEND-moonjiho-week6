import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/product";
import { useCartStore } from "../stores/cartStore";
import { useState } from "react";

export default function ProductDetail() {
  const addToCart = useCartStore((state) => state.addToCart);
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [added, setAdded] = useState(false);

  if (!product) {
  return;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div>
      <Link to="/products" className="text-gray-500 hover:text-gray-900">
    ← 목록으로
      </Link>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          className="w-full h-96 object-cover rounded-lg"
        />
    
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      
          <p className="text-2xl text-blue-600 font-bold mb-6">
            {product.price.toLocaleString()}원
          </p>
          <p className="text-[#666] mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition
              ${added
                ? "bg-green-500"
                : "bg-black hover:bg-gray-800"
              }`}
          >
            {added ? "✓ 담았습니다!" : "🛒 장바구니 담기"}
          </button>
        </div>
      </div>
    </div>
  );
}