import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">전체 상품</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}