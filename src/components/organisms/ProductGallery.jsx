import ProductCard from "../molecules/ProductCard";
import { useProductStore } from "../../store/productStore";

const ProductGallery = () => {
  const filteredProducts = useProductStore(
    (state) => state.filteredProducts
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Galería de Productos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;