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
    <section className="px-6 md:px-12 py-12">
      <div className="mb-10">
        <h2 className="font-serif text-3xl tracking-wide text-[#1F1F1F]">
          Colección
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mt-1">
          Piezas seleccionadas
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-14">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-5 py-2 text-xs uppercase tracking-[0.15em] border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1F1F1F]"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-9 h-9 text-xs tracking-wide transition duration-300 ${
              currentPage === index + 1
                ? "bg-[#1F1F1F] text-white"
                : "border border-[#E8E2D8] text-[#6B6B6B] hover:border-[#1F1F1F] hover:text-[#1F1F1F]"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-5 py-2 text-xs uppercase tracking-[0.15em] border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1F1F1F]"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ProductGallery;