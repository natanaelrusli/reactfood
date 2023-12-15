import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  totalPrice: 0,
  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          items: updatedItems,
          totalPrice: (
            parseFloat(state.totalPrice) + parseFloat(item.price)
          ).toFixed(2),
        };
      } else {
        return {
          items: [{ ...item, quantity: 1 }, ...state.items],
          totalPrice: (
            parseFloat(state.totalPrice) + parseFloat(item.price)
          ).toFixed(2),
        };
      }
    }),
  decreaseItem: (itemId) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id === itemId) {
            const newQuantity = item.quantity - 1;
            return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
          }
          return item;
        });

        return {
          items: updatedItems.filter((item) => item.quantity > 0),
          totalPrice: (
            parseFloat(state.totalPrice) - parseFloat(existingItem.price)
          ).toFixed(2),
        };
      }

      return state;
    }),
}));
