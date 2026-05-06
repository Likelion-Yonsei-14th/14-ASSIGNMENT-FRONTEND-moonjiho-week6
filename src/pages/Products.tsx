import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

  const categories = ["전체", "상의", "아우터", "하의", "신발", "가방", "소품"];

  const filteredProducts = products.filter((product) => {
    const Search = product.name.toLowerCase().includes(search.toLowerCase());
    const Category = category === "전체" || product.category === category;

    return Search && Category;
  });
  return (
    <div>
      <input
        type="text"
        placeholder="상품 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2 mb-6">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-2 rounded-lg border transition 
              ${category === item
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">상품 목록</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}