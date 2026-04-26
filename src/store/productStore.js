import { create } from "zustand";
import { mockProducts } from "../mockdata/products";

export const useProductStore = create((set, get) => ({
  products: mockProducts,
  filteredProducts: mockProducts,
  searchTerm: "",
  currentPage: 1,
  productsPerPage: 6,

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase())
      );

      return {
        searchTerm: term,
        filteredProducts: filtered,
        currentPage: 1,
      };
    }),

  setCurrentPage: (page) => set({ currentPage: page }),
}));