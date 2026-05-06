import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">MOONSINSA</h1>

      <p className="text-gray-600 mb-8">
        
      </p>

      <Link
        to="/products"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        상품 보러가기
      </Link>
    </div>
  );
}