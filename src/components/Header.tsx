import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCartStore } from "../stores/cartStore";

export default function Header() {
const cart = useCartStore((state) => state.cart);
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* 로고 */}
        <Link to="/" className="text-xl font-bold text-gray-900">
          🛍 MOONSINSA
        </Link>

        {/* 메뉴 */}
        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            상품
          </Link>

          <Link to="/cart" className="relative">
            🛒 장바구니

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}