import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  total: 0,

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      const updatedTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        cartItems: updatedCart,
        total: updatedTotal,
      };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      const updatedTotal = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        cartItems: updatedCart,
        total: updatedTotal,
      };
    }),
}));