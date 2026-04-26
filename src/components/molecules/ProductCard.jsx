const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-[#E8E2D8] overflow-hidden group transition duration-300 hover:shadow-[0_4px_24px_rgba(184,155,114,0.12)]">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F73] mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-[#1F1F1F] mb-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-sm text-[#6B6B6B] line-clamp-2 mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-serif text-xl text-[#1F1F1F]">
            ${product.price}
          </span>
          <button className="px-5 py-2 text-xs uppercase tracking-[0.15em] border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition duration-300">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;