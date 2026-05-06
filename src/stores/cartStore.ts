import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, { ...product, quantity: 1 }],
        })),

      removeFromCart: (index) =>
        set((state) => ({
          cart: state.cart.filter((_, i) => i !== index),
        })),

      increaseQuantity: (index) =>
        set((state) => ({
          cart: state.cart.map((item, i) =>
            i === index
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (index) =>
        set((state) => ({
          cart: state.cart.map((item, i) =>
            i === index && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);