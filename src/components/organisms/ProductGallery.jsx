import ProductCard from "../molecules/ProductCard";
import { useProductStore } from "../../store/productStore";

const ProductGallery = () => {
  const {
    filteredProducts,
    currentPage,
    productsPerPage,
    setCurrentPage,
  } = useProductStore();

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Galería de Productos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ProductGallery;