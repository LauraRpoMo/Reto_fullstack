export const mockCategories = [
  {
    id: 1,
    name: "Electrónica",
    slug: "electronics"
  },
  {
    id: 2,
    name: "Moda",
    slug: "fashion"
  },
  {
    id: 3,
    name: "Accesorios",
    slug: "accessories"
  },
  {
    id: 4,
    name: "Hogar",
    slug: "home"
  }
];

/* Prueba alternativa de categorias

import React from 'react';

const CategoryFilters = ({ activeCategory, setActiveCategory }) => {
  // Lista de categorías basada exactamente en tu mockData
  const categories = [
    "Todas", 
    "Hogar", 
    "Muebles", 
    "Cuidado", 
    "Papelería", 
    "Cocina", 
    "Accesorios"
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-8 px-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`
            px-6 py-2 rounded-full border text-xs uppercase tracking-[0.2em] transition-all duration-300
            ${activeCategory === category 
              ? "bg-[#1F1F1F] text-white border-[#1F1F1F]" 
              : "bg-transparent text-[#8A7F73] border-[#E8E2D8] hover:border-[#B89B72]"}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;*/