import { useCartStore } from "../../store/cartStore";

const ShoppingCart = () => {
  const {
    cartItems,
    total,
    addToCart,
    removeFromCart,
    clearItem,
  } = useCartStore();

  return (
    <section className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="font-serif text-3xl tracking-wide text-[#1F1F1F]">
          Carrito
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mt-1">
          Tus selecciones
        </p>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-sm text-[#8A7F73] tracking-wide py-16 text-center border-t border-[#E8E2D8]">
          Tu carrito está vacío.
        </p>
      ) : (
        <>
          <div className="divide-y divide-[#E8E2D8]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-6"
              >
                <div className="flex gap-5 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover border border-[#E8E2D8]"
                  />
                  <div>
                    <h3 className="font-serif text-[#1F1F1F] tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] mt-1">
                      ${item.price} c/u
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#8A7F73] mt-1">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 border border-[#E8E2D8] text-[#6B6B6B] hover:border-[#1F1F1F] hover:text-[#1F1F1F] transition duration-300 text-sm"
                  >
                    −
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 border border-[#E8E2D8] text-[#6B6B6B] hover:border-[#1F1F1F] hover:text-[#1F1F1F] transition duration-300 text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => clearItem(item.id)}
                    className="px-4 py-1 text-xs uppercase tracking-[0.15em] text-[#8A7F73] border border-[#E8E2D8] hover:border-[#B89B72] hover:text-[#B89B72] transition duration-300"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#E8E2D8] flex justify-between items-baseline">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73]">
              Total
            </p>
            <span className="font-serif text-3xl text-[#1F1F1F]">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="mt-8 text-right">
            <button className="px-8 py-3 text-xs uppercase tracking-[0.2em] bg-[#1F1F1F] text-white hover:bg-[#B89B72] transition duration-300">
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;