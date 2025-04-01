import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set, get) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    setCart: (newCart) => set({ cart: newCart }),
    // setCart: (newCart) => set((state) => (state.cart = newCart)),
    addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItem: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
    increaseItemQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * item.price,
              }
            : item,
        ),
      })),
    decreaseItemQuantity: (id) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: (item.quantity - 1) * item.price,
              }
            : item,
        ),
      })),
    clearCart: () => set({ cart: [] }),
    getQuantityById: (id) =>
      get().cart.find((item) => item.id === id)?.quantity ?? 0,
    getTotalCartPrice: () =>
      get().cart.reduce((sum, item) => item.total + sum, 0),
  })),
);

export default useCartStore;
