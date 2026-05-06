import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl mb-4">장바구니가 비어있습니다.</p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          상품 보러가기
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">장바구니</h2>

      {cart.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex items-center gap-4 p-6 mb-6 bg-white border border-gray-200 rounded-xl shadow-sm"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-25 h-25 object-cover rounded"
          />

          <div className="flex-1 text-1xl font-bold mb-4">
            <b>{item.name}</b>

            <p className="text-blue-600 font-bold">
              {(item.quantity*item.price).toLocaleString()}원
            </p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQuantity(index)}
                className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(index)}
                className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="text-red-500 hover:text-red-700"
          >
            삭제
          </button>

        </div>
      ))}

      <div className="flex justify-between items-center p-6 mt-8 bg-white border border-gray-200 rounded-xl shadow-sm">
        <span>총 {cart.length}개 상품</span>
        <b className="text-lg">
          {total.toLocaleString()}원
        </b>
      </div>
      <button
        onClick={() => {
          alert("결제가 완료되었습니다!");
          clearCart();
        }}
        className="w-full mt-4 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800"
      >
        결제하기
      </button>
    </div>
  );
}