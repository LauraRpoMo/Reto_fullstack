import { useCartStore } from "../../store/cartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            ${product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;