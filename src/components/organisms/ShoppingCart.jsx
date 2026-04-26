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
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow rounded-2xl p-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price} c/u</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    -
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>

                  <button
                    onClick={() => clearItem(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;