import { create } from "zustand";
import { mockProducts } from "../mockdata/products";

export const useProductStore = create((set) => ({
  products: mockProducts,
  filteredProducts: mockProducts,
  searchTerm: "",

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

      return {
        searchTerm: term,
        filteredProducts: filtered,
      };
    }),

  resetProducts: () =>
    set((state) => ({
      filteredProducts: state.products,
      searchTerm: "",
    })),
}));